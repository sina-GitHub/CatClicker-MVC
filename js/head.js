// DOM elements
const head = document.querySelector("head");
const link = document.createElement("link");

// binding values and attributes
link.rel = "stylesheet";
link.href = "style.css";

// appendind...
head.appendChild(link);
