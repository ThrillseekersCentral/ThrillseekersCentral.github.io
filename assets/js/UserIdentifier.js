document.addEventListener('DOMContentLoaded', function() {
    // Get the user IDs from the data attribute of the #authors element
    const authorsElement = document.getElementById('authors');
    const userIds = authorsElement.getAttribute('data').split(',').map(Number);

    // Fetch the JSON data
    fetch('/assets/teamids.json')
        .then(response => response.json())
        .then(data => {
            let authors = [];
            let ranks = [];

            // Loop through each rank category in the JSON
            for (let rank in data) {
                data[rank].forEach(user => {
                    if (userIds.includes(user.id)) {
                        // Add username to authors list
                        authors.push(user.username);
                        
                        // Add rank to ranks list
                        ranks.push(`<span class="PageInfo_Rank_${rank}">${rank}</span>`);
                    }
                });
            }

            // Inject the authors and ranks into the HTML
            authorsElement.textContent = authors.join(', ');
            document.getElementById('ranks').innerHTML = ranks.join(', ');
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
