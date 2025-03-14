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

// Function to remove 'A', 'An', 'The' from the beginning of band names
function stripArticle(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands alphabetically, ignoring articles
const sortedBands = bands.sort((a, b) =>
    stripArticle(a) > stripArticle(b) ? 1 : -1
);

// Append sorted bands to the DOM
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
});
