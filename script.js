// 1. Add a greeting based on current time
const greeting = document.createElement("h3");
const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "☀️ Good Morning!";
} else if (hour < 18) {
  greeting.textContent = "🌤️ Good Afternoon!";
} else {
  greeting.textContent = "🌙 Good Evening!";
}
// Put it under home text
document.querySelector("#home .home-center").appendChild(greeting);

// 2. Moonlight mode toggle
document.getElementById("moonlightToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // switch dark/light
});

// 3. Add new project card dynamically
const newProject = document.createElement("div");
newProject.classList.add("project-card", "card");
newProject.innerHTML = "<h3>📱 Portfolio Enhancement</h3><p>Added JS interactivity for Lab 3.</p>";
document.querySelector(".projects-grid").appendChild(newProject);

// 4. Alert when email link is clicked
const emailLink = document.querySelector('#contact a[href^="mailto:"]');
emailLink.addEventListener("click", () => {
  alert("📧 You are about to send an email to Pema Yangki!");
});

// 5. Hover effect for skill cards
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)"; // slightly bigger on hover
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)"; // back to normal
  });
});
