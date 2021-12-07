import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../constant.js'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todoList: []
    },
    mutations: {
        [Constant.Add_Todo]: (state, payload) => {
            if (payload.todo !== ''){
                for(let i = 0; i < state.todoList.length; i++) {
                    if (payload.todo === state.todoList[i].todo) {
                        alert("이미 추가한 할 일입니다.");
                        return ;
                    } 
                }

                localStorage.setItem(payload.todo, JSON.stringify({
                    todo: payload.todo,
                    done: false
                }));

                state.todoList.push({
                    todo: payload.todo,
                    done: false
                });
            } else {
                alert("할 일을 입력하세요.");
            }
        },

        [Constant.Done_Toggle]: (state, payload) => {
            state.todoList[payload.index].done = !state.todoList[payload.index].done;
            localStorage[payload.todo] = JSON.stringify({
                todo: payload.todo,
                done: state.todoList[payload.index].done
            });
        },

        [Constant.Delete_All]: (state) => {
            localStorage.clear();
            state.todoList = [];
        },

        [Constant.Delete_Todo]: (state, payload) => {
            localStorage.removeItem(payload.todo);
            state.todoList.splice(payload.index, 1);
        },

        [Constant.Show_List]: (state) => {
            for (let i = 0; i < localStorage.length; i++) {
                let localKey = localStorage.key(i);
                if (localKey === 'loglevel:webpack-dev-server') continue;

                state.todoList.push({
                    todo: localKey,
                    done: JSON.parse(localStorage[localKey]).done
                });
            }
        }
    }
});

export default store;


