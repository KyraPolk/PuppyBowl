console.log("hello world");//it works, and connected

//the first thing i need to do link the desired element to js using querySelector
let ul = document.querySelector('ul');//grabbing the ul

//next we need a way to "fetch" the information from our server to our webpage using a function
//the function should be async to ensure the function returns a promise
//because we used async, we will need to 'await' two times
const fetcher = async () =>{
//this function will fetch a response from the URI
const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2307/players");
const json = await response.json();//should return an object
pupArray = json.data.players;//to get an array
console.log(pupArray);//outcome is an array of 10 objects containing each puppy info
//next I want to loop using .map to retrieve the name and breed the name I want in an <h2> and the breed I want in a <p>
const hash = window.location.hash.slice(1) * 1
console.log(hash)
const html = pupArray.map(puppy => {
  return `
  <li>
  <a href="#${puppy.id !== hash ? puppy.id : ""}" class= "${puppy.id === hash ? "selected" : ""}"><h2>${puppy.name}</h2></a>
  <p>${puppy.breed}</p>
  </li>
  `
  //we still have an array of this information so we need to convert it into a string using .join
}).join("");
//still within the same function, we want to set the contents of our ul tag to each result
ul.innerHTML = html;
}
//fetcher();

//now that we've fetched the data from the URI we need to "render" it to the webpage
function render(){//reusable function to get my changes to the webpage

  //const hash = window.location.hash.slice(1) * 1
  fetcher()

}//wont see anything until we invoke render function
render()

// create an event listener that will display the information
window.addEventListener("hashchange", () => {

})