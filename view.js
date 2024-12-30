
// Function to fetch view count from the API
async function fetchViewCount() {
    const response = await fetch('https://api.countapi.xyz/get/samir-khan/portfolio');
    const data = await response.json();
    document.getElementById('viewCount').innerText = `Views: ${data.value}`;
}

// Function to increment view count using the API
async function incrementViewCount() {
    await fetch('https://api.countapi.xyz/hit/samir-khan/portfolio');
    fetchViewCount(); // Update the view count after incrementing
}

// Call functions on page load
window.onload = () => {
    incrementViewCount(); // Increment view count for this session
};
