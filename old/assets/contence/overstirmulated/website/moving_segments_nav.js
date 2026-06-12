document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const minGap = 40;   // closest together
        const maxGap = 300;  // farthest apart
        const newGap = Math.min(maxGap, minGap + scrollY);
        document.querySelector('nav').style.columnGap = newGap + 'px';
    });
});