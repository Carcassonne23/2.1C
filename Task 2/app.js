const app = Vue.createApp({
    data() {
        return {
            ready: false, // Initial value for the toggle
            newTodo: '',
            todos: [] // Initialize your todos array here
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() === '') return;
            this.todos.push({ text: this.newTodo, done: false });
            this.newTodo = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
});

app.component('todo-list', {
    props: ['todos'],
    template: `
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ 'completed': todo.done }">{{ todo.text }}</span>
                <button @click="removeTodo(index)">&#x1F5D1</button>
            </li>
        </ul>
    `,
    methods: {
        removeTodo(index) {
            this.$emit('remove', index);
        }
    }
});

app.mount('#todo'); // Mount the app on the '#todo' element