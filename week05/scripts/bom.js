const input = document.querySelector('#favchap');
const button = document.querySelector('#addchap');
const list = document.querySelector('#list');

const getChapterList = () => {
    return JSON.parse(localStorage.getItem('myList'))
}

let chapterArray = getChapterList() || [];

input.focus();

button.addEventListener('click', () => {
    // console.log(input.value)
    if (input.value.trim() !== '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
})


const displayList = (item) => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })

    li.textContent = item;
    deleteBtn.textContent = "❌";

    li.append(deleteBtn);
    list.append(li);
}

chapterArray.forEach(chapter => {
    displayList(chapter);
})


const setChapterList = () => {
    localStorage.setItem('myList', JSON.stringify(chapterArray));
}

const deleteChapter = (chapter) => {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}
