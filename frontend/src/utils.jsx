var jwtDecode = require('jwt-decode')

export default {
  getTokenExpiry(token){
    try {
      var decoded = jwtDecode(token);
      return decoded.exp;
    } catch (error) {
      return 0;    
    }
  },
  hasTokenExpired(token){
    let now = Date.now() / 1000;
    return this.getTokenExpiry(token) <= now;
  }
};