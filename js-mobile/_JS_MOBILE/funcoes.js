/**
* função são blocos que podem reutilizar 
*funçỗes podem ou não receber parâmetros
*função podem retornar valores ou não 
*função podem ser anônimas
*/
// declação de função
function dizOLA() {
  alert('OLA')
}
function olaPessoa(nome) {
  alert('OLA ' + nome)
}
const nome = 'caio'
const sobrenome = 'silva'
const idade = 19

function dadoPessoa(){
  const dados = nome + sobrenome + idade
  console.log(dados)
}

// inovação de funcção
dizOLA()
olaPessoa('Caio cabeça de arromba navio')
dadoPessoa()