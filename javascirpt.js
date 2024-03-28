document.getElementById('flatForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const formData = {
        address: document.getElementById('address').value,
        rent: document.getElementById('rent').value,
        description: document.getElementById('description').value,
    };

    console.log(formData); // For demonstration, we're just logging the data.
    // In a real scenario, you would send this data to a server.

    alert("Your listing has been submitted!");
    this.reset(); // Reset form fields after submission
});
