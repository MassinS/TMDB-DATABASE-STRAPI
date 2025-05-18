/**
 * vote controller with average calculation and optional id_media_type filter
 */

import { factories } from '@strapi/strapi';
import type { Context } from 'koa';

export default factories.createCoreController('api::vote.vote', ({ strapi }) => ({
  // GET /votes/average?id_media_type=...
  async average(ctx: Context) {
    const { id_media_type } = ctx.query;
    // Construction de la query avec Knex
    const qb = strapi.db.connection('votes');

    if (id_media_type) {
      // Convertit la query string en entier
      const mediaTypeId = parseInt(id_media_type as string, 10);
      qb.where('id_media_type', mediaTypeId);
    }

    const result = await qb.avg('vote as average');

    // Knex renvoie [{ average: string|null }]
    const raw = result[0].average;
    const average = raw !== null ? parseFloat(raw as string) : 0;

    ctx.body = { average };
  },
}));
