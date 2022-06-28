function toggleTheme() {
  var head = document.head;
  var link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "css/theme.css";
  link.id = "themeCSS";

  if(document.getElementById('switchCheckBox').checked) {
    head.appendChild(link);
  }else {
    document.getElementById("themeCSS").remove()
  }
}


