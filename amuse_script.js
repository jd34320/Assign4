/* Jessica Dixon
 May 4, 2026
 assign4 */

function rideInfo(id, name) {
     alert("You clicked on the ride with the ID of: " + id + " and name of: " + name);
}

const rideNames = [
  "Sprinkles Wheel",
  "Chocolate River Quest",
  "Lollipop Swing",
  "Sugar Rush",
  "Fairy Floss"
];

const rideDescriptions = [
  "Enjoy a sweet and relaxing ride high above Candy Palace in our Cupcake Sky Wheel. Each cart is designed like a giant frosted cupcake topped with colorful sprinkles. This gentle attraction offers beautiful views of the park and is perfect for families and guests of all ages.",

  "Float through a magical candy factory filled with chocolate waterfalls and singing sweets that educates riders on your favorite chocolates. This relaxing boat ride is fun for all ages.",

  "Take to the skies in this colorful swing ride inspired by giant rainbow lollipops. Riders gently spin in the air while enjoying sweet views of Candy Palace. With bright lights and upbeat music, this family-friendly attraction delivers a classic carnival feel with a sugary twist.",

  "A high-speed candy-themed roller coaster that launches riders through glowing sprinkle tunnels and over giant gumdrop hills. This thrilling ride is perfect for adrenaline seekers.",

  "Spin inside a giant cotton candy machine as fine threads flash. A family favorite full of laughter."
];

const rideImages = [
  "https://images.unsplash.com/photo-1720863604106-2434b5725238?q=80&w=870&auto=format&fit=crop",
  "https://i2-prod.birminghammail.co.uk/incoming/article28860606.ece/ALTERNATES/s1227b/0_New-ride-opens-at-Cadbury-World.jpg",
  "https://images.unsplash.com/photo-1683962570590-df07dc8df437?q=80&w=1742&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1759179076834-b999e3b3e5f7?q=80&w=1625&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1704710868466-5440a2f61374?q=80&w=687&auto=format&fit=crop"
];

function displayRides() {
  const container = document.getElementById("rides-container");

  for (let i = 0; i < rideNames.length; i++) {
    container.innerHTML += `
      <article class="ride">
        <img src="${rideImages[i]}" width="200" height="150" alt="${rideNames[i]}">
        <h3>${rideNames[i]}</h3>
        <p>${rideDescriptions[i]}</p>
      </article>
      <hr>
    `;
  }
}

window.onload = displayRides;

function orderTics() {
  alert("Your total price is: $35");
}