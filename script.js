const addBtn = document.querySelector(".add-btn");
const closeBtn = document.querySelector(".close-window");

addBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.remove("hide");
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".overlay").classList.add("hide");
});
let addcard = document.getElementById("add-btn");
    let maincontainer = document.getElementById("maincontainer");
    let cancelbtn = document.getElementById("cancelbtn ");
    let cardsform = document.getElementById("cardsform");
    let cardContainer = document.getElementById("cardContainer");

    // Show the modal when "ADD CARD" button is clicked
    addcard.addEventListener("click", () => {
        maincontainer.classList.remove("hidden");
    });

    // Hide the modal when "Cancel" button is clicked
    cancelbtn.addEventListener("click", () => {
        maincontainer.classList.add("hidden");
    });

    // Handle form submission
    cardsform.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const titre = document.getElementById('titre').value;
        const destination = document.getElementById('destination').value;
        const note = document.getElementById('note').value;
        const category = document.getElementById('category').value;
        const image = document.getElementById('image').value;

        // Create a new card
        const newCard = document.createElement('div');
        newCard.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg', 'w-[300px]', 'h-[400px]', 'flex', 'flex-col', 'items-center');
        newCard.innerHTML = `
            <img src="${image}" alt="${titre}" class="w-full h-40 object-cover rounded-lg mb-4">
            <h2 class="text-xl font-bold mb-2">${titre}</h2>
            <p class="text-gray-700">Destination: ${destination}</p>
            <p class="text-gray-700">Note: ${note}</p>
            <p class="text-gray-700">Category: ${category}</p>
        `;

        // Append the new card to the card container
        cardContainer.appendChild(newCard);

        // Hide the modal after submission
        maincontainer.classList.add('hidden');

        // Optionally, you can reset the form after submission
        cardsform.reset();
    });
