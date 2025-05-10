// Achievements Data
const achievements = [
    {
        title: "Amazon Future Engineer",
        description: "Selected among 500 scholars across India for the Amazon Future Engineer Scholarship Program 2023-24",
        icon: "fas fa-award"
    },
    {
        title: "Smart India Hackathon 2023",
        description: "Selected for the Grand Finale of Smart India Hackathon 2023",
        icon: "fas fa-trophy"
    },
    {
        title: "Google Cloud Ready Facilitator",
        description: "Achieved Google Cloud Ready Facilitator Program certification",
        icon: "fas fa-certificate"
    }
];

// Projects Data
const projects = [
    {
        title: "Climate-Smart Agriculture Platform",
        description: "A comprehensive platform empowering farmers with real-time weather data, crop recommendations, and market insights to optimize agricultural practices and increase yields.",
        technologies: ["React", "Node.js", "MongoDB", "Python", "Machine Learning"],
        link: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        link: "#"
    }
];

// Skills Data
const skills = {
    "Programming Languages": ["C++", "Python", "Java", "JavaScript"],
    "Web Development": ["HTML", "CSS", "React", "Node.js", "Express"],
    "Database": ["MongoDB", "MySQL"],
    "Tools & Technologies": ["Git", "GitHub", "VS Code", "Postman"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes"],
    "Machine Learning": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
};

// Function to create achievement cards
function createAchievementCards() {
    const container = document.getElementById('achievements-container');
    achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.innerHTML = `
            <i class="${achievement.icon}"></i>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        `;
        container.appendChild(card);
    });
}

// Function to create project cards
function createProjectCards() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                View Project <i class="fas fa-external-link-alt"></i>
            </a>
        `;
        container.appendChild(card);
    });
}

// Function to create skills sections
function createSkillsSections() {
    const container = document.getElementById('skills-container');
    Object.entries(skills).forEach(([category, skillList]) => {
        const section = document.createElement('div');
        section.className = 'skill-category';
        section.innerHTML = `
            <h3>${category}</h3>
            <div class="skill-list">
                ${skillList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;
        container.appendChild(section);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createAchievementCards();
    createProjectCards();
    createSkillsSections();

    // Hamburger menu for mobile navbar
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      // Close menu when a link is clicked (for better UX)
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('open');
        });
      });
    }
});

// Handle contact form submit (you can link it to Google Forms or backend)
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
});
  