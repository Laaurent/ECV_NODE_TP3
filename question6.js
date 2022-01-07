const axios = require("axios");

// GET SHIP
async function getShip(id) {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/starships/${id}`);
      console.log(response.data);
   } catch (error) {
      console.error(error);
   }
}

/* getShip(10); */

// GET PLANET COUNT
async function getPlanetCount() {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/planets/`);
      console.log(response.data.count);
   } catch (error) {
      console.error(error);
   }
}

/* getPlanetCount(getPlanetCount); */

//SHOW VADER DOB
async function VaderBirth() {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/people/?search=Darth%20Vader`);
      console.log(response.data.results[0].birth_year);
   } catch (error) {
      console.error(error);
   }
}

/* VaderBirth(); */

//SHOW IN WOOKIEE
async function showInWookiee(id) {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/people/${13}?format=wookiee`);
      console.log(response.data);
   } catch (error) {
      console.error(error);
   }
}

/* showInWookiee(1); */

//SHOW PLANET
async function showPlanet(url) {
   try {
      const response = await axios.get(url);
      /*  console.log(response.data); */
      return response.data;
   } catch (error) {
      console.error(error);
   }
}

//SHOW R2-D2 PLANET
async function r2d2Planet() {
   try {
      const response = await axios.get(`https://swapi.py4e.com/api/people/?search=R2`);
      /* console.log(showPlanet(response.data.results[0].homeworld)); */
      return showPlanet(response.data.results[0].homeworld);
   } catch (error) {
      console.error(error);
   }
}

/* r2d2Planet(); */

async function showPeopleFromR2d2Planet() {
   try {
      r2d2Planet().then((response) => {
         var residents = response.residents;
         console.log(residents);
         /*  await forEach(residents, async (element) => {
            const response = await axios.get(element);
            console.log(response);
         }); */
      });
   } catch (error) {
      console.error(error);
   }
}

showPeopleFromR2d2Planet();
