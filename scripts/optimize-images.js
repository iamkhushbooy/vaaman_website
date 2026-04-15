const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../public");
const outputDir = path.join(__dirname, "../public/images-optimized");

const SKIP_FOLDER = "images-optimized";

function processDirectory(input, output) {
  if (input.includes(SKIP_FOLDER)) return;

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  const items = fs.readdirSync(input);

  items.forEach(async (item) => {
    const inputPath = path.join(input, item);
    const outputPath = path.join(output, item);

    const stat = fs.statSync(inputPath);

    if (stat.isDirectory()) {
      if (item === SKIP_FOLDER) return;
      processDirectory(inputPath, outputPath);
    } else {
      if (!/\.(jpg|jpeg|png|webp)$/i.test(item)) return;

      try {
        await sharp(inputPath)
          .resize(1200)
          .jpeg({ quality: 70 })
          .toFile(outputPath);

        console.log(`✔ Optimized: ${inputPath}`);
      } catch (err) {
        console.log(`✖ Error: ${inputPath}`);
      }
    }
  });
}

processDirectory(inputDir, outputDir);
console.log("Done optimizing images.");