    const dialogRef = document.getElementById("myDialog");
    let PageInfo = 0 

const galerie = [
    "Assets/Galerie/autumn-9216501_1920.jpg",
    "Assets/Galerie/path-7341731_1280.jpg",
    "Assets/Galerie/river-219972_1280.jpg",
    "Assets/Galerie/sea-8041734_1280.jpg",
    "Assets/Galerie/sisters-7103501_1280.jpg",
    "Assets/Galerie/sunset-6899490_1920.jpg",
    "Assets/Galerie/trees-7541217_1280.jpg",
];

const galerie_alt = [
    "autumn-9216501_1920.jpg",
    "path-7341731_1280.jpg",
    "river-219972_1280.jpg",
    "sea-8041734_1280.jpg",
    "sisters-7103501_1280.jpg",
    "sunset-6899490_1920.jpg",
    "trees-7541217_1280.jpg",
]

function init() {
    render()
}

function closeDialog() {
        dialogRef.close();
}

function render() {
    let contentRef = document.getElementById('template_content');
    for (let index = 0; index < galerie.length; index++) {
        contentRef.innerHTML += getPicToHtml(index)
    };
}


function getPicToHtml(index) {
    return `<div class="single_elements" onclick="openDialog(${[index]})">
                <img src="${galerie[index]}" alt="${galerie_alt[index]}">
            </div>`;            
}







function openDialog(index) {
    let contentRef = document.getElementById('SingleView');
    let contentRefName = document.getElementById('DialogPicName');
    let PageRef = document.getElementById('PageNumbers')
    contentRef.innerHTML = getSinglePicToHtml(index);
    contentRefName.innerHTML = getSinglePicNameToHtml(index);
    PageRef.innerHTML = GetPageNumber(index + 1);

    dialogRef.showModal();
    PageInfo = index 

}

function getSinglePicToHtml(index) {
    return `<div class="SinglePicView">
                <img src="${galerie[index]}" alt="${galerie_alt[index]}">
            </div>`;            
}

function getSinglePicNameToHtml(index) {
    return `<div>
                <h3>${galerie_alt[index]}<h3>
            </div>`;            
}



function GetPageNumber(index) {
    return `<div class="">
                <p>${index}/${galerie.length}</p>
            </div>`; 
}

function GoLeft (){
PageInfo = (PageInfo - 1)
if (PageInfo < 0) {
        PageInfo = (galerie.length -1)
    }
    openDialog(PageInfo)
}

function GoRight (){
PageInfo = (PageInfo + 1)
if (PageInfo > galerie.length -1) {
        PageInfo = 0
    }
    openDialog(PageInfo)
}