// Sample array of search suggestions
const suggestionsArray = ["Burger1", "Burger2", "Burger3", "Taco", "Node.js", "Python", "Java", "C++", "OpenAI", "ChatGPT"];
var num=0;

function showSuggestions() {
    const input = document.getElementById('search-bar');
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';

    if (input.value.trim() !== '') {
        const filteredSuggestions = suggestionsArray.filter(suggestion =>
            suggestion.toLowerCase().includes(input.value.toLowerCase())
        );

        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'suggestion-item';
                suggestionItem.textContent = suggestion;
                suggestionItem.addEventListener('click', () => {
                    input.value = suggestion;
                    suggestionsContainer.style.display = 'none';
                });

                suggestionsContainer.appendChild(suggestionItem);
            });

            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    } else {
        suggestionsContainer.style.display = 'none';
    }
}
function showALlSuggestions(){
    const input = document.getElementById('search-bar');
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = '';
    if(num==0){
        num=1;
    }
    if(num==1){
        suggestionsArray.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', () => {
                input.value = suggestion;
                suggestionsContainer.style.display = 'none';
            });
    
            suggestionsContainer.appendChild(suggestionItem);
        });
        suggestionsContainer.style.display = 'block';
        
    }
    
}

// Close suggestions when clicking outside the search bar
window.addEventListener('click', (event) => {
    const suggestionsContainer = document.getElementById('suggestions-container');
    if (event.target !== document.getElementById('search-bar') && !suggestionsContainer.contains(event.target) && num==0 ) {
        suggestionsContainer.style.display = 'none';
    }
    if(num==1){
        num=0;
    }
});

function openPage(){
     // Specify the path to the new HTML file
     var newHTMLFilePath = '../../view/placeOrderForm-2.html';
        
     // Open the new HTML file in the same window
     window.location.href = newHTMLFilePath;


}

function openPlaceOrder3(){
    // Specify the path to the new HTML file
    var newHTMLFilePath = '../../view/cashier/placeOrderForm-3.html';
       
    // Open the new HTML file in the same window
    window.location.href = newHTMLFilePath;


}

