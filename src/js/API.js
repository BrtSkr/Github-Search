const searchBar = document.querySelector(".search-input");
const names = document.querySelectorAll(".result-info");
const fetchButton = document.querySelector("[data-fetch]");



const loadInfo = (req) => {
  const avatar = document.querySelector("[data-avatar]");
  const username = document.querySelector("[data-username]");
  const userURL = document.querySelector("[data-url]");
  const creationDate = document.querySelector("[data-creation-date]");
  const dataLocation = document.querySelector("[data-location]");

  const userInformation = () => {
    fetch(req)
      .then((response) => {
          const processing = response.json();
        return processing;
      })
        .then((processed) => {
           
        avatar.src = processed.avatar_url;
        username.textContent = processed.name;
        userURL.textContent = processed.html_url;
        creationDate.textContent = `Created at : ${processed.created_at.slice(
          0,
          10
        )} `;
        dataLocation.textContent = processed.location;
        console.log(processed);
      });
  };
    userInformation();
   
}

fetchButton.addEventListener("click", () => {
    const searchedUser = document.querySelector('[data-search]');

    let GITHUB_USER = "https://api.github.com/users/" + searchedUser.value;
    console.log(GITHUB_USER)
    loadInfo(GITHUB_USER)
});

//searchBar.addEventListener("input", (e) => {
//  checkNames(e);
//});

//const checkNames = (e) => {
//  const value = e.target.value;
//  //const myArray = [];
//
//  names.forEach((e) => {
//    // myArray.push(e.innerHTML.toLowerCase())
//    //console.log(myArray)
//    if (e.textContent.includes(value)) {
//      e.classList.toggle("hide", false);
//      return;
//    }
//
//    if (!e.textContent.includes(value)) {
//      e.classList.toggle("hide", true);
//      return;
//    }
//  });
//};
