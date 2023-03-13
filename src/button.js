const Button = ` <html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body
  style="
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  "
>
  <button
  onclick="sendDataToReactNativeApp()"
    style="
      padding: 20;
      width: 200;
      font-size: 20;
      color: white;
      background-color: #6751ff;
    "
  >
    Send Data To React Native App
  </button>
  <script>
    const sendDataToReactNativeApp = async () => {
      window.ReactNativeWebView.postMessage('Data from WebView / Website');
    };
    document.addEventListener("message", message => {
      alert(message.data) 
    });
  </script>
</body>
</html>`;

export default Button;
