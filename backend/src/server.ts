// import app from './app';

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server is up and running on port ${port}`);
// });

import app, { init } from '@/app';
// import 'module-alias/register';

const port = +process.env.PORT || 4000;

init().then(() => {
  app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Server is listening on port ${port}.`);
  });
});
