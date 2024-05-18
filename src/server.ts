const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

app.listen(port, () => {
  console.log(`Project is listening on port ${port}`);
});

export default app;
