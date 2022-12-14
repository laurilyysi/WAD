<template>
  <Header />
  <div class="flexBox">
    <aside class="leftPanel"></aside>
    <main>
      <button class="mainpagebtn" v-on:click="LogOut()">Logout</button>
      <div>
        <Post v-for="post in posts" :key="post.id" :post="post"></Post>
        <div class="bottombtns">
          <a href="#/addpost"><button class="mainpagebtn">Add post</button></a>
          <button v-if="(this.posts.length > 0)" v-on:click="deleteAll()" class="mainpagebtn">Delete all</button>
        </div>
        <div>
          <h3></h3>
        </div>
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
  name: "HomeView",

  components: {
    Header,
    Footer,
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() { // takes all posts
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },

    deleteAll() { // deletes all post on button click
      this.posts.forEach(post => {
        fetch(`http://localhost:3000/api/posts/${post.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      });;
      this.$router.push({ path: '/' }).then(() => this.$router.go()); // reloads the page after delete done

    },
    LogOut() {
      fetch("http://localhost:3000/auth/logout", {
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log('jwt removed');
          this.$router.push("/login");
        })
        .catch((e) => {
          console.log(e);
          console.log("error logout");
        });
    }
  },
  mounted() { // mounts posts to the page
    this.fetchPosts();
    console.log("mounted");
  },
};

</script>

<style>
.bottombtns {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.mainpagebtn {
  font-size: .99em;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;

}

.mainpagebtn:hover {
  background-color: #f7e948;
  color: #092747;
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: #000000;
}
</style>