// viewportUtility.js
export const setViewportMetaTag = () => {
    // Create a meta tag
    const viewportMetaTag = document.createElement('meta');
  
    // Set the attributes for the meta tag
    viewportMetaTag.name = 'viewport';
    viewportMetaTag.content = 'width=device-width, initial-scale=1.0';
  
    // Append the meta tag to the head of the document
    document.head.appendChild(viewportMetaTag);
  
    // Return a function for cleanup (optional)
    return () => {
      // Remove the meta tag when needed
      document.head.removeChild(viewportMetaTag);
    };
  };
  