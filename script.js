async function searchFunction() {
    let query = document.getElementById("searchBar").value.toLowerCase();
    let resultsContainer = document.getElementById("results");
    
    resultsContainer.innerHTML = ""; // Clear previous results

    try {
        let response = await fetch("data.json");
        let data = await response.json();

        let results = data.filter(item => item.name.toLowerCase().includes(query));

        if (results.length > 0) {
            results.forEach(item => {
                let resultItem = document.createElement("div");
                resultItem.innerHTML = `<a href="${item.url}">${item.name}</a>`;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = "No results found.";
        }
    } catch (error) {
        console.error("Error fetching JSON data:", error);
    }
}
