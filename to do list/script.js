const mainDiv = document.querySelector(".main");
const listContainer = document.getElementById("list-container");
const searchInput = document.getElementById("searchInput");
const addBtn = document.getElementById("addBtn");

loadData();

addBtn.addEventListener("click", () => {
    const newListItem = document.createElement("li");
    listContainer.appendChild(newListItem);
    newListItem.textContent = `Task: ${searchInput.value}`;

    newListItem.addEventListener("click", () => {
        newListItem.classList.toggle("checked");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    newListItem.appendChild(removeBtn);
    removeBtn.classList = "removeBtn";

    removeBtn.addEventListener("click", () => {
        listContainer.removeChild(newListItem);
        saveData();
    });

    saveData();
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;

        document.querySelectorAll("li").forEach((listItem) => {
            listItem.addEventListener("click", () => {
                listItem.classList.toggle("checked");
            });

            const removeBtn = listItem.querySelector(".removeBtn");
            removeBtn.addEventListener("click", () => {
                listContainer.removeChild(listItem);
                saveData();
            });
        });
    }
}
