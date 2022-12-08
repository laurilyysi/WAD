<template>
    <Header />
    <div class="flexBox">
      <aside class="leftPanel"></aside>
      <main>
      <div>
        <Post :key="post.id" :post="post"></Post>
        </div>
        <div class="flexbox">
          <button class="btn" type="button" @click="updatePost()">Update</button>
            <button class="btn" type="button" @click="deletePost()">Delete Post</button>
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
          post:{
            id:"",
            userPicture:"",
            time:"",
            like:"",
            textcontent:"",
            videocontent:"",
            imagecontent:"",
            recordingcontent:"",
          },
        };
      },
    methods: {

        fetchAPost(id) {
        fetch(`http://localhost:3000/api/posts/${id}`)
          .then((response) => response.json())
          .then((data) => (this.post = data))
          .catch((err) => console.log(err.message))
          },

        deletePost() {
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
              method: "DELETE",
              headers: {"Content-Type": "application/json",},
            })
            .then((response) => {
              console.log(response.data);
              this.$router.push({path: '/'}).then(()=>this.$router.go());
            })
            .catch((err) => {console.log(err.message)})
        },

        updatePost(){
          fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json",
            body: JSON.stringify(this.post),
        },})
            .then((response) => {
              console.log(response.data);
              this.$router.push({path: '/'}).then(()=>this.$router.go());
            })
            .catch((err) => console.log(err.message))   
        }
    },

    mounted() {
      this.fetchAPost(this.$route.params.id);
      console.log(this.post.like);
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
.btn:hover{
  background-color: #f7e948;
  color: #092747;
}
.flexbox{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
  </style>