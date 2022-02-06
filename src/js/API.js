const searchBar = document.querySelector(".search-input");
const names = document.querySelectorAll(".result-info");
const fetchButton = document.querySelector("[data-fetch]");

const loadInfo = (user_api, repo_api) => {
  const avatar = document.querySelector("[data-avatar]");
  const username = document.querySelector("[data-username]");
  const userURL = document.querySelector("[data-url]");
  const creationDate = document.querySelector("[data-creation-date]");
  const dataLocation = document.querySelector("[data-location]");

  //loads information about user such as avatar, username, github URL
  const userInformation = () => {
    fetch(user_api)
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
  //loads infomartion about user's repositories
  const userRipos = () => {
    fetch(repo_api)
      .then((response) => {
        const jsonResponse = response.json();
        return jsonResponse;
      })
      .then((processed) => {
        const repoParent = document.querySelector(".repo"); //parent where elements will be created
        //if p
        while (repoParent.firstChild) {
          repoParent.firstChild.remove();
        }
        
        //creates elements that equal a number of repositories of a user
        //elements contain name of a repository
        for (var i = 0; i < processed.length; i++) {
          const repoChild = document.createElement("div");
          repoChild.classList.add("repo-child");
          repoChild.textContent = [processed[i].name];
          repoParent.appendChild(repoChild);
        }
      });
  };

  userInformation();
  userRipos();
};


//on clicking the search button it checks the input value and later adds it to API as a string
//to later retrieve information about a user
fetchButton.addEventListener("click", () => {
  const searchedUser = document.querySelector("[data-search]"); //data input

  let GITHUB_USER = "https://api.github.com/users/" + searchedUser.value;
  let GITHUB_REPO =
    "https://api.github.com/users/" + searchedUser.value + "/repos";
  console.log(GITHUB_USER, GITHUB_REPO);
  loadInfo(GITHUB_USER, GITHUB_REPO);
});

