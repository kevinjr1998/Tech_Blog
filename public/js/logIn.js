const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    debugger;
    
    if (response.ok) {
      debugger;
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHander = async (event) => {
 
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
  
  
    if (email && password && username) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      debugger;
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };



document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);

  document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHander);