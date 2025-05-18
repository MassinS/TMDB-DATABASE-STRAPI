// src/api/vote/routes/vote.ts

export default {
  routes: [

    {
      method: 'GET',
      path: '/votes/average',
      handler: 'vote.average',
      config: {
         auth: {
          scope: ['plugin::users-permissions.authenticated'],
        },
        policies: [],
        middlewares: [],
        description: 'Get average vote',
        tags: ['Vote'],
      },
    },

    {
      method: 'GET',
      path: '/votes',
      handler: 'vote.find',
      config: {
        auth: {
          scope: ['plugin::users-permissions.authenticated'],
        },
      },
    },
    {
      method: 'GET',
      path: '/votes/:id',
      handler: 'vote.findOne',
      config: {
        auth: {
          scope: ['plugin::users-permissions.authenticated'],
        },
      },
    },
    {
      method: 'POST',
      path: '/votes',
      handler: 'vote.create',
      config: {
        auth: {
          scope: ['plugin::users-permissions.authenticated'],
        },
      },
    },
    {
      method: 'PUT',
      path: '/votes/:id',
      handler: 'vote.update',
      config: {
        auth: {
          scope: ['plugin::users-permissions.authenticated'],
        },
      },
    },
    {
      method: 'DELETE',
      path: '/votes/:id',
      handler: 'vote.delete',
      config: {
        auth: {
          scope: ['plugin::users-permissions.authenticated'],
        },
      },
    },
  ],
};
