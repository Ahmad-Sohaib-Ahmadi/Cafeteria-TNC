document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; 
    const scrollFactor = 0.5; 

    
    document.querySelector('.gallery_photo_head').style.transform = `translateX(-${scrollPosition * scrollFactor}px)`;
});