<template>
    <div class="inputBox shadow"> 
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="오늘 할 일을 적으세요.">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus-square addBtn" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            newTodoItem: ""
        }
    },    
    methods: {
        addTodo: function(){
            if(this.newTodoItem == ""){
                alert("할 일을 적으세요.");
                return ;
            }
            if(this.newTodoItem !== ""){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput: function() {
            this.newTodoItem=""; //비워주기(초기화)
        }
    }
}
</script>

<style scoped>f
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #62EAC6, #32CEE6);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
