const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-window");
const form = document.querySelector("form");
const cardsContainer = document.querySelector("main > div");

addBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("hide");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".overlay").classList.add("hide");
  form.reset();
});

let selectedImage = null;

const enregistrerBtn = document.getElementById("enregistrer");
enregistrerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  const titre = document.getElementById("titre").value;
  const destination = document.getElementById("Destination").value;
  const note = document.getElementById("note").value;
  const categorie = document.getElementById("gatigorie").value;
  
  const imageUrl = selectedImage || document.getElementById("image").value || "https://via.placeholder.com/400x300";
  
  if(!titre || !destination) {
    alert("Khassek t3ammer au moins Titre o Destination!");
    return;
  }
  
  const newCard = document.createElement("div");
  newCard.className = "bg-white rounded-2xl mx-4 overflow-hidden h-65 relative";
  newCard.innerHTML = `
    <button class="delete-card absolute top-2 right-2 bg-red-600 hover:bg-white text-white w-15 h-8 rounded-2xl flex items-center justify-center z-10 shadow-lg transition-all duration-200">
      Delete
    </button>
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
  
  const firstCard = cardsContainer.querySelector(".bg-white.rounded-2xl.mx-4.overflow-hidden");
  firstCard.insertAdjacentElement("beforebegin", newCard);
  
  const deleteBtn = newCard.querySelector(".delete-card");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    newCard.remove();
  });
  
  form.reset();
  selectedImage = null;
  document.querySelector(".overlay").classList.add("hide");
});

document.getElementById("annuler").addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  selectedImage = null;
  document.querySelector(".overlay").classList.add("hide");
});

document.getElementById("image").addEventListener("click", function(e) {
  e.preventDefault();
  
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/*";
  
  fileInput.addEventListener("change", function() {
    if(this.files && this.files[0]) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        selectedImage = e.target.result;
        document.getElementById("image").value = "✓ Tswira m7otata";
        document.getElementById("image").style.color = "green";
      };
      
      reader.readAsDataURL(this.files[0]);
    }
  });
  
  fileInput.click();
});

document.querySelectorAll(".delete-card").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".bg-white.rounded-2xl");
    card.remove();
  });
});