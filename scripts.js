// SIDE NAVIGATION WHEN WE CLICK ON THE SMALL ICON 
const cookieConsent = document.getElementById('cookie-consent');
const acceptBtn = document.getElementById('accept-btn');
const rejectBtn = document.getElementById('reject-btn');

acceptBtn.addEventListener('click', () => {
  // Set a cookie to remember user's choice
  document.cookie = "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  cookieConsent.style.display = "none";
});

rejectBtn.addEventListener('click', () => {
  // Set a cookie to remember user's choice
  document.cookie = "cookieConsent=rejected; expires=Fri, 31 Dec 9999 23:59:59 GMT";
  cookieConsent.style.display = "none";
});

// Check if user has already made a choice
if (document.cookie.indexOf("cookieConsent") !== -1) {
  cookieConsent.style.display = "none";
}























const bar = document.getElementById('bar');
// for close button 
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click',() =>{
        // IN STYLE AND CREATE ACTIVE UNDER NAVIGATION BAR 
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click',() =>{
        // IN STYLE AND CREATE ACTIVE UNDER NAVIGATION BAR 
        nav.classList.remove('active');
    })
}





