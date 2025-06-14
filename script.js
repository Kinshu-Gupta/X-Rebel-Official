document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;

  document.getElementById("statusMessage").textContent = "✅ Profile updated successfully!";
});

// Preview profile picture after upload
document.getElementById("profilePic").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("profilePreview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
});
