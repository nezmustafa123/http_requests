//LOAD ALL USERS
//fetch users from external URL like a rest api
const btn = document.getElementById("btn");
btn.addEventListener("click", getUsers);

function getUsers(e) {
  e.preventDefault();
  //fetch api returns a promise have to consume it with then
  fetch("users.json")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      let output = "";
      data.forEach(function (data) {
        output += `
          <hr>
          <ul>
          <li>ID: ${data.id}</li>
          <li>Name: ${data.name}</li>
          <li>Age: ${data.age}</li>
          <li>Email: ${data.email}</li>
          </ul>
          `;
      });
      document.getElementById("users").innerHTML = output;
    });
}
