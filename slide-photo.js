document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    const firstPhotoClick = document.querySelector('.first_Sec_gall figure');
    const secondPhotoClick = document.querySelector('.sec_photo');
    const thirdPhotoClick = document.querySelector('.thir_photo');
    const fourthPhotoClick = document.querySelector('.fou_photo');
    const fifthPhotoClick = document.querySelector('.fif_photo');
    const lastPhotoClick = document.querySelector('.last_fig_gall');
    const backGalleryPhoto = document.querySelector('.back_gallery_photo');
    
    // Get references to the photo figures
    const backPhoto1 = document.querySelector('.back_photo_1');
    const backPhoto2 = document.querySelector('.back_photo_2');
    const backPhoto3 = document.querySelector('.back_photo_3');
    const backPhoto4 = document.querySelector('.back_photo_4');
    const backPhoto5 = document.querySelector('.back_photo_5');
    const backPhoto6 = document.querySelector('.back_photo_6');
    
    // Function to show the correct photo
    function showPhoto(photoClass) {
        // Hide all photos
        backPhoto1.classList.remove('visible');
        backPhoto2.classList.remove('visible');
        backPhoto3.classList.remove('visible');
        backPhoto4.classList.remove('visible');
        backPhoto5.classList.remove('visible');
        backPhoto6.classList.remove('visible');

        // Show the selected photo
        document.querySelector(photoClass).classList.add('visible');
        
        // Show the modal
        backGalleryPhoto.classList.add('visible');
    }

    backGalleryPhoto.addEventListener('click', ()=>{
        backGalleryPhoto.classList.remove('visible');
    });

    // Event listeners for each photo
    firstPhotoClick.addEventListener('click', () => showPhoto('.back_photo_1'));
    secondPhotoClick.addEventListener('click', () => showPhoto('.back_photo_2'));
    thirdPhotoClick.addEventListener('click', () => showPhoto('.back_photo_3'));
    fourthPhotoClick.addEventListener('click', () => showPhoto('.back_photo_4'));
    fifthPhotoClick.addEventListener('click', () => showPhoto('.back_photo_5'));
    lastPhotoClick.addEventListener('click', () => showPhoto('.back_photo_6'));

    // Close button event listener
    document.querySelector('.close_bot_gallery').addEventListener('click', () => {
        backGalleryPhoto.classList.remove('visible');
    });
});
