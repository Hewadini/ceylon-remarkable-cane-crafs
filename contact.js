document.getElementById("order-form").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var country = document.getElementById("country").value;
  var address = document.getElementById("address").value;
  var telephone numbers = document.getElementById("telephone numbers").value;
  var email address = document.getElementById("email address").value;
  var choice = document.getElementById("choice").value;

  if (!name || !country || !address || !telephone numbers || !email address || !choice) {
    alert("Please fill out all fields.");
    event.preventDefault();
  }
});
