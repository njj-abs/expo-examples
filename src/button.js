const Button = `
<html>
<head></head>
<body>
<h1>HTML DOM Events</h1>
<h2>The onclick Event</h2>
<p id="demo"></p>

<p>The onclick event triggers a function when an element is clicked on.</p>
<p>Click to trigger a function that will output "Hello World":</p>

<button onclick="myFunction()">Click me</button>
<script>
  function myFunction() {

    window.ReactNativeWebView.postMessage("Hello!")
    document.getElementById("demo").innerHTML = "Hello World";
  }
  
  </script>
</body>
</html>`;

export default Button;
