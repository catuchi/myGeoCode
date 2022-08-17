// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCnRC7jU4wG8H6HUVlKzm6WoOAo77etdDI
function geoCode() {
  const location = "22 Main st Boston MA";
  axios
    .get(`https://maps.googleapis.com/maps/api/geocode/json`, {
      params: {
        address: location,
        key: "AIzaSyCnRC7jU4wG8H6HUVlKzm6WoOAo77etdDI",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

geoCode();
