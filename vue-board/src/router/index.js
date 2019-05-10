import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  // read를 메인에 구현
      name: 'Read', 
      component: Read
    },
    {
      // ?를 붙이면 contentId가 있으면 보여주고 없어도 보여줌
      path: '/create/:contentId?', // /create 경로에 글쓰기기능
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId', // /detail 페이지 ( 파라미터가 들어갈 자리: contentId )
      name: 'Detail',
      component: Detail
    }, 
  ]
})
