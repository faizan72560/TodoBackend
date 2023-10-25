const express = require("express")

const { addTask, getTask, deleteTask, updateTask, markTaskAsComplete } = require("../controller/taskController")

const router = express.Router()

router.route('/items').post(addTask)
router.route('/items').get(getTask)
router.route('/items/:id').delete(deleteTask)
router.route('/items/:id').put(updateTask)
router.route('/complete-items/:id').put(markTaskAsComplete)







module.exports = router