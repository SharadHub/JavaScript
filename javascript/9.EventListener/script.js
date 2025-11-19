document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    const registerButton = document.querySelector('button[type="Submit"]');
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email-field'); 
    const passwordInput = document.getElementById('password-field'); 

    console.log('✅ DOMContentLoaded: The HTML structure is fully loaded and safe to manipulate.');
    header.style.color = '#007bff';

    if (registerButton) {
        registerButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('👉 click: The Register button was clicked. Triggering a button action.');
            alert('Button clicked! (Using preventDefault to stop default form action)');
        });
    }

    if (nameInput) {
        nameInput.addEventListener('input', (event) => {
            console.log(`✏️ input: Name input live update: "${event.target.value}"`);
        });
    }

    if (emailInput) {
        emailInput.addEventListener('change', (event) => {
            console.log(`🔄 change: Email input value finished editing: "${event.target.value}"`);
        });
    }

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('🚀 submit: Form submission intercepted for processing/validation.');

            if (passwordInput && passwordInput.value.length < 8) {
                console.error('🛑 Validation Failed: Password must be at least 8 characters.');
                alert('Registration Failed: Password must be 8+ chars.');
            } else {
                console.log('✅ Validation Passed: Collecting and sending data...');
                alert('Registration Successful (simulated)!');
                form.reset();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 's' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            console.log('⌨️ keydown: Shortcut detected! "Save" (Ctrl/Cmd + S) was pressed.');
        }
    });

    const allFormInputs = form ? form.querySelectorAll('input') : [];

    allFormInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.backgroundColor = '#f0f8ff';
            console.log(`🎯 focus: Input field "${input.name || input.id}" is now active.`);
        });

        input.addEventListener('blur', () => {
            input.style.backgroundColor = '';
            console.log(`💨 blur: Input field "${input.name || input.id}" is now inactive.`);
        });
    });

    if (header) {
        header.addEventListener('mouseover', () => {
            header.style.textShadow = '2px 2px 4px #aaa';
            console.log('🖱️ mouseover: Dashboard title is being hovered.');
        });
        header.addEventListener('mouseout', () => {
            header.style.textShadow = 'none';
        });
    }

    window.addEventListener('resize', () => {
        console.log(`📐 resize: Window dimensions changed to ${window.innerWidth}x${window.innerHeight}`);
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const headerElement = document.querySelector('header');

        if (scrollPosition > 100) {
            headerElement.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Less transparent when scrolling
        } else {
            headerElement.style.backgroundColor = 'rgba(255, 255, 255, 0.85)'; // More transparent when at top
        }
    });
});