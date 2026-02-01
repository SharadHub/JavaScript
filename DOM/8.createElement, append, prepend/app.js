//appending

// const container = document.getElementById('container');

// const newButton = document.createElement('button');

// newButton.textContent = "click me";

// newButton.classList.add('btn-primary');
// newButton.setAttribute("id", "mybutton");

// container.appendChild(newButton);

// container.append('some text', document.createElement('span'));



// removing

const buttonRemove = document.getElementById('btn-primary');
buttonRemove.remove();

const container = document.getElementById('container');

const addContent = document.createElement('button');

addContent.textContent = "Submit";
addContent.classList.add('btn-secondary')
addContent.setAttribute('id', 'submitBtn');
container.appendChild(addContent);
container.append('Some text', document.createElement('span'));

