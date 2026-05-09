// 1) Sucesso
console.log(
  fazerLogin("joao@email.com", "123456")
);


// 2) Credencial expirada
console.log(
  fazerLogin("maria@email.com", "abc123")
);


// 3) Usuário não encontrado
console.log(
  fazerLogin("naoexiste@email.com", "123456")
);


// 4) Senha incorreta
console.log(
  fazerLogin("carlos@email.com", "senhaErrada")
);
