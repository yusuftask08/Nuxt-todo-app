import axios from 'axios'

export const MUTATIONS = {
    SET_TODO: "setTodo",
    DELETE_TODO: 'deleteTodo'
}

export const state = () => ({
    todoList: [
        {
            id: 1,
            title: 'nuxt app title'
        },
        {
            id: 2,
            title: 'vue app title'
        }
    ]
})

export const mutations = {
    [MUTATIONS.SET_TODO](state, item) {
        state.todoList.unshift(item)
    },
    [MUTATIONS.DELETE_TODO](state, id) {
        const itemIndex = state.todoList.findIndex((i) => i.id === id)
        state.todoList.splice(itemIndex, 1)
    }
}

export const getters = {
    getTodoList: (state) => state.todoList
}

