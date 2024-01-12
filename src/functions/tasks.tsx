interface ITask {
    name:string
    done:boolean
}
export class TodoList {
    public tasks : ITask[];
    constructor() {
        this.tasks = [
        ];
    }

    addTask(task:string) {
        this.tasks.push({ name:task, done: false });
    }

    markTaskAsDone(task:string) {
        const foundTask = this.tasks.find(t => t.name === task);

            foundTask!.done = true;

    }

    removeTask(task:string) {
        this.tasks = this.tasks.filter(t => t.name !== task );
    }
}


