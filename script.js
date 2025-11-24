const dialogRef = document.getElementById("myDialog");
const dialogElement = document.querySelector("dialog");
let Dialogcondition = false
let PageInfo = 0

const galerie = [
    "Assets/Galerie/art-7083325_1280.jpg",
    "Assets/Galerie/autumn-9216501_1920.jpg",
    "Assets/Galerie/biker-407123_1280.jpg",
    "Assets/Galerie/boy-4001345_1280.jpg",
    "Assets/Galerie/caucasus-5299607_1280.jpg",
    "Assets/Galerie/caucasus-5302236_1280.jpg",
    "Assets/Galerie/godafoss-1840758_1280.jpg",
    "Assets/Galerie/iceland-1768744_1280.jpg",
    "Assets/Galerie/motorcycle-6497541_1280.jpg",
    "Assets/Galerie/mountains-4961717_1280.jpg",
    "Assets/Galerie/path-7341731_1280.jpg",
    "Assets/Galerie/river-219972_1280.jpg",
    "Assets/Galerie/sea-8041734_1280.jpg",
    "Assets/Galerie/sisters-7103501_1280.jpg",
    "Assets/Galerie/sun-1818931_1280.jpg",
    "Assets/Galerie/sunrise-5084755_1280.jpg",
    "Assets/Galerie/sunset-6899490_1920.jpg",
    "Assets/Galerie/tree-736882_1280.jpg",
    "Assets/Galerie/trees-7541217_1280.jpg",
    "Assets/Galerie/Angeln.jpg",
    "Assets/Galerie/Bauhof.jpg",
    "Assets/Galerie/SchlossMoritzburg.jpg",
];

const galerie_alt = [
    "art-7083325_1280.jpg",
    "autumn-9216501_1920.jpg",
    "biker-407123_1280.jpg",
    "boy-4001345_1280.jpg",
    "caucasus-5299607_1280.jpg",
    "caucasus-5302236_1280.jpg",
    "godafoss-1840758_1280.jpg",
    "iceland-1768744_1280.jpg",
    "motorcycle-6497541_1280.jpg",
    "mountains-4961717_1280.jpg",
    "path-7341731_1280.jpg",
    "river-219972_1280.jpg",
    "sea-8041734_1280.jpg",
    "sisters-7103501_1280.jpg",
    "sun-1818931_1280.jpg",
    "sunrise-5084755_1280.jpg",
    "sunset-6899490_1920.jpg",
    "tree-736882_1280.jpg",
    "trees-7541217_1280.jpg",
    "Angeln.jpg",
    "Bauhof.jpg",
    "SchlossMoritzburg.jpg",
]

function init() {
    let contentRef = document.getElementById('template_content');
    for (let index = 0; index < galerie.length; index++) {
        contentRef.innerHTML += getPicToHtml(index)
    };
}

function getPicToHtml(index) {
    return `<div class="single_elements" onclick="openDialog(${[index]})" role="button" tabindex="0" aria-label="Open ${galerie_alt[index]} in big view">
                <img src="${galerie[index]}" alt="${galerie_alt[index]}">
            </div>`;
}

function openDialog(index) {
    let contentRef = document.getElementById('SingleView');
    let contentRefName = document.getElementById('DialogPicName');
    let PageRef = document.getElementById('PageNumbers')
    const {pic, title, page} = buildSingleView(index);  

    contentRef.innerHTML = pic;
    contentRefName.innerHTML = title;
    PageRef.innerHTML = page;
    
    dialogRef.showModal();
    PageInfo = index
    Dialogcondition = true
}

function buildSingleView(index) {
    const title = `<div>
                <h2 class="DialogPicName" id="dialogTitle">${galerie_alt[index]}</h2>
            </div>`;
    const pic = `<div class="SinglePicView" role="img" aria-label="${galerie_alt[index]}"
                style="background-image: url('${galerie[index]}')">
            </div>`;
    const page = `<div>
                <p>${index + 1}/${galerie.length}</p>
            </div>`;
    return {pic, title, page};
}

function SideSwitching(whichSide) {
    if (Dialogcondition) {
        if (whichSide) {
            PageInfo = PageInfo - 1;
            if (PageInfo < 0) {
                PageInfo = galerie.length - 1;
            }
        }
        else {
            PageInfo = PageInfo + 1;
            if (PageInfo > galerie.length - 1) {
                PageInfo = 0;
            }
        }
        openDialog(PageInfo)
    }
}

document.addEventListener('keyup', function (event) {
    if (event.code === 'ArrowLeft') {
        SideSwitching(true);
    } else if (event.code === 'ArrowRight') {
        SideSwitching();
    } else if (event.code === 'Escape') {
        closeDialog();
    } else if (event.code === 'Enter') {
        document.activeElement.click();
    }
});

function closeDialog() {
    dialogRef.close();
    Dialogcondition = false;
}

dialogElement.addEventListener('click', (event) => {
    if (event.target === dialogElement) {
        closeDialog();
    }
});







