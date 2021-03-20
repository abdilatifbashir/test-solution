let faker = require("faker");

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