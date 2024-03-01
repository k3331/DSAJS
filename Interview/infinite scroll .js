// Function to check if the user has reached the bottom of the page

<div id="content">
  <!-- Your initial content goes here -->
</div>
<div id="loader" style="display: none;">
  Loading...
</div>

function isScrolledToBottom() {
  const content = document.getElementById('content');
  return window.innerHeight + window.scrollY >= content.offsetHeight;
}

// Function to load and append more content
function loadMoreContent() {
  // Show the loader
  const loader = document.getElementById('loader');
  loader.style.display = 'block';

  // Simulate loading data (replace this with your data-fetching logic)
  setTimeout(() => {
    const newContent = '<p>New content goes here</p>';
    const content = document.getElementById('content');
    content.innerHTML += newContent;

    // Hide the loader
    loader.style.display = 'none';
  }, 1000); // Simulated loading delay
}

// Event listener to trigger loading more content when scrolling
window.addEventListener('scroll', () => {
  if (isScrolledToBottom()) {
    loadMoreContent();
  }
});

// Initial load of content
loadMoreContent();
