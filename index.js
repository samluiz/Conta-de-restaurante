let count = 0
let clientes = []
let produtos = []
let pedidos = []
let pedido = {}

function add() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]")

    pedido = {
    clientes,
    produtos
  }

  pedidos.push(pedido)
  let btn = document.getElementById('add')
  btn.setAttribute('class', 'add')

  localStorage.setItem('pedidos', JSON.stringify(pedidos))
  console.log(pedidos)
}



function getClienteData() {

  clientes = JSON.parse(localStorage.getItem("clientes") || "[]")

  let inputName = document.getElementById('name')
  let inputCpf = document.getElementById('cpf')

  if (Array.from(inputCpf.value).length != 11) {
    inputCpf.setAttribute('class', 'invalid')
    window.alert("CPF Inválido")
    inputCpf.value = ""
  }
  else if (inputName.value == "") {
    inputName.setAttribute('class', 'invalid')
    window.alert("Nome Inválido")
    inputName.value = ""
  }
  else {

    let name = inputName.value
    let cpf = inputCpf.value

    cliente = {
      name,
      cpf
    }

    clientes.push(cliente)
    inputCpf.setAttribute('class', '')
    inputName.setAttribute('class', '')
    inputName.value = ""
    inputCpf.value = ""
  }

  localStorage.setItem('clientes', JSON.stringify(clientes))

  console.log(clientes)
}

function getProductData() {

  produtos = JSON.parse(localStorage.getItem("produtos") || "[]")

  let inputProduct = document.getElementById('product')
  let inputPrice = document.getElementById('price')

  if (inputProduct.value == "") {
    inputProduct.setAttribute('class', 'invalid')
    window.alert("Você deve informar um produto.")
  }
  else if (inputPrice.value == "") {
    inputProduct.setAttribute('class', 'invalid')
    window.alert("Você deve informar um preço para o produto.")
  }
  else {

    count++

    let name = inputProduct.value
    let price = inputPrice.value

    produto = {
      name,
      price
    }

    produtos.push(produto)
    inputProduct.setAttribute('class', '')
    inputPrice.setAttribute('class', '')
    inputProduct.value = ""
    inputPrice.value = ""

    let btn = document.getElementById('add')

    console.log(count)

    if (count > 0) {
      btn.setAttribute('class', 'visible')
    }
    else {
      btn.setAttribute('class', '')
    }
  }

  localStorage.setItem('produtos', JSON.stringify(produtos))

  console.log(produtos)

}