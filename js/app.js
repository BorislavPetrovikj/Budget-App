class Expense {
	constructor(title, value) {
		this.title = title;
		this.value = value;
	}
}

let budgetFeedback = document.querySelector('.budget-feedback'),
	expenseFeedback = document.querySelector('.expense-feedback'),
	budgetForm = document.getElementById('budget-form'),
	budgetInput = document.getElementById('budget-input'),
	budgetAmount = document.getElementById('budget-amount'),
	expenseAmount = document.getElementById('expense-amount'),
	balance = document.getElementById('balance'),
	balanceAmount = document.getElementById('balance-amount'),
	expenseForm = document.getElementById('expense-form'),
	expenseInput = document.getElementById('expense-input'),
	amountInput = document.getElementById('amount-input'),
	expenseList = document.getElementById('expense-list'),
	budget = 0,
	balanceMoney = 0,
	i = 0,
	newBalance = 0,
	expenseMoney = 0,
	child = 0,
	alertMessage = document.querySelector('.budget-feedback'),
	writeExpenses = document.querySelector('.writeExpenses'),
	arr = [],
	table = document.createElement('table');
table.classList.add('table');
writeExpenses.appendChild(table);

budgetForm.addEventListener('submit', function(e) {
	e.preventDefault();

	if (budgetInput.value !== '' && budgetInput.value > 0) {
		budget = parseInt(budgetInput.value);
		budgetAmount.innerText = budget;
		balanceMoney = budget;
		balanceMoney -= expenseMoney;
		balanceAmount.innerText = balanceMoney;
		budgetInput.value = '';
	} else {
		alertMessage.innerText = `Value Cannot Be Empty Or Negative`;
		alertMessage.style.display = 'block';
	}
});

budgetInput.addEventListener('focus', function() {
	alertMessage.style.display = 'none';
});

amountInput.addEventListener('focus', function() {
	expenseFeedback.style.display = 'none';
});

expenseForm.addEventListener('submit', function(e) {
	e.preventDefault();

	if (amountInput.value !== '' && amountInput.value > 0) {
		let exp = new Expense(expenseInput.value, amountInput.value);
		arr.push(exp);
		expenseMoney += parseInt(exp.value);
		expenseAmount.innerText = expenseMoney;
		expenseInput.value = '';
		amountInput.value = '';
		balanceMoney -= exp.value;
		balanceAmount.innerText = balanceMoney;

		if (child === 0) {
			table.innerHTML = `<tr><th>Expense Title</th><th>Expense Value</th><th></th></tr>
			<tr id="item${i}"><td>${exp.title}</td><td>${exp.value}</td><td><i class="fas fa-edit edit-icon" id="${i}"></i><i class="fas fa-trash delete-icon" id="${i}"></i></td></tr>`;
			child++;
			i++;
		} else {
			table.innerHTML += `<tr id="item${i}"><td>${exp.title}</td><td>${exp.value}</td><td><i class="fas fa-edit edit-icon" id="${i}"></i><i class="fas fa-trash delete-icon" id="${i}"></i></td></tr>`;
			child++;
			i++;
		}
	} else {
		expenseFeedback.innerText = `Value Cannot Be Empty Or Negative`;
		expenseFeedback.style.display = 'block';
	}
});

window.addEventListener('click', function(e) {
	if (e.target.classList.contains('delete-icon')) {
		if (child === 1) {
			balanceMoney += parseInt(arr[e.target.id].value);
			balanceAmount.innerText = balanceMoney;
			expenseMoney -= arr[e.target.id].value;
			expenseAmount.innerText = expenseMoney;
			table.innerHTML = ``;
			child--;
		} else {
			balanceMoney += parseInt(arr[e.target.id].value);
			balanceAmount.innerText = balanceMoney;
			expenseMoney -= arr[e.target.id].value;
			expenseAmount.innerText = expenseMoney;
			e.target.parentElement.parentElement.remove();
			child--;
		}
	} else if (e.target.classList.contains('edit-icon')) {
		if (child === 1) {
			expenseInput.value = arr[e.target.id].title;
			amountInput.value = parseInt(arr[e.target.id].value);
			balanceMoney += parseInt(arr[e.target.id].value);
			balanceAmount.innerText = balanceMoney;
			expenseMoney -= arr[e.target.id].value;
			expenseAmount.innerText = expenseMoney;
			table.innerHTML = ``;
			child--;
		} else {
			expenseInput.value = arr[e.target.id].title;
			amountInput.value = parseInt(arr[e.target.id].value);
			balanceMoney += parseInt(arr[e.target.id].value);
			balanceAmount.innerText = balanceMoney;
			expenseMoney -= arr[e.target.id].value;
			expenseAmount.innerText = expenseMoney;
			e.target.parentElement.parentElement.remove();
			child--;
		}
	}
});







