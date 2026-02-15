import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '..', 'public', 'assets', 'images')

const photos = [
  { src: 'doctor-photo-green-large.jpg', out: 'doctor-photo-green-square.png' },
  { src: 'doctor-photo-white-large.jpg', out: 'doctor-photo-white-square.png' },
]

for (const { src, out } of photos) {
  const inputPath = path.join(imagesDir, src)
  const outputPath = path.join(imagesDir, out)

  await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 3600, height: 3600 })
    .resize(1200, 1200)
    .png()
    .toFile(outputPath)

  console.log(`Created ${out} (1200x1200)`)
}
