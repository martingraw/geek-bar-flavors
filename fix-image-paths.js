// This script fixes image paths for GitHub Pages
(function() {
  // Function to fix image paths
  function fixImagePaths() {
    // Fix all image paths
    var images = document.querySelectorAll('img');
    var fixedCount = 0;
    
    images.forEach(function(img) {
      var src = img.getAttribute('src');
      // If the image path doesn't start with the repository name and it's a relative path
      if (src && !src.startsWith('/geek-bar-flavors/') && !src.startsWith('http') && !src.startsWith('data:')) {
        // Add the repository name to the path
        var newSrc = '/geek-bar-flavors' + (src.startsWith('/') ? '' : '/') + src;
        img.setAttribute('src', newSrc);
        fixedCount++;
        console.log('Fixed image path:', src, '->', newSrc);
      }
    });
    
    console.log('Fixed ' + fixedCount + ' image paths for GitHub Pages');
    
    // If we fixed any images, schedule another check in case React renders more images
    if (fixedCount > 0) {
      setTimeout(fixImagePaths, 500);
    } else {
      // If no images were fixed this time, schedule one more check after a longer delay
      // to catch any lazy-loaded images
      setTimeout(fixImagePaths, 2000);
    }
  }

  // Initial call after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(fixImagePaths, 500);
    });
  } else {
    // DOM already loaded, run immediately
    setTimeout(fixImagePaths, 500);
  }
  
  // Also run when the window is fully loaded (including all resources)
  window.addEventListener('load', function() {
    setTimeout(fixImagePaths, 500);
  });
  
  // Run periodically to catch any dynamically added images
  setInterval(fixImagePaths, 3000);
})();
