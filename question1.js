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
