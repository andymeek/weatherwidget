/**
 * This is just a dummy server to facilidate our React SPA examples.
 * For a more professional setup of Express, see...
 * http://expressjs.com/en/starter/generator.html
 */

import express from 'express';
import path from 'path';

const app = express();

/**
 * Anything in public can be accessed statically without
 * this express router getting involved
 */

app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false,
}));

/**
 * Serve editor HTML file for editor requests
 */

app.get('/editor', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'editor.html'));
});

/**
 * Serve widget HTML file for widget requests
 */

app.get('/widget', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'widget.html'));
});

/**
 * Always serve the widget HTML file for all other requests
 */

app.get('*', (req, res) => {
  console.log('Request: [GET]', req.originalUrl);
  res.sendFile(path.resolve(__dirname, 'widget.html'));
});


/**
 * Error Handling
 */

app.use((req, res, next) => {
  console.log('404');
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.sendStatus(err.status || 500);
});


/**
 * Start Server
 */

const port = 3000;
app.listen(port);

console.log(`Serving: localhost: ${port}`);
