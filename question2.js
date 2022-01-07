const axios = require("axios");

const aIsMoreThanB = (a, b) => {
   return new Promise((resolve, reject) => {
      if (a < b) reject("A is less than B");
      else resolve(a - b);
   });
};

aIsMoreThanB(4, 2)
   .then((result) => {
      console.log(result);
   })
   .catch((err) => {
      console.error(err);
   });

async function execute() {
   try {
      console.log("Executing");
      const firstPromise = aIsMoreThanB(4, 2);
      console.log(firstPromise);
   } catch (err) {
      console.log(err);
   }
}

execute();

async function getUser() {
   try {
      const response = await axios.get("https://swapi.py4e.com/api/people/1");
      aIsMoreThanB(response.data.mass, response.data.height).then((result) => {
         console.log(result);
      });
   } catch (error) {
      console.error(error);
   }
}

getUser();
