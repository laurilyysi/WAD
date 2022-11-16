import { createStore } from "vuex";

export default createStore({
  state: {
    postList: [
      {
        id: 1,
        likes: 0,
        author: "Patrick",
        userPicture:
          "https://nickelodeonuniverse.com/wp-content/uploads/Patrick.png",
        time: "Oct 22, 2022",
        textcontent: "This is spongebob!",
        imagecontent:
          "https://raw.githubusercontent.com/laurilyysi/WAD/hw2/res/spongebob.jpg",
      },
      {
        id: 2,
        likes: 0,
        author: "Squidward",
        userPicture: "https://miro.medium.com/max/1024/0*YjYX05Vdd6K8UOY8.png",
        time: "Oct 1, 2022",
        textcontent:
          '"I\'ll have you know that I stubbed my toe last week and only cried for 20 minutes." - SpongeBob. I am not impressed',
      },
      {
        id: 3,
        likes: 0,
        author: "Patrick",
        userPicture:
          "https://nickelodeonuniverse.com/wp-content/uploads/Patrick.png",
        time: "Sept 14, 2022",
        textcontent: "Check out this video I found :)",
        videocontent: "https://www.youtube.com/embed/upEVUu0rTpo",
      },
      {
        id: 4,
        likes: 0,
        author: "SpongeBob",
        userPicture:
          "https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg",
        time: "Sept 13, 2022",
        textcontent:
          "You can do whatever you set your mind to \n Be kind to everyone but not to the point of death\nYou can't spell fun without friends\nOwn your mistakes, no matter the consequences\nOur identities shouldn't be made into jokes\nFind positivity in everything you do\nNot being cool can actually be very cool\n",
      },
      {
        id: 5,
        likes: 0,
        author: "Sandy",
        userPicture:
          "https://nickelodeonuniverse.com/wp-content/uploads/Sandy.png",
        time: "Aug 5, 2022",
        textcontent: "Nothing makes me feel better than a laugh.",
        recordingcontent: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a0bb070e-adf5-429a-8fe7-cf821b91e36c/res_laugh.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221116T173910Z&X-Amz-Expires=86400&X-Amz-Signature=210744e4a9336c210214c4a3498a44db213ecb732abfbc6c5b333a72317eabdb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22res_laugh.mp3%22&x-id=GetObject",
      },
      {
        id: 6,
        likes: 0,
        author: "Gary",
        userPicture:
          "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.04.07_AM_370x230@2x.png",
        time: "May 10, 2022",
        textcontent: "Meow, meowwwwww",
      },
      {
        id: 7,
        likes: 0,
        author: "Plankton",
        userPicture:
          "https://64.media.tumblr.com/902fe7cd7c9b95d837dcc7b161a435ed/tumblr_pfsm2zLvkN1v67o1yo1_640.png",
        time: "May 10, 2022",
        textcontent: "Gotta get that secret recipe, I am hungry",
        recordingcontent: "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e1afff84-fcd9-460a-9dbe-260e20a5bdda/res_evilLaugh.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221116T173756Z&X-Amz-Expires=86400&X-Amz-Signature=049cd89a864ad7231aa9bbe4f9dde9e97f701a07481664a0e28a3325daec8c34&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22res_evilLaugh.mp3%22&x-id=GetObject",
      },
      {
        id: 8,
        likes: 0,
        author: "Mr.Krabs",
        userPicture:
          "https://nickelodeonuniverse.com/wp-content/uploads/Mr.Krabs_.png",
        time: "May 5, 2022",
        textcontent: "I went to a fancy restaurant today, did not pay.",
        imagecontent: "https://raw.githubusercontent.com/laurilyysi/WAD/hw2/res/krabs.jpg",
      },
      {
        id: 9,
        likes: 0,
        author: "SpongeBob",
        userPicture:
          "https://pbs.twimg.com/profile_images/603318855553810432/CXetbed2_400x400.jpg",
        time: "March 25, 2022",
        textcontent:
          "Anybody coming to movienight tonight? I have some games planned and some pop kelp made.",
      },
      {
        id: 10,
        likes: 0,
        author: "Gary",
        userPicture:
          "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.04.07_AM_370x230@2x.png?v=1613674653",
        time: "March 25, 2022",
        textcontent: "Meow, meow, movie, meoooooow",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
