    // Function to save the state of all <details> elements
    function saveDetailsState() {
        const detailsElements = document.querySelectorAll('aside.sidebar details');
        const detailsState = [];
    
        detailsElements.forEach((details, index) => {
            detailsState[index] = details.open; // Save whether the details is open or closed
        });
    
        localStorage.setItem('detailsState', JSON.stringify(detailsState));
    }
    
    // Function to restore the state of all <details> elements
    function restoreDetailsState() {
        const detailsElements = document.querySelectorAll('aside.sidebar details');
        const detailsState = JSON.parse(localStorage.getItem('detailsState')) || [];
    
        detailsElements.forEach((details, index) => {
            if (detailsState[index] !== undefined) {
                details.open = detailsState[index]; // Restore the saved state
            }
        });
    }
    
    // Set up event listeners to save the state whenever a <details> element is toggled
    document.addEventListener('DOMContentLoaded', () => {
        restoreDetailsState(); // Restore the state when the page loads
    
        const detailsElements = document.querySelectorAll('aside.sidebar details');
        detailsElements.forEach((details) => {
            details.addEventListener('toggle', saveDetailsState); // Save state on toggle
        });
    });
    
    // Observe changes to dynamically handle new <details> elements
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach((node) => {
                    if (node.tagName === 'DETAILS') {
                        node.addEventListener('toggle', saveDetailsState); // Attach listener to new details
                    }
                });
            }
        });
    });
    
    observer.observe(document.querySelector('aside.sidebar'), { childList: true, subtree: true });

//!-------------------------
