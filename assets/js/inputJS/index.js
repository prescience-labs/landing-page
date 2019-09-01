import loginService from './login-service';
import singIngService from './sing-in-service';
import reviewService from './review-service';

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

loginService(emailIsValid);
singIngService(emailIsValid);
reviewService();
