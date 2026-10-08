
let dogs = [
    {name: "Andy", breed: "American Pit Bull Terrier", age: 6, image: "andy.png"},
    {name: "Apollo", breed: "Pit Bull Terrier", age: 4, image: "apollo.png"},
    {name: "Apollo James", breed: "Dalmatian", age: 9, image: "apollo-james.png"},
    {name: "Archie", breed: "Labrador Retriever", age: 1, image: "archie.png"},
    {name: "Barley", breed: "Bull Terrier", age: 4, image: "barley.png"}
];

function showDog() {
    let number = Number(document.querySelector("#petNumber").value);

    if (number < 1 || number > 5 || !Number.isInteger(number)) {
        alert("Please enter a number from 1 to 5");
        return;
    }

    let dog = dogs[number - 1];

    document.querySelector("#petInfo").textContent =
        dog.name + " is a " + dog.breed + " and is " + dog.age + " years old.";

    let picture = document.querySelector("#petImage");

    picture.src = dog.image;
    picture.alt = dog.name;
    picture.style.display = "block";

    console.log("Selected dog: " + dog.name);
}
