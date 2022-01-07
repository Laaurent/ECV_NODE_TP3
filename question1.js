const axios = require("axios");

const lengthIsLessThanTwenty = (s) => {
   return new Promise((resolve, reject) => {
      if (s.length > 20) reject("Error");
      else resolve("Is less than Twenty");
   });
};

lengthIsLessThanTwenty("12345")
   .then((result) => {
      console.log(result);
   })
   .catch((err) => {
      console.error(err);
   });

async function execute() {
   try {
      console.log("Executing");
      const firstPromise = lengthIsLessThanTwenty("1234567890");
      console.log(firstPromise);
   } catch (err) {
      console.log(err);
   }
}

execute();

async function getUser() {
   try {
      const response = await axios.get("https://swapi.py4e.com/api/people/1");
      lengthIsLessThanTwenty(response.data.name).then((result) => {
         console.log(result);
      });
   } catch (error) {
      console.error(error);
   }
}

getUser();
