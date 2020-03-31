// getting started with JS and jQuery
// creating html with jQuery
class Counter {
    // initialize instance of itself. pass in props dictionary (properties) & parentNode (location in DOM)
    constructor(props, parentNode){
    this.count = 0;
    
    // create div element to append everything that follows
    // kind of like creating the object to return and put in parentNode
    const container = document.createElement("div");

    // create heading element (h1, h2, etc)
    const heading = document.createElement("h1");
    header.innerText = props.heading;
    container.appendChild(header); //add element (header) to parent element (container)

    //creating an place to display the counter
    const paragraph = document.createElement("p");
    this.updateParagraph(paragraph);
    container.appendChild(paragraph);

    //each counter gets its own button
    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    //add event listener to count clicks:
    //look up arrow function syntax ****>> param(s) => {function}
    btn.addEventListener("click", event => {this.count++;});
    //update paragraph text from above to reflect new count
    this.updateParagraph(paragraph);
    container.appendChild(btn);

    //add everything to parent node -- 
    parentNode.appendChild(container);
    }
    //update paragraph method
    updateParagraph(pTag){
        pTag.innerText = 'The button has been clicked ${this.count} times';
    }
}

// instatiate a counter:
// props = anything in Class with props.____
const counter1 = new Counter({
    heading: "my first counter",
    buttonText: "CLICK ME",
    }
    document.body
    );

const counter2 = new Counter({
    heading: "my second counter",
    buttonText: "CLICK ME TOO",
    }
    document.getElementById("left")
    );