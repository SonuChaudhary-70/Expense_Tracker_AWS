const express = require('express')
const router = express.Router();
const expenseController = require('../controller/expense.js');
const paginationMiddleware = require('../middleware/pagination.js')


// add-expense routes
router.post('/add-expense',authenticationMiddleware.authenticate, expenseController.addExpense);

// get all expense
router.get('/get-expenses',authenticationMiddleware.authenticate, expenseController.getAllExpenses);

// get expense by id
router.get('/get-expense/:id',authenticationMiddleware.authenticate, expenseController.getExpenseById);


// get only 5 expense on per call
router.get('/limited-expense',authenticationMiddleware.authenticate, paginationMiddleware.pagination, expenseController.getLimitedExpense)

// delete expense by id
router.delete('/delete-expense/:id',authenticationMiddleware.authenticate, expenseController.deleteExpense);

// update expense by id
router.put('/update-expense/:id',authenticationMiddleware.authenticate, expenseController.updateExpense);

module.exports = router;