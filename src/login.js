const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    senha: "123456",
    expirado: false
  },
  {
    id: 2,
    nome: "Maria Souza",
    email: "maria@email.com",
    senha: "abc123",
    expirado: true
  },
  {
    id: 3,
    nome: "Carlos Lima",
    email: "carlos@email.com",
    senha: "senhaSegura",
    expirado: false
  }
];

// Função de login
function fazerLogin(email, senha) {
  // Procura usuário pelo email
  const usuario = usuarios.find(user => user.email === email);

  // Usuário não encontrado
  if (!usuario) {
    return "Usuário não encontrado";
  }

  // Senha incorreta
  if (usuario.senha !== senha) {
    return "Senha incorreta";
  }

  // Credencial expirada
  if (usuario.expirado) {
    return "Renove suas credenciais";
  }

  // Sucesso
  return "Login realizado com sucesso";
}