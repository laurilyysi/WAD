<template>
  <Header />

  <div class="contentBox">
    <div class="flex-container">
      <h2>A post</h2>
      <div>
          <p>Body</p><textarea id="postBody" name="postBody" rows="3" cols="40"></textarea>
      </div>
      <div>
        <button class="button" type="button" onclick="">Update</button>
        <button class="button" type="button">Delete</button>
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
  components: {
    Header,
    Footer,
  },
};
</script>

<style>

.contentBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
}
.flex-container {
  display: flex;
  background-color: #a3d3c3;
  border: 5px solid #8cd49e;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 20px;
  text-align: center;
}

.button {
    margin-top: 10px;
  background-color: #ff808b;
  color: white;
  border: 2px solid #ffd389;
}

.button:last-child {
    margin-left: 50px;
}

.reWriteFooterPos{
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}

textarea {
    resize: vertical;
}

@media (max-width: 600px) {
  .flex-container,
  textarea,
  .contentBox {
    max-width: 85%;
  }

  textarea {
    max-width: 60%;
  }
}

</style>