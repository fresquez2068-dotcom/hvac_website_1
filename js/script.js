/* Vantage Marketing — Site Scripts */

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Nav Toggle ---
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    if (toggle && links) {
        toggle.addEventListener('click', function() {
            links.classList.toggle('open');
        });

        // Close nav on link click (mobile)
        links.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                links.classList.remove('open');
            });
        });
    }

    // --- Contact Form Handler ---
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Collect form data
            var data = {
                name: document.getElementById('name').value.trim(),
                company: document.getElementById('company').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                trucks: document.getElementById('trucks').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value.trim()
            };

            // Simple validation
            if (!data.name || !data.company || !data.email) {
                alert('Please fill in your name, company, and email address.');
                return;
            }

            // Normally we'd POST to an API endpoint here.
            // For now, log the submission and show success.
            console.log('Form submission:', JSON.stringify(data, null, 2));

            // Show success message
            if (successMsg) {
                successMsg.classList.add('show');
            }

            // Reset form
            form.reset();

            // Scroll to success message
            setTimeout(function() {
                if (successMsg) {
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 200);
        });
    }

});