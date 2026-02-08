const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-window");
const form = document.querySelector("form");
const cardsContainer = document.querySelector("main > div");

// Bach n7ello l overlay
addBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("hide");
});

// Bach nsdo l overlay
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay").classList.add("hide");
  form.reset();
});

// Variable bach n7fdo tassawer
let selectedImage = null;

// Ki n3amro l form o nklikki 3la Enregistrer
const enregistrerBtn = document.getElementById("enregistrer");
enregistrerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Njibo les valeurs mn l form
  const titre = document.getElementById("titre").value;
  const destination = document.getElementById("Destination").value;
  const note = document.getElementById("note").value;
  const categorie = document.getElementById("gatigorie").value;
  
  // Nchofo wach kayna tswira selectionnée
  const imageUrl = selectedImage || document.getElementById("image").value || "https://via.placeholder.com/400x300";
  
  // Verification bash ma nzidoch card khawya
  if(!titre || !destination) {
    alert("Khassek t3ammer au moins Titre o Destination!");
    return;
  }
  
  // Ncr3iw card jdida
  const newCard = document.createElement("div");
  newCard.className = "bg-white rounded-2xl mx-4 overflow-hidden h-65";
  newCard.innerHTML = `
    <img
      src="${imageUrl}"
      alt="${titre}"
      class="w-full h-50 object-cover"
    />
    <div class="flex justify-between p-3">
      <div>
        <h2 class="font-bold">${titre}</h2>
        <p class="text-gray-500">by You</p>
      </div>
      <div class="flex gap-4 text-sm">
        <p class="text-gray-600">
          <i class="fa-solid fa-location-crosshairs text-gray-600"></i>
          ${destination}
        </p>
        <p class="text-gray-600">
          <i class="fa-solid fa-star text-yellow-500"></i> ${note}
        </p>
        <p class="text-gray-600 bg-green-100 px-2 rounded">
          ${categorie}
        </p>
      </div>
    </div>
  `;
  
  // Nzido l card jdida qbel dik nav dyalt bottom
  const allCards = cardsContainer.querySelectorAll(".bg-white.rounded-2xl.mx-4.overflow-hidden.h-65");
  const lastCard = allCards[allCards.length - 1];
  lastCard.insertAdjacentElement("afterend", newCard);
  
  // N3awdo nsafo l form o nsdo l overlay
  form.reset();
  selectedImage = null;
  document.querySelector(".overlay").classList.add("hide");
});

// Button Annuler
document.getElementById("annuler").addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  selectedImage = null;
  document.querySelector(".overlay").classList.add("hide");
});

// Bach n7ewlo input image l file input (khdem f background)
document.getElementById("image").addEventListener("click", function(e) {
  e.preventDefault();
  
  // Ncr3iw file input invisible
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  
  fileInput.addEventListener("change", function() {
    if(this.files && this.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        selectedImage = e.target.result;
        // Nbedlo placeholder bach user i3ref bli khtار tswira
        document.getElementById("image").value = "✓ Tswira m7otata";
        document.getElementById("image").style.color = "green";
      };
      
      reader.readAsDataURL(this.files[0]);
    }
  });
  
  fileInput.click();
});