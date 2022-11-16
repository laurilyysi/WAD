import { createStore } from "vuex";

export default createStore({
  state: {
    postList: [
      {
        id: 1,
        author: "Patrick",
        userPicture:
          "https://nickelodeonuniverse.com/wp-content/uploads/Patrick.png",
        time: "Oct 22, 2022",
        textcontent: "This is spongebob!",
        imagecontent: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
