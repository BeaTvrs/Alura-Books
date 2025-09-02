const botoes = document.querySelectorAll ('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros () {
  const elementoBnt = document.getElementById(this.id);
  const categoria = elementoBnt.value
  let livrosFiltrados = livros.filter (livro => livro.categoria == categoria);
  console.table(livrosFiltrados);
}