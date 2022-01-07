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
