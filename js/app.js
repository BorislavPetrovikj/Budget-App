let budgetForm = document.querySelector("#budget-form");
let budgetInput = document.getElementById("budget-input");
let budget = document.getElementById("budget-amount");
let expenses = document.querySelector("#expense-amount");
let balance = document.getElementById("balance-amount");
let feedback = document.querySelector(".budget-feedback");
let expenseForm = document.querySelector(".expense-form");
let expenseInput = document.querySelector("#expense-input");
let amountinput = document.querySelector("#amount-input");
let tableDiv = document.querySelector(".tbInner");
let blanceDiv = document.querySelector("#balance")

budgetForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (budgetInput.value === "" || budgetInput.value < 0) {
        feedback.innerHTML = "Value cannot be empty or negative";
        feedback.style.display = "block";
        budgetInput.value = "";
    } else {
        balance.innerHTML = budgetInput.value;
        budget.innerHTML = budgetInput.value;
        let sum = budget.innerText - expenses.innerText
        balance.innerText = sum
        blanceDiv.style.color = "green"
        budgetInput.value = "";
    }

});

budgetInput.addEventListener("focus", function () {
    feedback.style.display = "none";
});

let table = null;
let count = 0;

expenseForm.addEventListener("submit", function (e) {
    e.preventDefault(e);
    count++;
    if (tableDiv.innerHTML === "") {
        table = document.createElement("table")
        tableDiv.appendChild(table)
        let tr = document.createElement("tr")
        table.appendChild(tr)
        let th = document.createElement("th")
        tr.appendChild(th)
        th.innerText = "Expense title"
        th.style.fontSize = "28px"
        th.style.paddingLeft = "78px"
        let th1 = document.createElement("th")
        tr.appendChild(th1)
        th1.innerText = "Expense value"
        th1.style.fontSize = "28px"
        th1.style.paddingLeft = "160px"
        let th2 = document.createElement("th")
        tr.appendChild(th2)
    }
    if (amountinput.value === "" || amountinput.value < 0) {
        // expenses.innerText = 0
    } else {
        expenses.innerText = parseInt(expenses.innerText) + parseInt(amountinput.value);
        let sum = parseInt(balance.innerText) - parseInt(amountinput.value);
        balance.innerText = sum;
        let tr = document.createElement("tr")
        table.appendChild(tr)
        let td = document.createElement("td")
        tr.appendChild(td)
        td.innerText = expenseInput.value;
        td.style.fontSize = "24px"
        td.style.padding = "35px 0px 0px 115px";
        td.style.color = "red";
        let td1 = document.createElement("td")
        td1.style.fontSize = "24px"
        td1.style.padding = "35px 0px 0px 236px";
        td1.style.color = "red";
        tr.appendChild(td1)
        td1.innerText = amountinput.value
        let td2 = document.createElement("td")
        td2.setAttribute("id", "value" + count)
        tr.appendChild(td2)
        let btnEdit = document.createElement("button")
        td2.appendChild(btnEdit)
        btnEdit.classList.add("btn", "fa-edit", "fas");
        btnEdit.style.marginLeft = "210px"
        btnEdit.style.marginTop = "31px"
        btnEdit.style.color = "blue"
        let btnDelete = document.createElement("button")
        td2.appendChild(btnDelete)
        btnDelete.classList.add("btn", "fa-trash", "fas");
        btnDelete.setAttribute("id", "btn" + count)
        btnDelete.style.color = "red"
        btnDelete.style.marginTop = "31px"
        btnDelete.addEventListener("click", function (e) {
            let tableRow = e.target.parentElement.parentElement;
            let amount = parseInt(tableRow.querySelectorAll("td")[1].innerHTML);
            balance.innerText = parseInt(balance.innerText) + amount;
            expenses.innerText = parseInt(expenses.innerText) - amount;
            tableRow.remove();
        });
        btnEdit.addEventListener("click", function (e) {
            let tableRow = e.target.parentElement.parentElement;
            let expenseTitle = tableRow.querySelectorAll("td")[0].innerHTML;
            let amount = parseInt(tableRow.querySelectorAll("td")[1].innerHTML);
            balance.innerText = parseInt(balance.innerText) + amount;
            expenses.innerText = parseInt(expenses.innerText) - amount;
            console.log(expenseTitle)
            expenseInput.value = expenseTitle;
            amountinput.value = amount;
            tableRow.remove();
        });
        expenseInput.value = "";
        amountinput.value = "";
    }
});






