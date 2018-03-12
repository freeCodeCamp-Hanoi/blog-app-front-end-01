import jwt_decode from 'jwt-decode'

const prefix = 'fcc_'
const _token = prefix + 'token'

function getItem (key) {
  return localStorage.getItem(key)
}

export const Auth = {

  getToken: () => getItem(_token),

  setToken: (value) => {
    localStorage.setItem(_token, value)
  },

  isAuthenticated: () => getItem(_token) !== null,

  logout: () => {
    localStorage.removeItem(_token)
  },
  id: () => {
    return jwt_decode(getItem(_token)).userId || null;
  }
}