function cadastrarUsuario() {
  const nome = document.getElementById('nome').value;
  const rm = document.getElementById('rm').value;
  const senha = document.getElementById('senha').value;
  const turma = document.getElementById('turma').value;

  const alerta = document.getElementById('alerta');
  alerta.style.display = 'none';

  fetch('/usuarios/cadastrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, rm, senha, turma })
  })
  .then(response => response.json())
  .then(data => {
    alerta.style.display = 'block';
    if (data.success) {
      alerta.innerHTML = 'Cadastro realizado com sucesso!';
      alerta.style.color = 'green';
      setTimeout(() => {
        window.location.href = '/';
      }, 1200);
    } else {
      alerta.innerHTML = 'Erro ao cadastrar usuário: ' + (data.message || 'Verifique os dados.');
      alerta.style.color = 'red';
    }
  })
  .catch(error => {
    alerta.style.display = 'block';
    alerta.innerHTML = 'Erro ao conectar com a API!';
    alerta.style.color = 'red';
    console.error(error);
  });
}

window.cadastrarUsuario = cadastrarUsuario;