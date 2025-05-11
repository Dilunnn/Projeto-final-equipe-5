 function produtosHTML(tela) {
                    if (tela <= 360) {
                    for (let i = 1; i < 8; i++) {
                    let produtoDiv = document.createElement("div");
                    produtoDiv.setAttribute("id",`produto${i}`)
                    produtoDiv.setAttribute("class", "col-6");
                    produtoDiv.addEventListener('click',() => {
                        window.location.href = '/detalhes.html'
                    })
                    

                    produtoDiv.innerHTML = `
                                <div id="imagem-produto" style="background-color: #ffff;">
                                    <img src="Produto gênerico.png" alt="Produto gênerico">
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
            } 
            // adicionar 15 produtos se for maior
        }
        const produtos = document.getElementById("produtos");
        produtosHTML(window.innerWidth)
        