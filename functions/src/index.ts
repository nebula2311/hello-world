import * as functions from "firebase-functions";
import next from 'next';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const server = next({
    dev: process.env.NODE_ENV !== 'production',
    conf: {distDir: '.next'}
})

const nextjsHandler = server.getRequestHandler();

export const nextServer = functions.https.onRequest(async (req, res) => {
    await server.prepare();
    return await nextjsHandler(req, res);
})
