        function produtosHTML(tela) {
                    if (tela <= 576) {
                    for (let i = 0; i < 8; i++) {
                    let produtoDiv = document.createElement("div");
                    produtoDiv.setAttribute("id",`produto${i}`)
                    produtoDiv.setAttribute("class", "col-6");
                    produtoDiv.addEventListener('click',() => {
                        window.location.href = '/detalhes.html'
                    })
                    

                    produtoDiv.innerHTML = `
                                <div id="imagem-produto" class="text-center">
                                    <img src="imagens/Produto gênerico.png" alt="Produto gênerico">
                                </div>
                                <div id="descrição-produto">
                                    <p>Tênis</p>
                                    <p>K-Swiss V8 - Mascu...</p>
                                    <div class="d-flex justify-content-between">
                                        <p id="preco-antigo" class="text-decoration-line-through opacity-50">R$200</p>
                                    <p id="preco-atual" class="fw-bold">R$100</p>
                                </div>
                                </div>
                            `;
                    
                    produtos.appendChild(produtoDiv);
                }
            } else {
                for (let i = 0; i < 16; i++) {
                    let produtoDiv = document.createElement("div");
                    produtoDiv.setAttribute("id",`produto${i}`)
                    produtoDiv.setAttribute("class", "col-6 col-md-3");
                    produtoDiv.addEventListener('click',() => {
                        window.location.href = '/detalhes.html'
                    })
                    

                    produtoDiv.innerHTML = `
                                <div id="imagem-produto" class="text-center">
                                    <img src="imagens/Produto gênerico.png" alt="Produto gênerico">
                                </div>
                                <div id="descrição-produto">
                                    <p>Tênis</p>
                                    <p>K-Swiss V8 - Masculino</p>
                                    <div class="d-flex justify-content-between">
                                        <p id="preco-antigo" class="text-decoration-line-through opacity-50">R$200</p>
                                    <p id="preco-atual" class="fw-bold">R$100</p>
                                </div>
                                </div>
                            `;
                    
                    produtos.appendChild(produtoDiv);
                }
            }
            
                }
        function Navbar(tela) {
            let navbar = document.getElementById('navbar')
            navbar.setAttribute('class', 'col-12')
            if (tela >= 576) {
                 navbar.outerHTML = `
                 <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="imagens/logo.png" alt="Logo" height="24" class="d-inline-block align-text-top" />
          
        </a>
        <div>
          <form class="d-flex" style="background-color: #f8f8f8" role="search">
            <input class="form-control me-2 mt-1" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn" type="submit">
              <img src="imagens/Search.png" alt="pesquisa" />
            </button>
          </form>
        </div>
        <div>
          <a href="" class="text-dark p-3">Cadastre-se</a>
          <button type="button" class="btn" style="background: #c92071">
            <a href="" class="text-decoration-none text-light">Entrar</a>
          </button>
        </div>
        <div>
          <img src="/Projeto-final-equipe-5/Lista de produtos/imagens/Carrinho.png" alt="Carrinho" />
        </div>
      </div>

    </nav>

    <!-- navbar2 -->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class=" navebar navbar-nav">
            <a class="nav-link" href="#">home</a>
            <a class="nav-link" href="#">produtos</a>
            <a class="nav-link" href="#">Categorias</a>
            <a class="nav-link" href="#">meus pedidos</a>
          </div>
        </div>
      </div>
    </nav>
            `; 
            }
            
               
        }    
        const produtos = document.getElementById("produtos");
        const logo = document.getElementById('logo')
        const pesquisa = document.getElementById('pesquisa')
        const carrinho = document.getElementById('carrinho')
        const btnlimparfiltro = document.getElementById('limparfiltro')
        const formfiltro = document.getElementById('form-filtro')
        
        logo.addEventListener('click', () => {window.location.href = "/Projeto-final-equipe-5/PaginaHome/index.html";})
        btnlimparfiltro.addEventListener('click', () => {formfiltro.reset()})

        produtosHTML(window.innerWidth)
        Navbar(window.innerWidth)

        
        