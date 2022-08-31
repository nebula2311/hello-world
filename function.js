const { https } = require('firebase-functions');
const { default: next } = require('next');

const server = next({
    dev: process.env.NODE_ENV !== 'production',
    //location of .next generated after running -> yarn build
    conf: { distDir: '.next' },
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https.onRequest((req, res) => {
    return server.prepare().then(() => nextjsHandle(req, res));
});