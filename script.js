//your JS code here. If required.

const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];


function stripArticle(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}


const sortedBands = bands.sort((a, b) => stripArticle(a) > stripArticle(b) ? 1 : -1);


const bandList = document.getElementById('band');


sortedBands.forEach(band => {
  const listItem = document.createElement('li');
  listItem.textContent = band;
  bandList.appendChild(listItem);
});
