import app from "./app";
import connectDB from "./db";

const PORT = process.env.PORT || 3000;

async function main() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
