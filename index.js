//write a POST request using fetch()
//Destination URL
//headers for content type & accept - BOTH set to 'application/JSON'
//BODY w/name & email arguments
//To submit data use stringify
//Use THEN() to access res
//Use JSON() method to parse contents of BODY property
//Add second then() to access new object
//find new ID and append to DOM
//Add catch() after the 2 THENS
//Return FETCH from submit data

function submitData(name, email) {
  const ourOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  };

  return fetch("http://localhost:3000/users", ourOptions)
    .then(function (res) {
      return res.json();
    })
    .then(function (user) {
      let id = user.id;

      let p = document.createElement("p");
      p.textContent = id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      let e = document.createElement("p");
      e.textContent = error.message;
      document.body.appendChild(e);
    });
}
