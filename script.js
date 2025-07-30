let transactionType = document.querySelector('select.transaction-type');
let searchedProperty = document.querySelector('.search-input'); 
let searchButton = document.getElementById('search-button');


transactionType.addEventListener('change', function(e){
    selectedValue = e.target.value;
    
    let filteredProperties = properties.filter(property => property.status === selectedValue);
    console.log(filteredProperties);
})

searchButton.addEventListener('click', function(){
    let searchedValue = searchedProperty.value.toLowerCase().trim();
    let filteredBySearch = properties.filter(property => property.city.toLowerCase().includes(searchedValue));
    console.log(filteredBySearch);
})






