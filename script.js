// creating array 
let thrivingList =[];
let struglingList = [];
// increase and decrease 
let total = document.getElementById('total');
let thrivingCount = document.getElementById('thriving-count');
let struglingCount = document.getElementById('strugling-count');
// card and main section part 
const allCardsSection = document.getElementById('AllCards');
const mainContainer = document.querySelector('main');
console.log(mainContainer);

function toggelStyle(id){
    console.log("click");
}



function calculateCount (){
    total.innerText = allCardsSection.children.length
    thrivingCount.innerText = thrivingList.length
    struglingCount.innerText = struglingList.length
}
calculateCount()