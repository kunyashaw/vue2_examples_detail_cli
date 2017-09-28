import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyList from '@/components/MyList'
import MyItem from '@/components/MyItem'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: MyList
    },
    {
      path: '/',
      component: MyList
    },
    {
      path: '/list',
      component: MyList,
      // 设置别名
      alias: '/mylist'
    },
    {
      //通过redirect实现一个重定向
      path: '/lists',
      redirect: '/list'
    },
    {
      path: '/item/:id',
      component: MyItem
    },
    {
      //异常处理 一般放在最后
      path: '*',
      component: NotFound
    }
  ]
})
