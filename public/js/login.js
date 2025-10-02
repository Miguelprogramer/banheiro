function loginUsuario() {
  const rm = document.getElementById('username').value;
  const senha = document.getElementById('password').value;

  const alerta = document.getElementById('alerta');
  alerta.style.display = 'none';

  fetch('/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ rm, senha })
  })
  .then(response => response.json())
  .then(data => {
    alerta.style.display = 'block';
    if (data.success) {
      alerta.innerHTML = 'Login realizado com sucesso!';
      alerta.style.color = 'green';
      setTimeout(() => {
        if (data.usuario.nivel_usuario === 'professor') {
          window.location.href = '/pages/admin.html';
        } else {
          window.location.href = '/pages/saida.html';
        }
      }, 1000);
    } else {
      alerta.style.display = 'block';
      alerta.innerHTML = 'Usuário ou senha inválidos!';
      alerta.style.color = 'red';
    }
  })
  .catch(error => {
    alerta.style.display = 'block';
    alerta.innerHTML = 'Erro ao realizar login. Tente novamente.';
    alerta.style.color = 'red';
    console.error(error);
  });
}

window.loginUsuario = loginUsuario;
