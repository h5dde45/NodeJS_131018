new Vue({
    el: "#app",
    data: {
        tasks: [
            {
                text: "qwe",
                isCompleted: false
            },
            {
                text: "sad",
                isCompleted: false
            },
            {
                text: "zxc",
                isCompleted: true
            }
        ],
        currentTask: "",
        editValue: "",
        isEditing: false
    },
    computed: {},
    methods: {
        addTask(){
            this.tasks.push({
                text: this.currentTask,
                isCompleted: false
            });
            this.currentTask = ""
        },
        removeTask(taskText){
            this.tasks = this.tasks.filter(
                task => {
                    return task.text != taskText;
                }
            )
        },
        changeEdit(taskText){
            this.editValue = taskText;
            this.tasks = this.tasks.map(
                task => {
                    if (task.text === taskText) {
                        task.isEditing = !task.isEditing
                    }
                    return task;
                }
            )
        },
        editTask(taskText){
            this.tasks = this.tasks.map(
                task => {
                    if (task.text === taskText) {
                        task.isEditing = !task.isEditing;
                        task.text=this.editValue;
                    }
                    return task;
                }
            )
        },
    }
});
