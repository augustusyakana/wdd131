const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteBtn = document.createElement('button');

li.textContent = input.value;
deleteBtn.textContent = "❌";

li.append(deleteBtn);
list.append(li);
