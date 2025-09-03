const botoes = document.querySelectorAll(".btn");
botoes.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBnt = document.getElementById(this.id);
  const categoria = elementoBnt.value;
  let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria();
  exibirOsLivrosNaTela(livrosFiltrados);
  if (categoria == 'disponivel') {
    exibirValorTotalDosLivrosDisponiveisNaTela ();
  }

  function filtrarPorCategoria() {
    return livros.filter((livro) => livro.categoria == categoria);
  }
}

function filtrarPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela (){
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>`
}
