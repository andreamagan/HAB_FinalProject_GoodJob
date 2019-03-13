'use strict';

const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const accountRepository = require('../../repositories/account/account-repository');


async function validateData(payload) {
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  };

  return Joi.validate(payload, schema);
}

async function createJwtToken() {
  const payloadJwt = {
    uuid: userData.uuid,
    role: userData.role,
  };

  const jwtTokenExpiration = parseInt(process.env.AUTH_ACCESS_TOKEN_TTL, 10);
  const token = jwt.sign(payloadJwt, process.env.AUTH_JWT_SECRET, { expiresIn: jwtTokenExpiration });
  const response = {
    accessToken: token,
    expiresIn: jwtTokenExpiration,
  };
}

async function login(req, res, next) {
  /**
   * Validar datos de entrada con Joi
   */
  const accountData = { ...req.body };
  try {
    await validateData(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * 1 Check si existe el usuario en la bbdd
   */

  try {

  } catch (e) {

  }

  /**
   * 2 Check si la cuenta está activada
   */

  /**
   *3 La clave es valida?
   */


  /**
   * Paso 4: Generar token JWT con uuid + role (admin) asociado al token
   * La duración del token es de 1 minuto (podria ir en variable de entorno)
   */


  return res.status(200).json(response);
}
};

module.exports = login;
