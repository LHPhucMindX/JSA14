let phoneList = [
    {
        name: 'Jonh',
        email: 'john@gmail.com',
        add:"Long An",
        mobile: "153-359-4678"
    },
    {
        name: 'Annie',
        email: 'annie@gmail.com',
        add: "New York",
        phone: '86745392075'
    },
    {
        name: 'Rick Atsley',
        email: 'rickroll@gmail.com',
        add:"The Void",
        mobile: "982364535"
    }
]
let table = document.getElementById('table')
console.log(table);

let listUserRender = phoneList.map((user, index)=>{
    return `<tr>
    <td><input type="checkbox" name="check-all"></td>
    <td>${index + 1}</td>
    <td>${user.name}</td>
    <td>${user.phone}</td>
    <td>${user.email}</td>
    <td>${user.add}</td>
    <td>                        
    <i class="fas fa-pen padding-5" onclick="showFormedit()"></i>
    <i class="fas fa-trash padding-5" onclick=""></i>
    </td>
    </tr>
`

}).join('\n')
let formWrapper = document.getElementById('form-wraper')
let showForm = false
function showFormedit(){
  if  (showForm = true){
      formWrapper.innerHTML =`<form id="edit-info" onsubmit="handleSubmit()">
  <input type="text" placeholder="name">
  <input type="number" placeholder="sdt">
  <input type="email" placeholder="email">
  <input type="text" placeholder="address">
  <button type="submit" class="btn bg-aqua">UPDATE</button>
</form>
`
}
}

table.innerHTML = `
<thead class="row">
<th ><input type="checkbox" name="check-all"></th>
<th>Number</th>
<th>Name</th>
<th>Mobile</th>
<th>Email</th>
<th>Address</th>
<th>Actions</th>
</thead>
${listUserRender}
`

function handleSubmit(event){

}