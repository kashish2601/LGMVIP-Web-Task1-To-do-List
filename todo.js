function getandupdate() {
  tit = document.getElementById("title").value;
  des = document.getElementById("discription").value;

  if (localStorage.getItem("json") == null) {
    item = [];
    item.push([tit, des]);
    localStorage.setItem("json", JSON.stringify(item));
  } else {
    itemArr = localStorage.getItem("json");
    item = JSON.parse(itemArr);
    item.push([tit, des]);
    localStorage.setItem("json", JSON.stringify(item));
  }
  update();
}

function update() {
  if (localStorage.getItem("json") == null) {
    item = [];
    localStorage.setItem("json", JSON.stringify(item));
  } else {
    itemArr = localStorage.getItem("json");
    item = JSON.parse(itemArr);
  }

  let tableBody = document.getElementById("tableBody");
  let str = "";
  item.forEach((element, index) => {
    str += `
           <tr>
           <th scope="row">${index + 1}</th>
           <td>${element[0]}</td>
           <td>${element[1]}</td>
           <td><button type="button" class="btn btn-primary btn-sm" onclick="deleted(${index})">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill " viewBox="0 0 16 16">
               <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
             </svg>
           
           </button></td>
           </tr>`;
  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getandupdate);
update();
function deleted(itemIndex) {
  console.log("delete", itemIndex);
  itemArr = localStorage.getItem("json");
  item = JSON.parse(itemArr);
  item.splice(itemIndex, 1);
  localStorage.setItem("json", JSON.stringify(item));
  update();
}
function clearstr() {
  if (confirm("Do You Want To Delete All Your Notes??")) {
    console.log("clearing a Storage");
    localStorage.clear();
    update();
  }
}
function a() {
  document.getElementById("demo").innerHTML =
    "Thanks for sending a message.....";
}
