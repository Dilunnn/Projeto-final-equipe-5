  
  let total = document.getElementById('total')
  let totalresumo = document.getElementById
  ('Subtotal')
  let totalresumo2 = document.getElementById('totalresumo')
  let quantidadenumero = document.getElementById('quantidadenum')
  let unitario = 219.00
  let quantidade = 1
  quantidadenumero.innerText = `${quantidade}`
  totalresumo.innerText = `R$${unitario},00`
  total.innerText = `R$${unitario},00`
  totalresumo2.innerText = `R$${unitario},00`
  
  
  
function diminuirquantidade(){
  
  quantidadenumero.innerText = `${quantidade -= 1}`
  
  total.innerText = `R$${unitario*quantidade},00`
  totalresumo2.innerText = `R$${(unitario*quantidade)-30},00`
  totalresumo.innerText = `R$${unitario*quantidade},00`
  
  
}

function aumentarquantidade() {
  
quantidadenumero.innerText = `${quantidade += 1}`
total.innerText = `R$${unitario*quantidade},00`
totalresumo2.innerText = `R$${(unitario*quantidade)-30},00`
totalresumo.innerText = `R$${unitario*quantidade},00`


}

function finalizarcompra() {
  alert('Compra Finalizada!')
}


