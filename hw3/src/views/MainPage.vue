<template>
  <Header />
  <div class="flexBox">
    <aside class="leftPanel"></aside>
    <main>
    <div>
      <Post v-for="post in posts" :key="post.id" :post="post"></Post>
      <div class="bottombtns">
        <a href="#/addpost"><button class="bottombtn">Add post</button></a>
        <button v-on:click="reset()" class="bottombtn">Reset likes</button>
        <button class="bottombtn">Delete all</button>
      </div>
      </div>
    </main>
    <aside class="rightPanel"></aside>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
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
    reset(){
      this.posts.forEach(post => {
        post.like = 0;
        fetch(`http://localhost:3000/api/posts/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
      });;
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
};

</script>

<style>
.bottombtns{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.bottombtn {
  font-size: 20px;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
}

.bottombtn:hover{
  background-color: #f7e948;
  color: #092747;
}
main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

a{
  text-decoration: none;
  color: #000000;
}
</style>