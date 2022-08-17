// get location form
const locationForm = document.getElementById("location-form");

// listen for event
locationForm.addEventListener("submit", geoCode);

function geoCode(e) {
  e.preventDefault();

  const location = document.getElementById("location-input").value;

  if (location) {
    axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: location,
          key: "AIzaSyCnRC7jU4wG8H6HUVlKzm6WoOAo77etdDI",
        },
      })
      .then((res) => {
        // log full response
        console.log(res);

        // formatted address
        const formattedAddress = res.data.results[0].formatted_address;

        const formattedAddressOutput = `
          <ul class="list-group">
            <li class="list-group-item">${formattedAddress}</li>
          </ul>
        `;

        const addressComponents = res.data.results[0].address_components;

        let listGroup = document.createElement("ul");

        listGroup.className = "list-group";

        const addressComponentsOutput = addressComponents
          .map(
            (component) => `
          <li class="list-group-item">
            <strong>
              ${component.types[0]}
            </strong>: 
            ${component.long_name}
          </li>
        `
          )
          .join("");

        listGroup.innerHTML = addressComponentsOutput;

        // Geometry
        const { lat, lng } = res.data.results[0].geometry.location;
        // console.log(lat, lng);

        const geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item"><strong>Latitude</strong>:${lat}</li>
            <li class="list-group-item"><strong>Longitude</strong>:${lng}</li>
          </ul>
        `;

        // Output to app
        document.querySelector("#formatted-address").innerHTML =
          formattedAddressOutput;
        document.querySelector("#formatted-components").appendChild(listGroup);
        document.querySelector("#geometry").innerHTML = geometryOutput;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
