function fetchDataWithCallback(callback) {
  setTimeout(function () {
    let error = Math.random() < 0.5; // randomly simulate success or failure

    try {
      if (error) {
        throw new Error("Fetch failed");
      } else {
        callback("Data fetched");
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}

// Example usage:
fetchDataWithCallback(function (message) {
  console.log(message);
});
