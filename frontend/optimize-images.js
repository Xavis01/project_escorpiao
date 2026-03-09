import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesToOptimize = [
  'src/assets/empresa/sobre_1.jpg',
  'src/assets/empresa/sobre_2.jpg',
  'src/assets/empresa/sobre_6.jpg',
  'src/assets/empresa/sobre_8.jpg',
  'src/assets/identidade/HOME_PAGE.png'
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const imagePath of imagesToOptimize) {
    try {
      if (!fs.existsSync(imagePath)) {
        console.warn(`File not found: ${imagePath}`);
        continue;
      }

      const ext = path.extname(imagePath);
      const isPng = ext.toLowerCase() === '.png';
      const outputFilename = imagePath.replace(ext, '-opt.webp');
      
      const originalSize = (fs.statSync(imagePath).size / 1024 / 1024).toFixed(2);
      
      console.log(`Processing ${imagePath} (Original size: ${originalSize}MB)...`);

      let pipeline = sharp(imagePath);
      
      // se for a capa inicial (png principal), vamos ser mais generosos com o tamanho
      if (imagePath.includes('HOME_PAGE')) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
      } else {
          // As imagens da grade da empresa nao precisam ser maiores que 800px no layout
          pipeline = pipeline.resize({ width: 800, withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: 80 }) // Converter para webp com leve compressão
        .toFile(outputFilename);

      const optimizedSize = (fs.statSync(outputFilename).size / 1024 / 1024).toFixed(2);
      console.log(`✅ Success: ${outputFilename} (New size: ${optimizedSize}MB)\n`);

    } catch (error) {
      console.error(`❌ Error processing ${imagePath}:`, error);
    }
  }
  
  console.log('Done optimizing images.');
}

optimizeImages();
