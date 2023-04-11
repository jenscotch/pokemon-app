alert('Hello world');
let favoriteFood = 'Potatoes';
document.write(favoriteFood);

let userAges = {
    anne: 27,
    sam: 112,
    megan: 97
  };
  
  // Note: don't worry about the unfamiliar code, you will be learning what does this mean in later Exercises. Read the comments below, don't worry about the techincal details in the code, just focus on the general idea behind it
  // As you can see below, ``
  
  
  
  document.querySelector('button').addEventListener('click', () => {
    // when the user click on the button, the following code is executed
    
    
    // this instructs the browser to take the value of the input field and store it in `currentUserName` variable
    let currentUserName = document.querySelector('#username').value;
    
    // NOTICE HERE: `currentUserName` contains the object key name, and is being inserted after "Entered username:" text within "Results View" section
    document.querySelector('#username_key').innerText = currentUserName;
    // NOTICE HERE: `userAges[currentUserName]` contains the age, and is being inserted after "User's Age:" text within "Results View" section
    document.querySelector('#age').innerText = userAges[currentUserName];
    
  });