// Skill button toggle functionality with sliding effect
document.querySelectorAll('.skill-btn').forEach(button => {
    button.addEventListener('click', () => {
        const skillId = button.getAttribute('data-skill');
        const description = document.getElementById(skillId);

        if (description.classList.contains('show')) {
            description.classList.remove('show');  // Hide the description
        } else {
            // Hide all descriptions before showing the clicked one
            document.querySelectorAll('.skill-description').forEach(desc => {
                desc.classList.remove('show');
            });

            // Show the clicked skill's description
            description.classList.add('show');
        }
    });
});

// Project card toggle functionality
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const description = document.getElementById(projectId);

        if (description.classList.contains('show')) {
            description.classList.remove('show'); // Hide description
        } else {
            // Hide all other project descriptions
            document.querySelectorAll('.project-description').forEach(desc => {
                desc.classList.remove('show');
            });

            // Show the selected project's description
            description.classList.add('show');
        }
    });
});
