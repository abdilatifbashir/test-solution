var faker = require('faker');

// Exercise 1 : Question 1


const transformQuestionOne = (input) => {
    const obj = {}
    if (!input || input.length === 0) return obj
    for (let index = 0; index < input.length; index++) {
        const arr = input[index]
        const firstItem = arr[0]
        const otherItems = arr.slice(1, arr.length)
        obj[firstItem] = otherItems
    }
    return obj
}

// Test 
const inputExercise1Question1 = [
    ["key1", 1, 2, 3, 4],
    ["key2", 4, 5, 6, 7]
]
console.log(transformQuestionOne(inputExercise1Question1));

// Exercise 1 : Question 2


const numberWithCommas = (x) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ")

const formatPrice = (number) => `${numberWithCommas(number)} €`

const price = (savingsType, savings, basePrice) => {
    if (savingsType === "percent") {
        const discount = (parseInt(savings) / 100) * parseInt(basePrice)

        const price = basePrice - discount

        return formatPrice(price)
    }

    const price = basePrice - savings

    return formatPrice(price)
}

const calculateDiscount = (savingsType, savings, basePrice) => {
    if (savingsType === "percent") {
        const discount = (parseInt(savings) / 100) * parseInt(basePrice)

        return formatPrice(discount)
    }

    return formatPrice(savings)
}

const savingsCalculator = (savingsType, savings) => {
    if (savingsType === "percent") {
        return `${savings} %`
    }
    return formatPrice(savings)
}

const transformQuestionTwo = (input) => {
    const arr = []

    if (!input || input.length === 0) return arr

    for (let index = 0; index < input.length; index++) {
        if (input[index].price) {
            const basePrice = parseInt(input[index].price)
            const savings = parseInt(input[index].savings)
            const savingsType = input[index].savingsType

            const title = input[index].savingsType === "percent" ? "Sales" : "Flat Voucher"

            const obj = {
                basePrice: `${formatPrice(basePrice)}`,
                description: `You are saving ${calculateDiscount(savingsType, savings, basePrice)} related to the initial price`,
                price: `${price(savingsType, savings, basePrice)}`,
                savings: `${savingsCalculator(savingsType, savings)}`,
                title
            }

            arr.push(obj)
        }
    }
    return arr
}


const inputExercise1Question2 = [
    {
        price: 3000,
        kind: 'reductionVoucher',
        savings: 300,
        savingsType: 'total',
    },
    {
        price: undefined,
        kind: 'sales',
        savings: 10,
        savingsType: 'percent',
    },
    {
        price: 3000,
        kind: 'sales',
        savings: 15,
        savingsType: 'percent',
    }

]


console.log(transformQuestionTwo(inputExercise1Question2));

// Exercise 2 : Question 1

const generateName = () => faker.name.findName();

const GenerateGenealogy = () => {
    return {
        name: generateName(),
        children: Children(),
    };
};

let Children = () => {
    const arr = [];
    const numberOfChildren = Math.floor(Math.random() * 3);

    for (let index = 0; index < numberOfChildren; index++) {
        const name = generateName();
        const children = Children();
        arr.push({ name, children });
    }

    return arr;
};
console.log(JSON.stringify(GenerateGenealogy()));

// Exercise 2 : Question 2

/****
 * 
 * What would happen if each person can have between 0 and 3 children instead of between
 0 and 2 children in the exercise? Why?

 The could be a possibility of an infinite loop due to the increase in time complexity.
 * 
 * 
 */

// Exercise 3 : Question 1




const randomNumberOfPeople = () => {

    const number = Math.floor((Math.random() * 100));

    const arr = []

    for (let index = 0; index < number; index++) {

        const name = faker.name.findName();

        const country = faker.address.country();

        const obj = {
            name,
            country
        }
        arr.push(obj)

    }

    return arr
}

const x = randomNumberOfPeople()


// Exercise 3 : Question 2

const listOfCitizensGroupedByTheirCountry = (array) => {
    return array.reduce((accumulator, currentValue) => {
        key = `Citizens of ${currentValue.country}`
        accumulator[key] = accumulator[key] || []
        accumulator[key].push(currentValue)
        return accumulator
    }, {})
}

console.log(listOfCitizensGroupedByTheirCountry(x));




