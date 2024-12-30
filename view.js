
// Function to fetch view count from the API
async function fetchViewCount() {
    const response = await fetch('https://api.counterapi.dev/v1/test/sam049/up');
    const data = await response.json();

    document.getElementById('viewCount').innerText = `Views: ${data.count}`;
}

// Function to increment view count using the API
async function incrementViewCount() {
    fetchViewCount(); // Update the view count after incrementing
}

// Call functions on page load
window.onload = () => {
    incrementViewCount(); // Increment view count for this session
};

