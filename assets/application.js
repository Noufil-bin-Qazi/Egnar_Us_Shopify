// Put your application javascript here

document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector('#relatedCarousel');
  if (carousel && typeof Flickity !== 'undefined') {
    new Flickity(carousel, {
      cellAlign: 'left',
      contain: true,
      pageDots: true,
      prevNextButtons: true,
      wrapAround: true,
    });
  }
});