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
        recordingcontent:
          "https://situla.bitbit.net/filebin/8df25326a1eccab3c0a6a358083eac7131df90c8cec3f7c95309d71d681f47bb/8e83de444d4519d43c8ff9f7113d041e13120836af488a119d9889f84148eba0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=HZXB1J7T0UN34UN512IW%2F20221123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221123T170828Z&X-Amz-Expires=30&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D30&response-content-disposition=filename%3D%22res_laugh.mp3%22&response-content-type=audio%2Fmpeg&X-Amz-Signature=4fcaedcf4ca5806bf28bcc2c16839e325060e1051db100b61c28bec16b4f9d93",
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
        recordingcontent:
          "https://situla.bitbit.net/filebin/8df25326a1eccab3c0a6a358083eac7131df90c8cec3f7c95309d71d681f47bb/cd3a975de6b8a02ba8214f2e1e5cf574cd0bffff1c3eccb0608df9c7230abfad?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=HZXB1J7T0UN34UN512IW%2F20221123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221123T170811Z&X-Amz-Expires=30&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D30&response-content-disposition=filename%3D%22res_evilLaugh.mp3%22&response-content-type=audio%2Fmpeg&X-Amz-Signature=3207a30b5798812795c9959389c9fcdcc857843914f411b145fec5a4faf32bbe",
      },
      {
        id: 8,
        likes: 0,
        author: "Mr.Krabs",
        userPicture:
          "https://nickelodeonuniverse.com/wp-content/uploads/Mr.Krabs_.png",
        time: "May 5, 2022",
        textcontent: "I went to a fancy restaurant today, did not pay.",
        imagecontent:
          "https://raw.githubusercontent.com/laurilyysi/WAD/hw2/res/krabs.jpg",
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
  mutations: {
  },
  actions: {
  },
  modules: {},
});
