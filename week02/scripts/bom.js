const input = document.querySelector('#favchap');
const button = document.querySelector('#addchap');
const list = document.querySelector('#list');

input.focus();

button.addEventListener('click', () => {
    // console.log(input.value)
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        deleteBtn.addEventListener('click', () => {
            list.removeChild(li);
        })

        li.textContent = input.value;
        deleteBtn.textContent = "❌";

        li.append(deleteBtn);
        list.append(li);
        input.value = '';
    }
})


