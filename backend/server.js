const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require('./src/routes/UserRoute');
const materialRouter = require('./src/routes/MaterialRoute');
const projetoRoute = require('./src/routes/ProjetoRoute')
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.use('/users', userRouter );
app.use('/material', materialRouter);
app.use('/projeto', projetoRoute);