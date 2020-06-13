import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 添加路由对象
import index from '@/pages/index'
import blogIndex from '@/pages/blog-index'
import blogProject from '@/pages/blog-project'
import blogDocview from '@/pages/blog-docview'
import indexCss from '@/pages/indexCss'
import blogDoclist from '@/pages/blog-doclist'
import blogAbout from '@/pages/blog-about'
import blogHome from '@/pages/blog-home'
import blogDocs from '@/pages/blog-docs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'blogIndex',
      component: blogIndex
    },
    {
      path: '/indexCss',
      name: 'indexCss',
      component: indexCss
    },
    {
      path: '/hello',
      name: 'index',
      component: index
    },
    {
      path: '/blogProject',
      name: 'blogProject',
      component: blogProject
    },
    {
      path: '/blogDocview',
      name: 'blogDocview',
      component: blogDocview
    },
    {
      path: '/blogDocs',
      name: 'blogDocs',
      component: blogDocs
    },
    {
      path: '/blogAbout',
      name: 'blogAbout',
      component: blogAbout
    },
    {
      path: '/blogHome',
      name: 'blogHome',
      component: blogHome
    }
  ]
})
