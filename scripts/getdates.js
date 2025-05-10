// Get the current year:
document.getElementById("currentyear").textContent = new Date().getFullYear();

  const lastModified = new Date(document.lastModified);
  const formattedDate = lastModified.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

// Get the last modified date:
document.getElementById("lastModified").textContent = formattedDate;
