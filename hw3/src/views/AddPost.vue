<template>
  <Header />
  <div class="center">
    <div class="flex-container">
      <h2>Add post</h2>
      <div class="flexbox">
        <label for="postBody">
          <b>Body</b>
          <input id="postBody" name="postBody" value="body">
        </label>
      </div>
      <div class="flexbox">
        <button class="addbtn" type="button" @click="add(currentDate())">Add</button>
      </div>
    </div>
  </div>
  <div class="reWriteFooterPos">
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AddPost",
  methods: {
    currentDate() {
      const current = new Date();
      return current;
    },

    add(date) {
      const content = document.getElementById("postBody").value;

      const postInfo = {
        like: 0,
        userPicture: "https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg",
        time: date,
        textcontent: content
      }
      console.log("sending post: " + postInfo.userPicture + " " + postInfo.time + " " + postInfo.textcontent)

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postInfo)
      };

      fetch("http://localhost:3000/api/posts", requestOptions)
        .then(response => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });

      this.$router.push({ path: '/' }).then(() => this.$router.go());
    }
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.center {
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 5%;
}

.flex-container {
  display: flex;
  background-color: #a3d3c3;
  border: 5px solid #8cd49e;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 2%;
  text-align: center;
}

.flexbox {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.addbtn {
  font-size: .99em;
  background-color: lightcoral;
  padding: 10px;
  border-radius: 10px;
}

.addbtn:hover {
  background-color: #f7e948;
  color: #092747;
}

.reWriteFooterPos {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}

textarea {
  resize: vertical;
  margin: 5%;
}

@media (max-width: 600px) {

  .flex-container,
  textarea,
  .contentBox {
    max-width: 85%;
  }

  textarea {
    max-width: 70%;
  }
}
</style>