const showBar = document.querySelector('.menu-icon');
const menuClick = document.querySelector('.menu-check');
const list = document.querySelector('.links');
const barRemove = document.querySelector('.cross-sign');
const spanText = document.querySelector(".span-type");
const headScroll = document.querySelectorAll(".header-section");



// write an auto type function which will display Several cards;
// agr ek b space daale tm mto sb khb hojyega;
const typeList = ["Web-Developer","Frontend-Developer", "Freelancer"];

// now we'll call That Function passing the arguments;
autoType(typeList, spanText);

// reusable function
function autoType(wordArray, element) {

    let charIndex = 0;
    let forwardType = false;
    let listIndex = 0;
    let skipSpeed = 0;

    
    const intervalId = setInterval(function () {

        
        if (listIndex == wordArray.length) {
            listIndex = 0; 
        }
        // clearInterval(intervalId)

        // isse dheema tez ho rha hai
        if(skipSpeed) {
            skipSpeed--;
            return;
        }
        
        let word = wordArray[listIndex];

        // mean if false then do forward;
        if (forwardType == false) {
        
            skipSpeed = 1;
            element.innerText = element.innerText + word[charIndex];
            charIndex++;
            
            
        } else {

            // is code se mai har bar word se 1 item hata k dikha rha hu
            element.innerText = element.innerText.slice(0,element.innerText.length - 1);
            charIndex--;
        }

        if (charIndex == word.length) {
            forwardType = true;
            skipSpeed = 6;
        }

        if (element.innerText.length == 0 && forwardType == true) {

            listIndex++;
            forwardType = false;
        
        }
    }, 70);
    // clearInterval(intervalId);

}

  


// mera likha code abi ka

// function typing(array, element) {

//     let charIndex = 0; // for Printing Each Character
//     let arrayIndex = 0; // Determining The Array LEngth;
//     let speedControl = 0;
//     let forwardType = false;

//     let intervalId = setInterval(function() { // set Interval ek khud loop hota hai

       
//         if(arrayIndex == array.length) arrayIndex = 0;

//         let word = array[arrayIndex];

//         if(forwardType == false) // mean abi tk type ni hua to kro;
//         {
//             element.innerText = element.innerText + word[charIndex];
//             charIndex++;
//         }
//         else {
//             element.innerText = element.innerText.slice(0,element.innerText.length - 1);
//             charIndex--;
//         }

//         if(charIndex == word.length) { // mtlb print hogya forward
//             forwardType = true;
//         }

//         if(element.innerText.length == 0 && forwardType == true) { // mean print hogya return b hogya
//             // ab aage badha do index ko agla print krne k liye;
//             arrayIndex++;
//             forwardType = false;
//         }   
//     }, 70);
//     typing(typeList, autoType);

menuClick.addEventListener('click', function() {
    showBar.classList.add('show');
});

barRemove.addEventListener('click', function() {
    showBar.classList.remove('show');
});

// adding Scroll Navigation on header
window.addEventListener('scroll', ()=> {
    if(top > 200) {
        
    }
});

// ===================================================================================
// Javscript for Enquiry Form

const checkBox = document.querySelectorAll('.check-box');
const allGoals = document.querySelectorAll('.goal');
const inputField = document.querySelectorAll('.input-write');
const showError = document.querySelector('.error');
const raiseBar = document.querySelector('.progress-in');
const formData = JSON.parse(localStorage.getItem('formData')) || {};

let cnt = 0;
inputField.forEach((e) => {
    if(formData[e.id] && formData[e.id].completed) cnt++;
});

let ele = `${(100 / inputField.length) * cnt}%`;
raiseBar.style.width = ele; 

checkBox.forEach((input) => {

    // Now We'll use local storage so that data wont get erased when refreshed;
    input.addEventListener('click', function() {
        const allFilled = [...inputField].every((target) => {
            return(target.value);
        }); /// this return if every field is filled or not;

        const parent = input.parentElement;
        if(allFilled) { // if all fields filled then add class to parent element else show error
            
            parent.classList.toggle('completed');
            let elementId = input.nextElementSibling.id;
            formData[elementId].completed = !formData[elementId].completed;   
            localStorage.setItem('formData', JSON.stringify(formData));
        }
        else {
            showError.classList.add('show-error');
        }

        // this is for raising the bar when you complete filling details;
        cnt = 0;
        inputField.forEach((e) => {
            if(formData[e.id].completed) cnt++;
        })
        
        ele = `${(100 / inputField.length) * cnt}%`;
        raiseBar.style.width = ele; 
            
        });
    
    
});

inputField.forEach((input) => {

    if(formData[input.id]) {
        input.value = formData[input.id].name;

        if(formData[input.id].completed) {
            const parent = input.parentElement;
            parent.classList.add('completed');
        }
    }

    
    input.addEventListener('input', (e) => {

        // create localSTorage along with unique id's
        formData[e.target.id] = {
            name : e.target.value, 
            completed : false
        }

        // then we update our storage;
        localStorage.setItem('formData', JSON.stringify(formData));
    })

    input.addEventListener('focus', ()=> {
        showError.classList.remove('show-error');
    })
})
