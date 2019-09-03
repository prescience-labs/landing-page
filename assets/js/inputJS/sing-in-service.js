/**
 * Function for sing in to the admin panel
 */
function singInService(emailIsValid) {
  document.getElementById('sing-in-form').addEventListener('submit', event => {
    event.preventDefault();

    let hasError = false;
    const email = event.target[0];
    const password1 = event.target[1];
    const password2 = event.target[2];

    email.offsetParent.classList.remove('has-error');
    password1.offsetParent.classList.remove('has-error');
    password2.offsetParent.classList.remove('has-error');

    if (email.value === '') {
      email.offsetParent.classList.add('has-error');
      hasError = true;
    }

    if (!emailIsValid(email.value)) {
      email.offsetParent.classList.add('has-error');
      hasError = true;
    }

    if (password1.value === '') {
      password1.offsetParent.classList.add('has-error');
      hasError = true;
    }

    if (password2.value === '') {
      password2.offsetParent.classList.add('has-error');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (password1.value !== password2.value) {
      password1.offsetParent.classList.add('has-error');
      password2.offsetParent.classList.add('has-error');
      return;
    }

    const postParams = Object.assign(
      {},
      {
        email: email.value,
        password: password1.value,
      },
    );

    axios
      .post(`${authServerBaseUrl}/users`, postParams)
      .then(function(response) {
        if (response.data.id) {
          window
            .open(`${adminPaneAuthUrl}/false/${response.data.id}`, '_self')
            .close();
        }
      })
      .catch(function(error) {
        email.offsetParent.classList.add('has-error');
        password1.offsetParent.classList.add('has-error');
        password2.offsetParent.classList.add('has-error');
        throw new Error(error);
      });
  });
}

export default singInService;
