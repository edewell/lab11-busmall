// alert('Pick from the catalog!!!')

class CatalogPicture {
    clicks = 0;
    timesShown = 0;

    constructor(name, imgSrc) {
        this.name = name;
        this.imgSrc = imgSrc;
    };
}

// defining how many times an object can be clicked
let firstImage = null;
let secondImage = null;
let thirdImage = null;
// let fourthImage = null;
// let fifthImage = null;
// let sixthImage = null;
let amountOfClicks = 0;
const MAXIMUM_CLICKS = 10;


// defining objects for my catalog
let eachCatalogObject = [
    new CatalogPicture('R2D2 Bag', './images/bag.jpg'),
    new CatalogPicture('Weird Chair', './images/chair.jpg'),
    new CatalogPicture('Dragon Meat', './images/dragon.jpg'),
    new CatalogPicture('Wine Glass', './images/wine-glass.jpg'),
    new CatalogPicture('Banana Cutter', './images/banana.jpg'),
    new CatalogPicture('Dog Duck', './images/dog-duck.jpg'),
];

// getting every element id to call functions for them 
const catalogHeader = document.getElementById('cataloghead');
const imageSectionTab = document.getElementById('everycatalog');
const totalVotes = document.getElementById('totalclicks');
const firstImageName = document.getElementById('first');
const firstImageTag = document.getElementById('first_image');
const secondImageName = document.getElementById('second');
const secondImageTag = document.getElementById('second_image');
const thirdImageName = document.getElementById('third');
const thirdImageTag = document.getElementById('third_image');
// const fourthImageName = document.getElementById('glass');
// const fourthImageTag = document.getElementById('fourth_image');
// const fifthmageName = document.getElementById('banana');
// const fifthImageTag = document.getElementById('fifth_image');
// const sixthImageName = document.getElementById('duck');
// const sixthImageTag = document.getElementById('sixth_image');
const catalogDiv = document.getElementById('catalogresults');


// creating a random object literal for each image listed 
let pickImage = function() {
    
    firstImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    secondImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    thirdImageIndex = Math.floor(Math.random() * eachCatalogObject.length);
    
    firstImageIndex = secondImageIndex = thirdImageIndex;


    while (firstImageIndex === secondImageIndex === thirdImageIndex) {
        firstImageIndex = Math.floor(Math.random() * eachCatalogObject.length);
    }


    // fourthImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    // fifthImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    // sixthImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    firstImageName.innerText = eachCatalogObject[firstImageIndex].name; 
    firstImageTag.src = eachCatalogObject[firstImageIndex].imgSrc;
    
    secondImageName.innerText = eachCatalogObject[secondImageIndex].name; 
    secondImageTag.src = eachCatalogObject[secondImageIndex].imgSrc;
    
    thirdImageName.innerText = eachCatalogObject[thirdImageIndex].name; 
    thirdImageTag.src = eachCatalogObject[thirdImageIndex].imgSrc;
    
    // fourthImageName.innerText = eachCatalogObject[fourthImageIndex].name; 
    // fourthImageTag.src = eachCatalogObject[firstImageIndex].imgSrc;
    
    // fifthmageName.innerText = eachCatalogObject[fifthImageIndex].name; 
    // fifthImageTag.src = eachCatalogObject[firstImageIndex].imgSrc;
    
    // sixthImageName.innerText = eachCatalogObject[sixthImageIndex].name; 
    // sixthImageTag.src = eachCatalogObject[firstImageIndex].imgSrc;

    firstImage = eachCatalogObject[firstImageIndex];
    secondImage = eachCatalogObject[secondImageIndex];
    thirdImage = eachCatalogObject[thirdImageIndex];
};

// handls the click of the button
const clickOfCatalog = function(evt) {
    console.log(`You have clicked this id ${evt.target.id}`);

    if (amountOfClicks < MAXIMUM_CLICKS) {

        const thingsWeClickedOn = evt.target;
        const id = thingsWeClickedOn.id;

        firstImage.timesShown++;
        secondImage.timesShown++;
        thirdImage.timesShown++;
        // console.log(`First image ${firstImage.name} `)
        
        // 
        if (id === 'first_image' || id === 'second_image' || id === 'third_image') {

            if (id === 'first_image') {
                firstImage.clicks++;
                console.log(`First image ${firstImage.name} has ${firstImage.clicks} so far`);
            }

            if (id === 'second_image') {
                secondImage.clicks++;
                console.log(`Second image ${secondImage.name} has ${secondImage.clicks} so far`);
            }

            if (id === 'third_image') {
                thirdImage.clicks++;
                console.log(`Third image ${thirdImage.name} has ${thirdImage.clicks} so far`);
            }

            pickImage();
        }
    }

    amountOfClicks++;

    if (amountOfClicks === MAXIMUM_CLICKS) {
        imageSectionTab.removeEventListener('click', clickOfCatalog);
        console.log("Those are 10 objects!!!");
        alert('You have selected 10 Images!!!');
        catalogChart();

            for (let index = 0; index < eachCatalogObject.length; index++) {
               let newLiScore = document.createElement('li');
               newLiScore.innerText = `${eachCatalogObject[index].name}: ${eachCatalogObject[index].clicks}`;
               totalVotes.appendChild(newLiScore);
                
            }
        }


    // shows chart for catalog pictures
    // const catalogChart = function() {

    
        
    // // if (amountOfClicks < MAXIMUM_CLICKS) {
    // //   firstImage.timesShown++;
    // //   secondImage.timesShown++;
    // //   thirdImage.timesShown++;

    // }
    // // firstImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    // secondImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    // thirdImageIndex = Math.floor(Math.random() * eachCatalogObject.length);

    // for (let index = 0; index < catalogChart.length; index++) {
        
    
    // }
}

    function catalogChart(){
        
        let catalogEl = document.createElement('h2');
        catalogEl.innerText = 'Logging results!!';

        catalogDiv.appendChild(catalogEl);

        const catalogNameArray = [];
        const catalogLikesArray = [];

        for (let i = 0; eachCatalogObject.length; i++){
            const singleCatName = eachCatalogObject[i].name;
            catalogNameArray.push(singleCatName);
        }

        for (let i = 0; i < eachCatalogObject.length; i++){
            const singleCatLike = eachCatalogObject[i].clicks;
            catalogLikesArray.push(singleCatLike);
        }

        catalogLikesArray.push(10);

        const ctx = document.getElementById('myChart').getContext('2d');
        const cataChart = new Chart(ctx, {
            
            type: 'bar',

            data: {
                labels: catalogNameArray,
                datasets: [{
                    label: 'Catalog Likes',
                    backgroundColor: 'rgb(255, 99, 132',
                    borderColor: 'rgb(255, 99, 132',
                    data: catalogLikesArray
                }]
            },

            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true 
                        }
                    }]
                }
            }
        });

    }
        // images for chart
        
    

      // shows how many times the images were clicked om
     
    //   const chartCatalog = function() {
    //       let chartShow =  [];
    //         firstImage.timesShown;
    //         secondImage.timesShown;
    //         thirdImage.timesShown;
            
    //   }


        
      
    //   for (let index = 0; index < myChart.length; index++) {
          
            
    //     }

    // }
    



imageSectionTab.addEventListener('click', clickOfCatalog);
pickImage();


