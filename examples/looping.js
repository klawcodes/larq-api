// api url
const api_url = ['https://larq.cyclic.app/api/id'];

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  show(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
  let tab = ``;

  // Loop to access all rows
  for (let r of data) {
    tab += `
    <h2>${r.namaKota}</h2>
    <img src:"${r.landscape.image}"/>
    `;
  }
  // Setting innerHTML as tab variable
  document.getElementById('test').innerHTML = tab;
}
