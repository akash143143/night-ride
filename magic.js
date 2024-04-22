let road = document.querySelector('.road');
let car = document.querySelector('.car');

let flag = true;


const cars = ['./assets/Img_05.png', './assets/Img_06.png'];
console.log(cars);


document.addEventListener('keypress', (e) => {
    
    if(e.key === 'Enter'){
        road.classList.toggle('roadToggle');
        car.classList.toggle('carSuspension');
    }

    if(e.key === 'l'){
        if(flag){
            flag = false;
            car.innerHTML = `<img src="./assets/Img_05.png">`;
        }else{
            flag = true;
            car.innerHTML = `<img src="./assets/Img_06.png">`;
        }
    }
    
});