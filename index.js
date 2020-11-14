'use strict';

function getDogImage(numImage) {
//  fetch('https://dog.ceo/api/breeds/image/random')
  fetch(`https://dog.ceo/api/breeds/image/random/${numImage}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
	  .catch(error => alert('Something went wrong. Try again later.') );
}

/**
 * Generates the list of possible answers for
 * one question
 */
function generatedogImageTagsHtml(dogImageArray) {
	
  let dogImageTags = '';
  dogImageArray.forEach(image => {
    dogImageTags += `
<img src="${image}" class="results-img">
    `;
  });
  return dogImageTags;
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.photo').children('.results-img').remove();
  const retHtml = generatedogImageTagsHtml(responseJson.message);
  $( ".photo" ).append(retHtml);
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
	var numImage = 0;
	numImage = parseInt( $(event.currentTarget).find(
      'input[name="number-choice"]').val());
	  getDogImage(numImage);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});