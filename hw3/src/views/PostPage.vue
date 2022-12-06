<template>
  <Header />
  <button v-on:click="test(11)">Test</button>
  <Post v-for="post in posts" :key="post.id" :post="post"></Post>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

export default {
  name: "PostPage",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
        posts: [],
    }
  },
  methods: {
    test(postId) {
      console.log("Ok");
    },
  },
};
</script>

<style>
</style>