<template>
    <article class="border">
        <button class="onePost" v-on:click="toSinglePostView(this.post.id)">
            <div class="postHeader">
                <img class="userPicture" :src=post.userPicture alt="user picture" />
                <p>{{ post.time.substring(0, 10) }}</p>
            </div>
            <p id="text" class="text">{{ post.textcontent }}</p>
        </button>
    </article>
</template>

<script>
export default {
    name: "Post",
    props: ["post"],
    methods: {
        toSinglePostView(postId) {
            this.postID = postId;
            console.log("postID is", this.postID);
            this.$router.push({ path: '/PostPage/' + this.postID });
        },
    }
};
</script>

<style>
.text {
    text-align: left;
    padding-left: 5%;
}

button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
}

.onePost {
    width: 100%;
}

.flexBox {
    display: flex;
    align-items: center;
    justify-content: center;
}

.flexBox main {
    flex: 1;
    align-items: center;

}

main {
    padding: 5%;
    align-items: center;
}

.postHeader {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.userPicture {
    width: 10%;
}

article {
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


@media (min-width:700px) {
    main {
        padding: 1% 10% 1% 10%;
    }

}

@media (min-width:1000px) {
    main {
        padding: 1% 25% 1% 25%;
    }

}
</style>