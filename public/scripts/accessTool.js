var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-1.12.4.js';
jqueryScript.defer = true;
document.head.appendChild(jqueryScript);

// Include accessibility_pro.js
var accessibilityScript = document.createElement('script');
accessibilityScript.src = 'https://www.negishim.com/accessibility/accessibility_pro.js';
accessibilityScript.defer = true;

// Define a function to configure accessibility settings after accessibility_pro.js is loaded
function configureAccessibilitySettings() {
    // Configuration for accessibility_pro.js
    accessibility_rtl = false;
    pixel_from_side = 20;
    pixel_from_start = 200;
}

// Execute configureAccessibilitySettings function after accessibility_pro.js is loaded
accessibilityScript.onload = configureAccessibilitySettings;

// Append the script element to the document head
document.head.appendChild(accessibilityScript);

// <script src="/scripts/accessTool.js" defer></script>
//old script that goes on pages