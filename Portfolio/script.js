// Initialize AOS animations
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});

// Auto-calculate and update age (Birthdate: January 4, 2006)
function updateAge() {
    const birthDate = new Date(2006, 0, 4); // Note: Months are 0-indexed
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = age;
}
updateAge();

// Modal functionality for project details
function openModal(projectId) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    let content = '';

    if (projectId === 'project1') {
        content = `
      <h3 class="text-lg font-bold mb-2">Interactive Graph Visualizer</h3>
      <p class="text-xs"><strong>Duration:</strong> Sept 2024 – Dec 2024</p>
      <p class="text-xs mt-1">
        Crafted a visual tool for graph algorithms (DFS, BFS, Shortest Path) using HTML5 Canvas, achieving 95% test coverage.
      </p>
    `;
    } else if (projectId === 'project2') {
        content = `
      <h3 class="text-lg font-bold mb-2">SPlanner Mobile App</h3>
      <p class="text-xs"><strong>Duration:</strong> Mar 2022 – Dec 2023</p>
      <p class="text-xs mt-1">
        Developed a Flutter‑based task manager featuring dynamic scheduling and robust Firebase authentication.
      </p>
    `;
    }

    modalBody.innerHTML = content;
    modalOverlay.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.add('hidden');
}

// (Optional) Scroll helper function for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
        });
    }
}

// Create a fun cursor trail effect
document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.classList.add('cursor-trail');
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    setTimeout(() => {
        trail.remove();
    }, 800);
});

// Dummy contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thanks for reaching out!');
    this.reset();
});
