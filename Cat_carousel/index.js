'use strict';

$(function () {

  $('.thumbnail').on('click', event => {
    event.preventDefault();
    // Grab the src attr of the img
    let thumbSrcAttr = $(event.currentTarget).find('img').attr('src');
    // Grab the alt attr of the img
    let thumbAltAttr = $(event.currentTarget).find('img').attr('alt');

    // Change the src and alt of my larger 'hero' img
    $('.hero img').attr('src', thumbSrcAttr);
    $('.hero img').attr('alt', thumbAltAttr);
  });
  
});