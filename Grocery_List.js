const add = document.querySelector('.add');
const remove = document.querySelector('.remove');
const input = document.querySelector('.info');


add.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = '';
});

remove.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

// add.addEventListener('click', () => {
//   if (!!strValue) {
//     alert('Please enter something!')
//   } else {
//     let ul = document.querySelector('ul');
//     let li = document.createElement('li');
//     li.textContent = input.value;
//     ul.appendChild(li);
//     input.value = '';
//   }
// });

// remove.addEventListener('click', () => {
//   if ()

//   let ul = document.querySelector('ul');
//   let li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });