// let user ={
//     name: 'Vbad',
//     age: 20,
//     // sayHi: function () {
//     //     console.log('Hi' + this.name);
        
//     // },
//     family:{
//         dad: 'den',
//         mom: 'sofa',
//     }
// }


// let user2 = structuredClone(user)
// // let user2 = {}
// // for (const key in user) {
// //     user2[key] = user[key]
// // }
// console.log(user2);
// user.family.dad = 'alex'

// user2.surName = 'ivan'


// let user3 = Object.assign({}, user)
// user3.surAge = 200

// let allUser = Object.assign({}, user, user2, user3);
// console.log(allUser);


// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         console.log('Hi ' + this.name);
        
//     }
// }

// let firstUser = new User('Vlad');
// console.log(firstUser);

// firstUser.sayHi()






// -----coffe
const runBtn = document.querySelector('.run');
const stopBtn = document.querySelector('.stop');
const addWaterBtn = document.querySelector('.addWaterBtn')
const addMilkBtn = document.querySelector('.addMilkBtn');
const addSugarBtn = document.querySelector('.addSugar');
const subtractSugar = document.querySelector('.subtractSugar');

const coffes = document.querySelectorAll('.coffe');

const trueIcons = document.querySelectorAll('.trueIcon');


const btnready = document.querySelector('.ready')
const addBox = document.querySelector('.addBox');
const water = document.querySelector('.water');
const milk = document.querySelector('.milk');
const sugar = document.querySelector('.sugar');
const textData = document.querySelector('.data');
const coffe_img = document.querySelector('.coffe_img');
const timer = document.querySelector('#timer');
const finishBox = document.querySelector('.finishBox');
const blockWater = document.querySelector('.block-water');
const blockMilk = document.querySelector('.block-milk');
let nameCoffe

function data() {
    let data = new Date()
    // textData.textContent = '';
    textData.textContent = `${data.getHours()}:${data.getMinutes()}`
}
data()
setInterval(data, 40000)




 
function CoffeeMachine(power){
    this.waterAmount = 0;
    this.milkAmount = 0;
    this.sugarAmount = 0
    this.noOrYes
    const WATER_HEAT_CAPACITY = 4200;
    const MILK_HEAT_CAPACITY = 3950;

    let timerId;
 
    let getBoilTime = function(){
        console.log(this.waterAmount * WATER_HEAT_CAPACITY * (100-20) / power);
 
        // let waterTime = this.waterAmount * WATER_HEAT_CAPACITY * (100-20) / power;
        // let milkTime = this.milkAmount * MILK_HEAT_CAPACITY * (80-20) / power;
        // console.log(waterTime + milkTime);
        
        // return (waterTime + milkTime)
        console.log((this.waterAmount * WATER_HEAT_CAPACITY * (100-20) / power) + (this.milkAmount * MILK_HEAT_CAPACITY * (80-20) / power));
        
        return (this.waterAmount * WATER_HEAT_CAPACITY * (100-20) / power) + (this.milkAmount * MILK_HEAT_CAPACITY * (80-20) / power)
    }.bind(this);
 
    function onReady(){
        document.querySelector('.finishBox1').classList.add('none')
        document.querySelector('.finishBox2').classList.remove('none')
        setTimeout(() => {
            finishBox.classList.add('none')
            document.querySelector('.carousel').classList.remove('none')
        }, 4000);
    }
    let minusWater = function() {
        this.waterAmount = this.waterAmount - 100;
        water.textContent = this.waterAmount;
    }.bind(this);
    let minusMilk = function () {
        this.milkAmount -= 100;
        milk.textContent = this.milkAmount 
    }.bind(this);

 
    this.run = () =>{
        runBtn.classList.add('none')
        stopBtn.classList.remove('none')
        if (nameCoffe === 'americano') {
            if (this.noOrYes === 'yes') {
                addBox.classList.add('none')
                finishBox.classList.remove('none')
                // console.log(getBoilTime());
                
                // timer.textContent = `${getBoilTime() >= 100000 ? Math.floor(getBoilTime() / 60000) : (getBoilTime() < 60000) ? 0 : 0} : ${Math.floor(getBoilTime() / 1000)}`
                minusWater()
                minusMilk()
                blockWater.classList.remove('none')
                blockMilk.classList.remove('none')
                coffe_img.classList.remove('none')
                timerId = setTimeout(onReady, getBoilTime());
            } else if(this.noOrYes === 'no'){
                addBox.classList.add('none')
                finishBox.classList.remove('none')
                minusWater()
                blockWater.classList.remove('none')
                coffe_img.classList.remove('none')
                coffe_img.classList.remove('none')
                timerId = setTimeout(onReady, getBoilTime());
            } 
        } else if(nameCoffe === 'cappuccino'){
            addBox.classList.add('none')
            finishBox.classList.remove('none')
            minusWater()
            minusMilk()
            blockWater.classList.remove('none')
            blockMilk.classList.remove('none')
            coffe_img.classList.remove('none')
            timerId = setTimeout(onReady, getBoilTime());
        } else if(nameCoffe === 'espreso'){
            addBox.classList.add('none')
            finishBox.classList.remove('none')
            minusWater()
            blockWater.classList.remove('none')
            blockMilk.classList.remove('none')
            coffe_img.classList.remove('none')
            timerId = setTimeout(onReady, getBoilTime());
        }



        // timerId = setTimeout(onReady, getBoilTime());
        // this.waterAmount = this.waterAmount - 100;
        // console.log(this.waterAmount);
        
    }
 
    this.stop = function(){
        clearTimeout(timerId);
        finishBox.classList.add('none')
        document.querySelector('.carousel').classList.remove('none')
        blockWater.classList.remove('none')
        blockMilk.classList.remove('none')
        coffe_img.classList.remove('none')
        stopBtn.classList.add('none')
        btnready.classList.remove('none')
        
    }
    this.addWater = (addWaterAmount) =>{
        if (this.waterAmount + addWaterAmount > 1000) {
            // alert('Місця в контенері з водою замало, попробуйте зменшити кількість')
            
            addWaterBtn.textContent = 'you have filled the container with maximum water'
            addWaterBtn.classList.add('animation')
            setTimeout(() => {
                addWaterBtn.textContent = 'Add water'
                addWaterBtn.classList.remove('animation')
            }, 4000);
        } else if(this.waterAmount + addWaterAmount <= 1000){
            this.waterAmount += addWaterAmount
            water.textContent =  this.waterAmount
        }
        
        console.log(this.waterAmount);
        
    }
    this.addMilk = (addMilkAmount)=>{
        if (this.milkAmount + addMilkAmount > 1000) {
            // alert('Місця в контенері з молоком замало, попробуйте зменшити кількість')
            addMilkBtn.textContent = 'you have filled the container with maximum milk'
            addMilkBtn.classList.add('animation')
            setTimeout(() => {
                addMilkBtn.textContent = 'Add water'
                addMilkBtn.classList.remove('animation')
            }, 4000);
        } else if(this.milkAmount + addMilkAmount <= 1000){
            this.milkAmount += addMilkAmount
            milk.textContent =  this.milkAmount
        }
    }
    this.addSugar = (addSugarAmount) =>{
        if (this.sugarAmount + addSugarAmount > 5) {
            alert('Забагато цукру')
        } else if(this.sugarAmount + addSugarAmount <= 5){
            this.sugarAmount += addSugarAmount;
            sugar.textContent = this.sugarAmount
        }
    }
    this.subtractSugar = () =>{
        if (this.sugarAmount > 0) {
            this.sugarAmount -= 1;
            sugar.textContent = this.sugarAmount;
        }
    }

    this.ready = () =>{
        
            // boxbtn_two.innerHTML = ''
            // boxbtn_two.innerHTML = `
            //     <button class="addWaterBtn addBtn">Add water</button>
            //     <button class="addMilkBtn addBtn">Add milk</button>
            //     <p class="textSuger">number of spoons of sugar:</p>
            //     <div class="sugerBox">
            //         <button class="subtract">-</button>
            //         <p class="suger">0</p>
            //         <button class="edd">+</button>
            //     </div>
            // `
            addBox.classList.remove('none')
            addBox.classList.add('boxbtn_two--flex')
           document.querySelector('.carousel').classList.add('none')
            btnready.classList.add('run')
            if (nameCoffe === "cappuccino") {
                document.querySelector('.noOrYes').classList.add('none')
                addMilkBtn.classList.remove('none')
            } else if(nameCoffe === "espreso"){
                document.querySelector('.noOrYes').classList.add('none')
            }
            runBtn.classList.remove('none')
            btnready.classList.add('none')

        
    }

    this.noOrYesMilk = (noOrYes) =>{





        if (noOrYes === 'no') {
            document.querySelector('.noOrYes').classList.add('none')
        } else if(noOrYes === 'yes'){
            document.querySelector('.noOrYes').classList.add('none')
            addMilkBtn.classList.remove('none')
        }
        this.noOrYes = noOrYes
        console.log(this.noOrYes);
        
    }

}
 

