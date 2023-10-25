const Task = require('../model/TaskModel')





exports.addTask = (async (req, res) => {
    try {
        const { title, description } = req.body

        console.log(req.body)
        const task = await Task.create({
            title, description
        })
        if (task) {
            res.status(200).json({ success: true, message: "task added successfully", task: task })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        })
    }

})

exports.getTask = (async (req, res) => {
    try {
        console.log(req.body)
        const task = await Task.find()
        res.status(200).json({
            success: true,
            task: task
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })

    }
})

exports.markTaskAsComplete = async (req, res) => {
    try {
        console.log(req.params.id)
        await Task.updateOne({ _id: req.params.id }, { isCompleted: true })
        res.status(200).json({
            success: true,
            message: "task updated successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })

    }
}

exports.updateTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        let updateData = { title, description };

        await Task.updateOne({ _id: req.params.id }, updateData);

        res.status(200).json({
            success: true,
            message: "task updated successfully"
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

exports.deleteTask = (async (req, res) => {
    try {
        const task = await Task.deleteOne({ _id: req.params.id })
        console.log(task)
        if (task.deletedCount) {
            res.status(200).json({
                success: true,
                message: "task deleted successfully"
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })

    }

})