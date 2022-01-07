const isMoreThenEighteen = (date) => {
   return new Promise((resolve, reject) => {
      let dateParts = date.split("/");
      let today = Date.now();
      let birthDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]).getTime();

      let major = 18 * 31557600000;
      if (today - birthDate >= major) resolve("Is Major.");
      else reject("Is Minor.");
   });
};

isMoreThenEighteen("20/07/1999")
   .then((result) => {
      console.log(result);
   })
   .catch((err) => {
      console.error(err);
   });

async function execute() {
   try {
      console.log("Executing");
      const firstPromise = isMoreThenEighteen("20/07/1999");
      console.log(firstPromise);
   } catch (err) {
      console.log(err);
   }
}

execute();