let coffeeMachine = new CoffeeMachine(1500);

runBtn.addEventListener('click', function(){
    coffeeMachine.run();
});

stopBtn.addEventListener('click', function(){
    coffeeMachine.stop();
})

 

// coffeeMachine.waterAmount = 200;
console.log(coffeeMachine);
// addWaterInput.addEventListener('input', (event)=>{
//     addWaterAmount = event.target.value
// })

btnready.addEventListener('click', function(){
    trueIcons.forEach((trueIcon) =>{
        if (!trueIcon.classList.contains('none')) {
            coffeeMachine.ready()
        } 
    })
    // coffeeMachine.ready()
    
})

addWaterBtn.addEventListener('click', function(){
    coffeeMachine.addWater(200)
})
addMilkBtn.addEventListener('click', function () {
    coffeeMachine.addMilk(200)
})
addSugarBtn.addEventListener('click', function () {
    coffeeMachine.addSugar(1)
})
subtractSugar.addEventListener('click', function () {
    coffeeMachine.subtractSugar()
})

document.querySelector('#no').addEventListener('click',function () {
    coffeeMachine.noOrYesMilk('no')
})
document.querySelector('#yes').addEventListener('click',function () {
    coffeeMachine.noOrYesMilk('yes')
})



document.querySelectorAll('[data-coffe]').forEach((name) =>{
    name.addEventListener('click', function () {
        nameCoffe = name.getAttribute('data-coffe')
    })
})
coffes.forEach((coffe, index) => {
    coffe.addEventListener('click', function () {
        if (index === 0) {
            trueIcons[index].classList.toggle('none')
            trueIcons[index + 1].classList.add('none')
            trueIcons[index + 2].classList.add('none')
        } else if(index === 1){
            trueIcons[index].classList.toggle('none')
            trueIcons[index - 1].classList.add('none')
            trueIcons[index + 1].classList.add('none')
        } else if(index ===2){
            trueIcons[index].classList.toggle('none')
            trueIcons[index - 1].classList.add('none')
            trueIcons[index - 2].classList.add('none')
        }
        
    })
})
