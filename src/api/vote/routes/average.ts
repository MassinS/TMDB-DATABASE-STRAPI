// src/api/vote/routes/average.ts
'use strict';

export default {
  routes: [
    {
    method: 'GET',
    path: '/votes/average',
    handler: 'api::vote.vote.average',
    }
   ]

};