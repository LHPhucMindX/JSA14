let table = document.getElementById("table");
table.innerHTML = `
<thead></thead>
<tr>
  <th><input type="checkbox"></th>
  <th>Name</th>
  <th>Email</th>
  <th>Address</th>
  <th>Mobile</th>
  <th>Action</th>
</tr>
</thead>`;

var phoneList;
if (localStorage.getItem("phoneList")) {
    phoneList = JSON.parse(localStorage.getItem("phoneList"));
let renderPhoneList = phoneList.map((value, index) => {
    return `<tr>
        <td><input type="checkbox"></td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.address}</td>
        <td>${value.mobile}</td>
        <td>
        <i class="fas fa-pen" onclick=""></i>
        <i class="fas fa-trash" onclick="deleteName()"></i>
        </td>
    </tr>`;
}).join("\n");

table.innerHTML += `
    ${renderPhoneList}`;
} else {
    phoneList = [];
}
let addForm = false;
function showForm() {
    addForm = true;
    if (addForm == true) {
        document.getElementById("add-change").innerHTML = `
        <form id="form" onsubmit="return false">
        <input type="hidden" id="index"/>
        <input type="text" placeholder="name" name="name" id="name" required/>
        <input type="email" placeholder="email" name="email" id="email" required/>
        <input type="text" placeholder="address" required name="address" id="address"/>
        <input type="text" placeholder="mobile" name="mobile"  id="mobile" required/>
        <input type="button" class="padding-10 btn bg-aqua" id="save" onclick="addContact(event)" value="Add"/>
    </form>`;
    }
}
function addContact(event) {
    event.preventDefault();
    let name = document.forms["form"]["name"].value;
    let email = document.forms["form"]["email"].value;
    let address = document.forms["form"]["address"].value;
    let mobile = document.forms["form"]["mobile"].value;
    if (localStorage.getItem("phoneList")) {
    phoneList = JSON.parse(localStorage.getItem("phoneList"));
} else {
    phoneList = [];
}
    if (name && email && address && mobile) {
        phoneList.push({ name, email, address, mobile });
        localStorage.setItem("phoneList", JSON.stringify(phoneList));
    }
let renderPhoneList = phoneList.map((value, index) => {
    return `<tr>
        <td><input type="checkbox"></td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.address}</td>
        <td>${value.mobile}</td>
        <td>
        <i class="fas fa-pen" onclick=""></i>
        <i class="fas fa-trash" onclick="deleteName()"></i>
    </td>
    </tr>`;
}).join("\n");
  
table.innerHTML = `
    <thead></thead>
    <tr>
        <th><input type="checkbox"></th>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Mobile</th>
        <th>Action</th>
    </tr>
    </thead>
  ${renderPhoneList}`;
resetInput();
}
function resetInput() {
    document.forms["form"]["name"].value = "";
    document.forms["form"]["email"].value = "";
    document.forms["form"]["address"].value = "";
    document.forms["form"]["mobile"].value = "";
}
function deleteName(key) {
    if (localStorage.getItem("phoneList")) {
    phoneList = JSON.parse(localStorage.getItem("phoneList"));
} else {
    phoneList = [];
}
let i;
    if (confirm("Are you sure you want to delete this item?")) {
        phoneList.splice(key, 1);
        localStorage.setItem("phoneList", JSON.stringify(phoneList));
}
let renderPhoneList = phoneList.map((value, index) => {
    return `<tr>
        <td><input type="checkbox"></td>
        <td>${value.name}</td>
        <td>${value.email}</td>
        <td>${value.address}</td>
        <td>${value.mobile}</td>
        <td>
        <i class="fas fa-pen" onclick=""></i>
        <i class="fas fa-trash" onclick="deleteName()"></i>
        </td>
    </tr>`;
}).join("\n");
  
table.innerHTML = `
<thead></thead>
<tr>
<th><input type="checkbox"></th>
<th>Name</th>
<th>Email</th>
<th>Address</th>
<th>Mobile</th>
<th>Action</th>
</tr>
</thead>
${renderPhoneList}`;
}
function deleteAll() {
    if (localStorage.getItem("phoneList")) {
        phoneList = JSON.parse(localStorage.getItem("phoneList"));
} else {
    phoneList = [];
}
    localStorage.clear();
    console.log(phoneList);
    table.innerHTML = `
<thead></thead>
<tr>
    <th><input type="checkbox"></th>
    <th>Name</th>
    <th>Email</th>
    <th>Address</th>
    <th>Mobile</th>
    <th>Action</th>
</tr>
</thead>`;
}