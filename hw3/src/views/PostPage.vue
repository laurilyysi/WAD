<template>
    <Header />
    <div class="flexBox">
      <aside class="leftPanel"></aside>
      <main>
      <div>
        <Post v-for="post in posts" :key="post.id" :post="post"></Post>
        </div>
        <div>
            <button class="btn" type="button" @click="deletePost()">Delete Post</button>
            <button class="btn" type="button" @click="update()">Add</button>
        </div>
      </main>
      <aside class="rightPanel"></aside>
    </div>
    <Footer />
  </template>
  
  <script>
  // @ is an alias to /src
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Post from "@/components/Post.vue";

  export default {
    name: "PostPage",
    components: {
      Header,
      Footer,
      Post,
    },
    data() {
        return {
          posts:[],
        };
      },
    methods: {
        fetchPosts() {
        fetch(`http://localhost:3000/api/posts/${this.post.id}`)
          .then((response) => response.json())
          .then((data) => (this.posts = [data]))
          .catch((err) => console.log(err.message))
          },
        deletePost() {
            fetch(`http://localhost:3000/api/posts/${3}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
        },})
            .then((response) => response.json())
            .then((data) => (this.posts = [data]))
            .catch((err) => console.log(err.message))
            ,
            this.$router.push({path:'/'})
            
        }
    },

    mounted() {
      this.fetchPosts();
      console.log("mounted");
    },
  };
  
  </script>
  
  <style>
  
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .btn{
    font-size: .99em;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
  }
  </style>