
class TabLink {
  constructor(element) {
    console.log(`before`, this );
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // .tab correct? or .link

    // Using the custom data attribute get the associated Item element
    this.item = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    //where does item come from? 
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.item);
    //references? 
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
  };  

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll(`.tabs-links`);

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    links.forEach(link => {
      link.classList.remove(`tabs-link-selected`)
    });
    //selecting one deselects all others first

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add(`tabs-link-selected`);
    
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    let items = document.querySelectorAll(`.tabs-items`);
    
    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => {
      item.items.classList.remove(`tabs-item-selected`)
    });
    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add(`tabs-item-selected`);
  }
}


// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs');
//all tabs-link?????

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( link => new TabLink(link));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array