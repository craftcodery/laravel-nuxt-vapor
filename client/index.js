const serverless = require('serverless-http');
const binaryMimeTypes = require('./binaryMimeTypes');
const nuxt = require('./nuxt');
const handler = serverless(nuxt, {
  binary: binaryMimeTypes,
});

module.exports.nuxt = async (event, context) => {
  if (event.source === 'serverless-plugin-warmup') {
    console.log('Warming Lambda');
    /** Slightly delayed (50ms) response to ensure concurrent invocation */
    await new Promise((r) => setTimeout(r, 50));
    return 'Lambda is warm!';
  }

  return await handler(event, context);
};
