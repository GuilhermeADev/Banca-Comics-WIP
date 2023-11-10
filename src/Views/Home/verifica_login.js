const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

if (isLoggedIn) {

} else {
  
  window.location.href = 'login.html';
}
