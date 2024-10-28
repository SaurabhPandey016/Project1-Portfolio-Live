const showBar = document.querySelector('.menu-icon');
const menuClick = document.querySelector('.menu-check');
const list = document.querySelector('.links');
const barRemove = document.querySelector('.cross-sign');
const spanText = document.querySelector(".span-type");

// write an auto type function which will display Several cards;
// agr ek b space daale tm mto sb khb hojyega;
const typeList = ["Web-Developer","Frontend-Engineer", "Freelancer",  ];


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

  // now we'll call That Function passing the arguments;
  autoType(typeList, spanText);


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
