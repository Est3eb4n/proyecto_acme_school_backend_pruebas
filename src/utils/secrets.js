import speakeasy from 'speakeasy';
import qrcode from 'qrcode';


export const generateSecret = () => {
  return speakeasy.generateSecret({ length: 20 });
};

export const generateQRCode = async (secret, user) => {
  const otpauthUrl = speakeasy.otpauthURL({
    secret: secret.ascii,
    label: `AcmeSchool:${user.email}`,
    issuer: 'Acme School'
  });
  
  return await qrcode.toDataURL(otpauthUrl);
};

export const verifyToken = (secret, token) => {
  return speakeasy.totp.verify({
    secret: secret,
    encoding: 'ascii',
    token: token,
    window: 1
  });
};

require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV || 'development';
const prod = ENVIRONMENT === 'production';

module.exports = {
    ENVIRONMENT,
    HOSTNAME: process.env.SERVER_HOSTNAME || 'localhost',
    PORT: process.env.SERVER_PORT || 4000,
    MONGO_URL: prod ? process.env.MONGO_URL_PROD : process.env.MONGO_URL_LOCAL,
    GOOGLE_CLIENTE_ID: process.env.GOOGLE_CLIENTE_ID,
    GOOGLE_CLIENTE_SECRET: process.env.GOOGLE_CLIENTE_SECRET,
    COOKIE_KEY: process.env.COOKIE_KEY || 'secret-key-for-dev'
};