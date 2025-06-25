import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

export const require2FA = (req, res, next) => {
  if (req.user.twoFactorEnabled && !req.user.twoFactorVerified) {
    return res.status(403).json({ error: 'Se requiere autenticación de dos factores' });
  }
  next();
};

function checkRole(roles) {
  return function (req, res, next) {

    if (!req.user) {
      return res.redirect('/auth/login');
    }

    if (roles.includes(req.user.role)) {
      return nextTick();
    }

    res.status(403).render('error',{
      message: 'No tienes permisos para acceder a esta pagina'
    });
  }
}

module.exports = checkRole