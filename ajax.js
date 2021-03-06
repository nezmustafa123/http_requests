//LOAD ALL USERS
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

//CREATE FUNCTION TO GET USERS

function getUsers(e) {
  e.preventDefault();
  //http request with ajax instantiate
  const http = new XMLHttpRequest();
  //get request from file or server
  http.open("GET", "users.json", true); //define if it will be asynchronous
  console.log(http);
  http.onload = function () {
    //specify what's going to happen
    if (this.status === 200) {
      //this refers to the XML object

      console.log(this.responseText);
      //parse it into json
      const users = JSON.parse(this.responseText);

      console.log(users);
      let output = "";
      users.forEach(function (user) {
        output += `
          <hr>
          <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Age: ${user.age}</li>
          <li>Email: ${user.email}</li>
          </ul>
          `;
      });
      document.getElementById("users").innerHTML = output;
    }
  };
  http.send();
}
