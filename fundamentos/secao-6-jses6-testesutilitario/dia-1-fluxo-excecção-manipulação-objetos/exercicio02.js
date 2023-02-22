const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {

  const deliveryPersonName = order.order.delivery.deliveryPerson; //Armazenando a chave deliveryPerson;
  const name = order.name; 
  const phoneNumber = order.phoneNumber; //Armazenando chave phoneNumber por notação de ponto;
  const street = order.address.street;
  const number = order.address.number;
  const numberApartament = order.address.apartment;

  console.log(`Olá ${deliveryPersonName}, entrega para: ${name}, Telefone: ${phoneNumber}, Endereço: ${street}, N°${number}, AP: ${numberApartament}.`);


};

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva'; // atribuindo novo valor a name;
  const name = order.name;
  order.payment.total = '50'; //atribuindo novo valor a total;
  const total = order.payment.total;
  const pizzas = Object.keys(order.order.pizza); //acessando chave pizzas, pois existem dois valores: pizza[0]  e pizza[1];
  const drinks = order.order.drinks.coke.type;

  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${total},00.`);
};

console.log(orderModifier(order));
