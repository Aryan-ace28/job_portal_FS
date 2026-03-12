let expenses = [];
let editIndex = -1;

function addExpense(){

let name = document.getElementById("name").value;
let amount = document.getElementById("amount").value;
let category = document.getElementById("category").value;

if(name === "" || amount === ""){
alert("Please enter all fields");
return;
}

let expense = {
name:name,
amount:parseFloat(amount),
category:category
};

expenses.push(expense);

displayExpenses();
calculateTotal();

document.getElementById("name").value = "";
document.getElementById("amount").value = "";
}

function displayExpenses(){

let table = document.getElementById("expenseTable");

table.innerHTML = `
<tr>
<th>Name</th>
<th>Amount</th>
<th>Category</th>
<th>Action</th>
</tr>
`;

expenses.forEach((exp,index)=>{

table.innerHTML += `
<tr>
<td>${exp.name}</td>
<td>₹${exp.amount}</td>
<td>${exp.category}</td>
<td>
<button onclick="editExpense(${index})">Edit</button>
<button onclick="deleteExpense(${index})">Delete</button>
</td>
</tr>
`;

});

}

function deleteExpense(index){

expenses.splice(index,1);

displayExpenses();
calculateTotal();

}

function editExpense(index){

let exp = expenses[index];

document.getElementById("name").value = exp.name;
document.getElementById("amount").value = exp.amount;
document.getElementById("category").value = exp.category;

editIndex = index;

}

function updateExpense(){

if(editIndex === -1){
alert("Select an expense to update");
return;
}

let name = document.getElementById("name").value;
let amount = document.getElementById("amount").value;
let category = document.getElementById("category").value;

expenses[editIndex] = {
name:name,
amount:parseFloat(amount),
category:category
};

editIndex = -1;

displayExpenses();
calculateTotal();

}

function calculateTotal(){

let total = 0;

expenses.forEach(exp=>{
total += exp.amount;
});

document.getElementById("total").innerText = total;

}