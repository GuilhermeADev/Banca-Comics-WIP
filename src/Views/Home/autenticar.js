// Função para verificar se um usuário está cadastrado no localStorage
function isUserRegistered(email, senha) {
    const storedData = localStorage.getItem('users');
    if (storedData) {
      const users = JSON.parse(storedData);
      return users.some(user => user.email === email && user.senha === senha);
    }
    return false;
  }
  

  function onLoginFormSubmit(event) {
    event.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;
  
    if (isUserRegistered(email, senha)) {
      localStorage.setItem('loggedIn', 'true');
      window.location.href = 'index.html';
    
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  }
 
  document.querySelector('form').addEventListener('submit', onLoginFormSubmit);
  