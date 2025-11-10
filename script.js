const galerie = [
"Assets/Galerie/autumn-9216501_1920.jpg",
"Assets/Galerie/path-7341731_1280.jpg",
"Assets/Galerie/river-219972_1280.jpg",
"Assets/Galerie/sea-8041734_1280.jpg",
"Assets/Galerie/sisters-7103501_1280.jpg",
"Assets/Galerie/sunset-6899490_1920.jpg",
"Assets/Galerie/trees-7541217_1280.jpg",
];


function init() {
    render()
}


function render() {
    let contentRef = document.getElementById('template_content');
    for (let index = 0; index < galerie.length; index++) {
        contentRef.innerHTML += getPicToHtml (index)
    }
}



function getPicToHtml (index) {
    return `<div class="single_elements">
                <img src="${galerie[index]}" alt="12">
            </div>`;
}







