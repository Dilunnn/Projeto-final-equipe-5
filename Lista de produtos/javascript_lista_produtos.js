        function produtosHTML(tela) {
                    if (tela <= 576) {
                    for (let i = 0; i < 8; i++) {
                    let produtoDiv = document.createElement("div");
                    produtoDiv.setAttribute("id",`produto${i}`)
                    produtoDiv.setAttribute("class", "col-6");
                    produtoDiv.addEventListener('click',() => {
                        window.location.href = '/Projeto-final-equipe-5/Detalhes/detalhes.html'
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
            // if (tela >= 576) {
            //      navbar.outerHTML = `
            

            // ` 
            // }
            
               
        }    
        const produtos = document.getElementById("produtos");
        const logo = document.getElementById('logo')
        const pesquisa = document.getElementById('pesquisa')
        const carrinho = document.getElementById('carrinho')
        const btnlimparfiltro = document.getElementById('limparfiltro')
        const formfiltro = document.getElementById('form-filtro')
        
        logo.addEventListener('click', () => {window.location.href = '/PaginaHome/index.html'})
        btnlimparfiltro.addEventListener('click', () => {formfiltro.reset()})

        produtosHTML(window.innerWidth)
        Navbar(window.innerWidth)

        
        