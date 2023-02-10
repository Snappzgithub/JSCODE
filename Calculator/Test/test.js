const phoneModels = [
    {name: "iPhone XR", price: 799},
    {name: "Samsung Galaxy S10", price: 899},
    {name: "Google Pixel 3", price: 749}
    ];
    
    function searchPhoneModel(models, searchTerm) {
    for (let i = 0; i < models.length; i++) {
    if (models[i].name.toLowerCase() === searchTerm.toLowerCase()) {
    return models[i].name + ": $" + models[i].price;
    }
    }
    return "Sorry, that phone model could not be found.";
    }
    
    const searchTerm = prompt("Enter a phone model to search for: ");
    console.log(searchPhoneModel(phoneModels, searchTerm));