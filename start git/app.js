// todo-item이라는 이름을 가진 컴포넌트를 정의
Vue.component('todo-item', { 
    props:['todo'],  // todo(prop)라는 사용자 정의 속성을 입력받을 수 있다
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: "#app-7" ,
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})