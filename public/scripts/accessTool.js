// accessTool.js

// Include jQuery
var jqueryScript = document.createElement('script');
jqueryScript.src = 'https://code.jquery.com/jquery-1.12.4.js';
jqueryScript.defer = true;
document.head.appendChild(jqueryScript);

// Include accessibility_pro.js
var accessibilityScript = document.createElement('script');
accessibilityScript.src = 'https://www.negishim.com/accessibility/accessibility_pro.js';
accessibilityScript.defer = true;
document.head.appendChild(accessibilityScript);

// Configuration for accessibility_pro.js
var accessibility_rtl = true;
var pixel_from_side = 300;
var pixel_from_start = 300;

// Your additional code for accessTool.js goes here