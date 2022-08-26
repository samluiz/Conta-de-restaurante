let count = 0
let clientes = []
let cliente = {}
let pedido = {}
let id = 0

function calcBill() {

}

function checkout() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]")

  id += 1

    pedido = {
      id,
      clientes
  }

  console.log(id)

  pedidos.push(pedido)
  let btn = document.getElementById('checkout')
  btn.setAttribute('class', 'checkout')

  localStorage.setItem('pedidos', JSON.stringify(pedidos))
  console.log(pedidos)

  clientes.splice(0, clientes.length)

  window.alert("Pedido registrado")
}



function getClienteData() {

  let inputName = document.getElementById('name')
  let inputCpf = document.getElementById('cpf')
  let inputProduct = document.getElementById('product')
  let inputPrice = document.getElementById('price')

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
  else if (inputProduct.value == "") {
    inputProduct.setAttribute('class', 'invalid')
    window.alert("Você deve informar um produto.")
  }
  else if (inputPrice.value == "") {
    inputProduct.setAttribute('class', 'invalid')
    window.alert("Você deve informar um preço para o produto.")
  }
  else {

    count++

    let name = inputName.value
    let cpf = inputCpf.value
    let productName = inputProduct.value
    let price = inputPrice.value

    cliente = {
      name,
      cpf,
      productName,
      price
    }

    clientes.push(cliente)
    inputCpf.setAttribute('class', '')
    inputName.setAttribute('class', '')
    inputName.value = ""
    inputCpf.value = ""
    inputProduct.setAttribute('class', '')
    inputPrice.setAttribute('class', '')
    inputProduct.value = ""
    inputPrice.value = ""

    let btn = document.getElementById('checkout')

    console.log(count)

    if (count > 0) {
      btn.setAttribute('class', 'visible')
    }
    else {
      btn.setAttribute('class', '')
    }

    window.alert("Cliente registrado. Você pode registrar mais clientes. Não esqueça de fazer o checkout quando terminar.")
  }

  console.log(clientes)
}