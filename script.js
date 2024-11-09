function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    if (sectionId === 'main') {
        document.querySelectorAll('.main-button').forEach(button => {
            button.style.display = 'inline-block';
        });
        document.querySelector('h1').style.display = 'block';
    } else {
        document.querySelectorAll('.main-button').forEach(button => {
            button.style.display = 'none';
        });
        document.querySelector('h1').style.display = 'none';
        window.scrollTo(0,0)
        document.getElementById(sectionId).style.display = 'block';
    }
}