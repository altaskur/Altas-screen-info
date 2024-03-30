const app = require('./app');

app.use((req, res, next) => {
  res.locals.serverAddress = req.hostname;
  next();
});
app.listen(3007, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});
