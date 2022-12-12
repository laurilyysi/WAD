<template>
    <article class="border">
        <button v-on:click="toSinglePostView(this.post.id)">
            <div class="postHeader">
                <img class="userPicture" :src=post.userPicture alt="user picture" />
                <p>{{ post.time.substring(0, 10) }}</p>
            </div>
            <p id="text" class="text">{{ post.textcontent }}</p>
            <div class="postHeader">
                <button v-on:click="updatePostLike()"><img
                        src="https://static.wikia.nocookie.net/spongebob/images/8/84/Krabby_Patty_icon.png" width="30"
                        alt="like button" /></button>
                <p>{{ post.like }} likes</p>
            </div>
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

        updatePostLike() {
            this.post.like += 1
            fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.post),
            })
                .then((response) => {
                    console.log(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
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

.postPicture {
    width: 100%;
}

.userPicture {
    width: 15%;
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