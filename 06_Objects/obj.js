let item={
  name:'Laptop',
  Brand:'HP',
  price:25000,
  quantity:1,
  buy:function()
  {
    return `${this.name} ${this.Brand}`
  }
}

console.log(item)

let item2=new Object()

item2.name='Phone'
item2.Brand='Vivo'
item2.price='20000'
item2.quantity=1

console.log(item2)

console.log(item.buy())

