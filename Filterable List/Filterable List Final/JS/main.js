const results = document.querySelector("#results");
const filterList = document.querySelector("#filterList");

const buildCards = data => {
  data.forEach(item => {
    const div = document.createElement("div");
    div.classList = "user card mb-2";
    output = `
        <div>
            <h1 class="card-title">${item.login}</h1>
        </div>
        <div class="pb-3">
            <img class="img-fluid rounded-circle" src="${
              item.avatar_url
            }" width="150">
        </div>
      `;
    div.innerHTML = output;
    results.appendChild(div);
  });
};

const orderList = e => {
  let filterValue = e.target.value.toUpperCase();
  let users = document.querySelectorAll(".user");
  users.forEach(user => {
    user.textContent.toUpperCase().includes(filterValue)
      ? (user.style.display = "")
      : (user.style.display = "none");
  });
};

fetch("https://api.github.com/users")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    buildCards(data);
  });

filterList.addEventListener("input", orderList);
