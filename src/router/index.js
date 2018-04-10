import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SkillsOverview from '@/components/skills/SkillsOverview'
import PostsOverview from '@/components/posts/PostsOverview'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/skills',
      name: 'Skills',
      component: SkillsOverview
    },
    {
      path: '/posts',
      name: 'Posts',
      component: PostsOverview
    }
  ]
})
