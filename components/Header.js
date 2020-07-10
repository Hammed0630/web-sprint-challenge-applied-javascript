// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header( info ) {
    const head = document.createElement('div'),
         date = document.createElement('span'),
         title = document.createElement('h1'),
         temperature = document.createElement('span')


   

    head.classList.add("header")
    date.classList.add("date")
    temperature.classList.add("temp")

    date.textContent = 'March 20 1994'
    title.textContent = "Lambda Times"
    temperature.textContent = "98°"
 
    head.append(date)
    head.append(title)
    head.append(temperature)
    
    return head;
}

    const titleCom = Header();
    document.querySelector(".header-container").appendChild(titleCom);
