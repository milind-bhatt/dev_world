function fetchData(callback) {
    let data = "Hello, World!";
    callback(data);  // Pass the data to the callback function
  }
  
  function displayData(data) {
    console.log(data);  // Log the data to the console
  }
  
  fetchData(displayData);  // Call fetchData and pass displayData as the callback