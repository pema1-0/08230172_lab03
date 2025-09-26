// 1. Add a greeting message based on current time
const greeting = document.createElement("h3"); // create an h3 element for greeting
const hour = new Date().getHours();           // get the current hour
if (hour < 12) {
  greeting.textContent = "☀️ Good Morning!";  // morning message
} else if (hour < 18) {
  greeting.textContent = "🌤️ Good Afternoon!"; // afternoon message
} else {
  greeting.textContent = "🌙 Good Evening!";  // evening message
}
// add greeting under home-center text
document.querySelector("#home .home-center").appendChild(greeting);

// 2. Moonlight mode toggle
document.getElementById("moonlightToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // switch between dark and light mode
});

// 3. Add new project card dynamically
const newProject = document.createElement("div"); // create a new div for project
newProject.classList.add("project-card", "card"); // add same classes as other projects
newProject.innerHTML = "<h3>📱 Portfolio Enhancement</h3><p>Added JS interactivity for Lab 3.</p>";
document.querySelector(".projects-grid").appendChild(newProject); // put it in the projects section

// 4. Alert when email link is clicked
const emailLink = document.querySelector('#contact a[href^="mailto:"]'); // select email link
emailLink.addEventListener("click", () => {
  alert("📧 You are about to send an email to Pema Yangki!"); // show alert
});

// 5. Hover effect for skill cards
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)"; // slightly enlarge card on hover
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)"; // back to normal when mouse leaves
  });
});
