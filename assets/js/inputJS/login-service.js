/**
 * Login to admin panel function
 */
function loginFunctionality() {
  document.getElementById('login-form').addEventListener('submit', event => {
    event.preventDefault();
    let hasError = false;
    const email = event.target[0];
    const password = event.target[1];
    email.offsetParent.classList.remove('has-error');
    password.offsetParent.classList.remove('has-error');

    if (email.value === '') {
      email.offsetParent.classList.add('has-error');
      hasError = true;
    }

    if (password.value === '') {
      password.offsetParent.classList.add('has-error');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const postParams = Object.assign(
      {},
      {
        email: email.value,
        password: password.value,
      },
    );

    axios
      .post(`${authServerBaseUrl}/auth/login`, postParams)
      .then(function(response) {
        if (response.data.token) {
          window.open(`${adminPaneAuthUrl}`, '_self').close();
        }
      })
      .catch(function(error) {
        email.offsetParent.classList.add('has-error');
        password.offsetParent.classList.add('has-error');
      });
  });
}

loginFunctionality();
