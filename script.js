
// small script placeholder for interactivity
document.addEventListener('click', function(e){
  if(e.target.matches('[data-nav]')){
    e.preventDefault();
    const id = e.target.getAttribute('href');
    location.href = id;
  }
});
