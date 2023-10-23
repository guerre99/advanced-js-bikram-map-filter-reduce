//RESUELVE LOS EJERCICIOS AQUI

// MAP

    // ej 1

function elevados(numbers) {
    const cuadrados = numbers.map((numero)=>numero**2);
    return cuadrados;
}

const numbers = [4, 5, 6, 7, 8, 9, 10];
const cuadrados = elevados(numbers);
console.log(cuadrados);

    // ej 2

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']

const result2 = []

foodList.map((comida) => {
    if (comida === 'Pizza') {
        return result2.push (`Como soy de Italia, amo comer Pizza`)
    } else if (comida === 'Ramen') {
        return result2.push(`Como soy de Japon, amo comer Ramen`)
    } else if (comida === 'Paella') {
        return result2.push(`Como soy de Valencia, amo comer Paella`)
    } else {
        return result2.push(`Aunque no como carne, el Entrecot es sabroso`)
    }
})
        
console.log(result2)

    // ej 3

const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];

  const result3 = []

  staff.forEach((item) => {
   
    const descripcion = `${item.name} es ${item.role} y le gusta ${item.hobbies.join(' y ')}`
    result3.push(descripcion)
})

console.log(result3)

// FILTER

    // Ej 4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result4 = []

result4.push(numbers2.filter((impar => impar % 2 == 0)))

console.log(result4)

    // Ej 5

const foodList2 =[
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }]

const result5 = []

const veggie = foodList2.filter((comida) => comida.isVeggie == true)


veggie.forEach((item)=>{
    const frase = `Que rico ${item.name} me voy a comer!`
    result5.push(frase)
})

console.log(result5)

    // Ej 6

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
      
const result6 = []

const caros = inventory.filter((item)=> item.price > 300)

caros.forEach(caro=>result6.push(caro.name))

console.log(caros,result6)

// REDUCE

    // Ej 6

const numeros = [39, 2, 4, 25, 62]

const result7 = numeros.reduce((multiplicador,currentValue)=> multiplicador*currentValue)

console.log(result7)

    // Ej 7

const sentenceElements = [
    'Me',
    'llamo',
    'David',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

const result8 = sentenceElements.reduce((accumulator,currentValue)=>accumulator + ' '+currentValue)

console.log(result8)

    // Ej 8

const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const code = books.filter((item)=>item.category == 'code')

const price = code.map((item)=> item.price)

const result9 = price.reduce((accumulator,currentValue)=> accumulator+currentValue)

console.log(result9)