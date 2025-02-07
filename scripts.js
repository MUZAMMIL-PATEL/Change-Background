// JavaScript to change background color when button is clicked
document.getElementById('colorChangeBtn').addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});
