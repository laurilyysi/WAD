<template>
<div>
  <article class="border" v-for="post in postList" :key="post.id">
    <div class="postHeader">
      <img :src=post.userPicture width="30" alt="user picture" />
      <p>{{ post.time }}</p>
    </div>
    <img v-if="post.imagecontent != null" class="postPicture" :src=post.imagecontent />
    <div v-if="post.videocontent != null" class="video">
                    <iframe v-if="post.videocontent != null" :src=post.videocontent title="YouTube video player" frameborder="0"></iframe>
    </div>
    <audio v-if="post.recordingcontent != null" controls>
                        <source v-if="post.recordingcontent != null" :src=post.recordingcontent type="audio/mp3">
                    </audio>
    <p>{{ post.textcontent }}</p>
    <a class="like" href="#"><img src="https://static.wikia.nocookie.net/spongebob/images/8/84/Krabby_Patty_icon.png" width="30" alt="like button"/></a>
  </article>
  </div>
</template>

<script>
export default {

  name: "Post",
  props: ["postList"],
  data: function () {
    return {};
  },
  computed: {
    postList() {
      return this.$store.state.postList;
    },
  },
};
</script>

<style>
.flexBox{
    display: flex;
    align-items: center;
    justify-content: center;
}
.flexBox main{
    flex:1;
    align-items: center;
    
}
main{
    padding: 5%;
    align-items: center;
}
.postHeader{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
 .postPicture{
    width: 100%;
}
.userPicture{
    width: 7%;
}
.quote{
    font-style: italic;
}

article{
    background-color: #a3d3c3;
    border-radius: 5px;
    padding: 1%;
    margin: 1%;
    transition: 0.1s;
}

article:hover {
    background-color: #8de8ca;
    box-shadow: 0px 0px 15px 3px #8cd49e;
}

.video > iframe{
    position: absolute;
    width: 100%;
    height: 100%;
}
.video{
    position: relative;
    padding-bottom: 56.25%;
    margin-bottom: 1%;
}
.list > ul{
    list-style: square;

}
.list li::first-letter{
    font-size: large;
    color: yellow;
    font-weight: bold;
}

.special ~ li {
    font-weight: bold;
}

.special + li {
    color: green;
}

@media (min-width:700px){
    main{
        padding:1% 10% 1% 10%;
    }

}

@media (min-width:1000px){
    main{
        padding:1% 25% 1% 25%;
    }

}
</style>