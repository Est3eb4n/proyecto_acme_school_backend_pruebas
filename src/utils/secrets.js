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