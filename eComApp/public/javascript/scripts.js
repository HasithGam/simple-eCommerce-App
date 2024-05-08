const userArray = [];
let filteredArray = []; // Array to store filtered items

fetch('https://fakestoreapi.com/products')
    // fetch('http://192.168.20.2:3000/myStore/products')

    .then((response) => response.json())
    .then((json) => {
        userArray.push(...json);
        filteredArray = [...userArray]; // Initialize filtered array with all items
        displayNews();
        getCategories(json);
    });
function displayNews() {
    let newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';
    let rowDiv;
    filteredArray.forEach((item, i) => { // Use filteredArray instead of userArray
        // Create a new row for every 4th item
        if (i % 4 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            newsContainer.appendChild(rowDiv);
        }

        let newsItem = document.createElement('div');
        newsItem.classList.add('col-12', 'col-sm-6', 'col-md-3');
        newsItem.style.height = "31rem";
        newsItem.innerHTML = `
            <div class="card" style="width: 16rem; height: 30rem;">
                <img src="${item.image}" class="card-img-top" alt="${item.title}" style="width: 200px; height: 200px; padding: 10px;">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Category: ${item.category}</p>
                    <p class="card-text">Price: ${item.price}</p>
                    <p class="card-text">Rating: ${item.rating.rate}, Count: ${item.rating.count}</p>
                    <a href="#" class="btn btn-primary btn-sm">Add to Cart</a>
                </div>
            </div>
        `;
        rowDiv.appendChild(newsItem);
    });
}


function getCategories(products) {
    let categories = [];
    let categoryCount = {}; // Object to store category counts

    // Iterate through products and populate categories array
    products.forEach(product => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
        // Count occurrences of each category
        categoryCount[product.category] = (categoryCount[product.category] || 0) + 1;
    });

    // Select the dropdown menu element
    let dropdownMenu = document.querySelector('.dropdown-menu');

    // Clear any existing dropdown items
    dropdownMenu.innerHTML = '';

    // Select the dropdown button
    let dropdownButton = document.getElementById('dropdownMenuButton');

    // Create "Select All" dropdown item
    let selectAllItem = document.createElement('li');
    selectAllItem.innerHTML = `<a class="dropdown-item" href="#" data-category="all">Select All</a>`;
    selectAllItem.addEventListener('click', function () {
        dropdownButton.textContent = 'All Categories';
        filteredArray = [...userArray]; // Reset filtered array to all items
        displayNews();
    });
    dropdownMenu.appendChild(selectAllItem);

    // Iterate through unique categories and create dropdown items
    categories.forEach(category => {
        // Create a new dropdown item
        let dropdownItem = document.createElement('li');
        dropdownItem.innerHTML = `<a class="dropdown-item" href="#" data-category="${category}">${category}</a>`;

        // Add click event listener to each dropdown item
        dropdownItem.addEventListener('click', function () {
            // Update the text of the dropdown button to the selected category
            dropdownButton.textContent = category;
            // Filter the array based on the selected category
            filteredArray = userArray.filter(item => item.category === category);
            // Display the filtered items
            //displayNews();
        });

        // Append the dropdown item to the dropdown menu
        dropdownMenu.appendChild(dropdownItem);
    });

    // Add event listener to the search button
    document.getElementById('searchButton').addEventListener('click', function () {
        // Display the filtered items
        displayNews();
    });
}
