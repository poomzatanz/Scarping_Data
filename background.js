chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    id: "nodejsinapp",
    bounds: {
      'width': 1024,
      'height': 768
    }
  });
});
