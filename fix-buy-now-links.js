// This script updates the "Buy Now" button links
(function() {
  // Function to fix Buy Now links
  function fixBuyNowLinks() {
    // Find all links that might be Buy Now buttons
    var links = document.querySelectorAll('a');
    var fixedCount = 0;
    
    links.forEach(function(link) {
      var href = link.getAttribute('href');
      var text = link.textContent.trim();
      
      // Check if this is a Buy Now button
      if (
        // Check for the original URL
        (href && href.includes('vaporfi.com/catalogsearch/result/?q=geek+bar')) ||
        // Or check for button text
        (text === 'Buy Now' || text.includes('Buy Now'))
      ) {
        // Update the href to the new URL
        var newHref = 'https://www.vaporfi.com/catalogsearch/result/?q=geek+bar&A=10012';
        link.setAttribute('href', newHref);
        fixedCount++;
        console.log('Fixed Buy Now link:', href, '->', newHref);
      }
    });
    
    if (fixedCount > 0) {
      console.log('Fixed ' + fixedCount + ' Buy Now links');
    }
    
    // If we fixed any links, schedule another check in case React renders more
    if (fixedCount > 0) {
      setTimeout(fixBuyNowLinks, 500);
    } else {
      // If no links were fixed this time, schedule one more check after a longer delay
      setTimeout(fixBuyNowLinks, 2000);
    }
  }

  // Initial call after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(fixBuyNowLinks, 500);
    });
  } else {
    // DOM already loaded, run immediately
    setTimeout(fixBuyNowLinks, 500);
  }
  
  // Also run when the window is fully loaded (including all resources)
  window.addEventListener('load', function() {
    setTimeout(fixBuyNowLinks, 500);
  });
  
  // Run periodically to catch any dynamically added buttons
  setInterval(fixBuyNowLinks, 3000);
})();
