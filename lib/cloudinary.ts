import { v2 as cloudinary, ConfigOptions } from 'cloudinary'

const cfg: ConfigOptions = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
}

if (cfg.cloud_name && cfg.api_key && cfg.api_secret) {
  cloudinary.config(cfg)
}

export function isCloudinaryConfigured() {
  return Boolean(cfg.cloud_name && cfg.api_key && cfg.api_secret)
}

export { cloudinary }
