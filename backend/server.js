const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const userRouter = require('./src/routes/UserRoute');
const materialRouter = require('./src/routes/MaterialRoute');
const projetoRoute = require('./src/routes/ProjetoRoute');
const config = require('./config');
const url = config.mongoUrl;
const mongoose = require('mongoose');

async function run() {
  mongoose.connect(url)
      .then(
          () => console.log("Conectado corretamente ao servidor")
      )
      .catch(
          (error) => console.log(error)
      );
}
run().catch(console.dir);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use('/users', userRouter );
app.use('/material', materialRouter);
app.use('/projeto', projetoRoute);