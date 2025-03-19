# Geek Bar Flavors - GitHub Pages Deployment

This build folder contains the compiled version of the Geek Bar Flavors application, ready for deployment to GitHub Pages.

## Changes Made for GitHub Pages

1. Added `fix-image-paths.js` script to fix image paths at runtime
2. Added `fix-buy-now-links.js` script to update the "Buy Now" button links
3. Modified `index.html` to include both scripts

## How to Deploy

1. Upload the entire contents of this build folder to your GitHub repository
2. Enable GitHub Pages in your repository settings
3. Set the GitHub Pages source to the branch and folder where you uploaded these files

## Troubleshooting

If images still don't appear:

1. Open the browser's developer console (F12) to check for any errors
2. Verify that the `fix-image-paths.js` script is being loaded correctly
3. Check the console logs to see if the script is fixing the image paths

If "Buy Now" links don't point to the correct URL:

1. Open the browser's developer console (F12) to check for any errors
2. Verify that the `fix-buy-now-links.js` script is being loaded correctly
3. Check the console logs to see if the script is updating the links
4. Click on a "Buy Now" button and verify that it goes to the correct URL: `https://www.vaporfi.com/catalogsearch/result/?q=geek+bar&A=10012`

## Original Issues

1. Image paths were not correctly accounting for the GitHub Pages base URL, which includes the repository name. The fix-image-paths.js script dynamically corrects these paths at runtime.

2. "Buy Now" button links needed to be updated to include the affiliate code. The fix-buy-now-links.js script dynamically updates these links at runtime.
