let count = 0
let clientes = []
let cliente = {}
let pedido = {}
let price
let totalPrice = 0
let toast = document.getElementById('toast')

function checkout() {
  // Buscando itens do armazenamento local do navegador
  const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]")
  let id = JSON.parse(localStorage.getItem("id") || 0)


  if (clientes.length <= 0) {
    window.alert("Você não pode finalizar um pedido vazio")
  }

  // Calculando o preço total do pedido
  totalPrice = totalPrice

  // Incrementando o ID a cada pedido
    id = id + 1

    pedido = {
      id,
      clientes,
      totalPrice
  }

  // Inserindo o pedido no array de armazenamento de pedidos
  pedidos.push(pedido)

  // Desativando novamente o botão de checkout
  let btn = document.getElementById('checkout')
  btn.setAttribute('class', 'checkout')

  // Salvando itens no armazenamento local do navegador
  localStorage.setItem('pedidos', JSON.stringify(pedidos))
  localStorage.setItem('id', JSON.stringify(id))

  // Mostrando o toast de confirmação ao usuário
  toast.setAttribute('id', 'show')
  toast.innerText = "Pedido registrado!"
  toast.style.border = "1px solid green";
  setTimeout(() => { toast.setAttribute('id', '')}, 7000)

  // Limpando os clientes que já foram inseridos no checkout
  clientes = []
  localStorage.setItem('price', 0)
}

// Pegando os dados via input
function getClienteData() {

  let inputName = document.getElementById('name')
  let inputCpf = document.getElementById('cpf')
  let inputProduct = document.getElementById('product')
  let inputPrice = document.getElementById('price')

  if (Array.from(inputCpf.value).length != 11) {
    inputCpf.setAttribute('class', 'invalid')
    toast.setAttribute('id', 'show')
    toast.innerText = 'CPF Inválido'
    toast.style.border = "1px solid red";
    setTimeout(() => { toast.setAttribute('id', '')}, 7000)
  }
  else if (inputName.value == "") {
    inputName.setAttribute('class', 'invalid')
    toast.setAttribute('id', 'show')
    toast.innerText = "Nome Inválido"
    toast.style.border = "1px solid red";
    setTimeout(() => { toast.setAttribute('id', '')}, 7000)
  }
  else if (inputProduct.value == "") {
    inputProduct.setAttribute('class', 'invalid')
    toast.setAttribute('id', 'show')
    toast.innerText = "Você deve informar um produto."
    toast.style.border = "1px solid red";
    setTimeout(() => { toast.setAttribute('id', '')}, 7000)
  }
  else if (inputPrice.value == "") {
    inputProduct.setAttribute('class', 'invalid')
    toast.setAttribute('id', 'show')
    toast.innerText = "Você deve informar um preço para o produto."
    toast.style.border = "1px solid red";
    setTimeout(() => { toast.setAttribute('id', '')}, 7000)
  }
  else {

    // Contador que controla se o array de clientes está vazio ou não para manipular o botão de checkout
    count++

    // Incluindo data e hora e inserindo informações do cliente
    let date = new Date()
    let dd = String(date.getDate()).padStart(2, '0')
    let mm = String(date.getMonth() + 1).padStart(2, '0')
    let yyyy = date.getFullYear()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let createdAt = hour + ":" + min + ":" + sec + " - " + dd + "/" + mm + "/" + yyyy
    let name = inputName.value
    let cpf = inputCpf.value
    let productName = inputProduct.value
    price = inputPrice.value

    cliente = {
      name,
      cpf,
      productName,
      price,
      createdAt
    }
    
    clientes.push(cliente)

    // Somando o preço dos produtos a cada iteração.
    if (clientes.length > 0) {
      totalPrice += parseFloat(price)
    }

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

    toast.setAttribute('id', 'show')
    toast.innerText = "Cliente registrado! Você pode registrar mais clientes. Não esqueça de fazer o checkout quando terminar."
    toast.style.border = "1px solid green";
    setTimeout(() => { toast.setAttribute('id', '')}, 7000)
  }

  console.log(clientes)
}