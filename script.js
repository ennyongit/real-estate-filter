let transactionType = document.querySelector('select.transaction-type');


transactionType.addEventListener('change', function(){
    selectedValue = transactionType.value;
    
    let filteredProperties = properties.filter(property => property.status === selectedValue);
    console.log(filteredProperties);
})




