import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/MainPage.vue'
import Contact from '../views/Contact.vue'
import AddPost from '../views/AddPost.vue'
import LogIn from '../views/LoginPage.vue'
import PostPage from '../views/PostPage.vue'
import auth from '../auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to,from,next) => {
      let authResult = await auth.authenticated(); // does not let go to the home before authenticated
      if(!authResult){
        next('/login');
      }else{
        next();
      }
    }
  },
  {
    path: '/PostPage',
    name: 'PostPage',
    component: PostPage,
    beforeEnter: async(to,from,next) => {
      let authResult = await auth.authenticated(); // does not let go to the postpage before authenticated
      if(!authResult){
        next('/login');
      }else{
        next();
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignUpPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPost,
    beforeEnter: async(to,from,next) => {
      let authResult = await auth.authenticated(); // does not let go to the addpost page before authenticated
      if(!authResult){
        next('/login');
      }else{
        next();
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
