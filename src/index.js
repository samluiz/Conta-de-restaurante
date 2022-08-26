let count = 0
let clientes = []
let cliente = {}
let pedido = {}
let id = 0
let toast = document.getElementById('toast')

function sumTotal() {
  pedidos = JSON.parse(localStorage.getItem("pedidos"))

  const { price } = clientes

  console.log(price)
}

function checkout() {
  const pedidos = JSON.parse(localStorage.getItem("pedidos") || "[]")

  if (clientes.length <= 0) {
    window.alert("Você não pode finalizar um pedido vazio")
  }

  id += 1

    pedido = {
      id,
      clientes
  }

  console.log(id)

  pedidos.push(pedido)
  sumTotal()

  let btn = document.getElementById('checkout')
  btn.setAttribute('class', 'checkout')

  localStorage.setItem('pedidos', JSON.stringify(pedidos))
  console.log(pedidos)

  toast.setAttribute('id', 'show')
  toast.innerText = "Pedido registrado!"
  toast.style.border = "1px solid green";
  setTimeout(() => { toast.setAttribute('id', '')}, 7000)
}



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

    count++

    let date = new Date()
    let dd = String(date.getDate()).padStart(2, '0')
    let mm = String(date.getMonth() + 1).padStart(2, '0')
    let yyyy = date.getFullYear()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let dayOfWeek = date.getDay()

    
    let createdAt = hour + ":" + min + ":" + sec + " - " + dd + "/" + mm + "/" + yyyy
    let name = inputName.value
    let cpf = inputCpf.value
    let productName = inputProduct.value
    let price = inputPrice.value

    cliente = {
      name,
      cpf,
      productName,
      price,
      createdAt
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

    toast.setAttribute('id', 'show')
    toast.innerText = "Cliente registrado! Você pode registrar mais clientes. Não esqueça de fazer o checkout quando terminar."
    toast.style.border = "1px solid green";
    setTimeout(() => { toast.setAttribute('id', '')}, 7000)
  }

  console.log(clientes)
}