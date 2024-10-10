document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`${button.textContent} button was clicked!`);
        });
    });

    const successButton = document.querySelector('.btn.btn-success');
    if (successButton) {
        successButton.addEventListener('click', () => {
            document.body.classList.add('success-mode');
            document.body.classList.remove('success-mode');
        });
    }

    const infoButton = document.querySelector('.btn.btn-info');
    if (infoButton) {
        infoButton.addEventListener('click', () => {
            alert(`This test project was made by Minionguyjpro and a bit of help of VSC and Copilot!`);
        })
    }

    const dangerButton = document.querySelector('.btn.btn-danger');
    if (dangerButton) {
        dangerButton.addEventListener('click', () => {
            document.body.classList.add('danger-mode');
            document.body.classList.remove('danger-mode');
        });
    }

    const lightButton = document.querySelector('.btn.btn-light');
    if (lightButton) {
        lightButton.addEventListener('click', () => {
            document.body.classList.add('light-mode');
            document.body.classList.remove('light-mode');
        });
    }

    const darkButton = document.querySelector('.btn.btn-dark');
    if (darkButton) {
        darkButton.addEventListener('click', () => {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('dark-mode');
        });
    }
});