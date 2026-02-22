// creating array 
let thrivingList = [];
let struglingList = [];
// increase and decrease 
let total = document.getElementById('total');
let thrivingCount = document.getElementById('thriving-count');
let struglingCount = document.getElementById('strugling-count');

// catch the all button
const allFilterBtn = document.getElementById('All-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strivingFilterBtn = document.getElementById('Struggling-filter-btn')

// card and main section part 
const allCardsSection = document.getElementById('AllCards');
const mainContainer = document.querySelector('main');
console.log(mainContainer);


// add toggelStyle(id) method
function toggelStyle(id) {
    allFilterBtn.classList.remove('bg-black', 'text-white');
    thrivingFilterBtn.classList.remove('bg-black', 'text-white');
    strivingFilterBtn.classList.remove('bg-black', 'text-white');




    allFilterBtn.classList.add('bg-gray-300', 'text-black');
    thrivingFilterBtn.classList.add('bg-gray-300', 'text-black');
    strivingFilterBtn.classList.add('bg-gray-300', 'text-black');

    //    add selected option
    const selected = document.getElementById(id);
    console.log(selected);

    selected.classList.remove('bg-gray-300', 'text-black')
    selected.classList.add('bg-black', 'text-white')
}

// event deligation process start 


mainContainer.addEventListener('click', function (event) {
    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector('.plantName').innerText;
    const latinName = parentNode.querySelector('.latinName').innerText;
    const light = parentNode.querySelector('.light').innerText;
    const weekly = parentNode.querySelector('.weekly').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    const cardInfo = {
        plantName,
        latinName,
        light,
        weekly,
        status,
        notes
    }
    console.log(cardInfo);
})

// creating a function
function calculateCount() {
    total.innerText = allCardsSection.children.length
    thrivingCount.innerText = thrivingList.length
    struglingCount.innerText = struglingList.length
}

// call the function
calculateCount()



