import "./API.js";

const repoInfo = () => {
  var temp = document.querySelector(".test");
  var clone = temp.content.cloneNode(true);
  document.querySelector(".repo").appendChild(clone);
  console.log(clone);
};
  fetch("https://api.github.com/users/octocat/repos")
    .then((response) => {
      const jsonResponse = response.json();
      return jsonResponse;
    })
    .then((processed) => {
      console.log(processed[0].name);
        for (let i = 0; i < processed.length; i++) {
          
        console.log(processed[i].name);
      }
    }); 


const testFunc = () => {
        
    }
addEventListener("load", () => {


  for (let i = 0; i < 10; i++) {
    repoInfo();
  }
});
