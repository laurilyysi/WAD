/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggle() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function createPost(obj) {
  let article = document.createElement("article");
  article.classList.add("border");

  let div = document.createElement("div");
  div.classList.add("postHeader");

  let userPic = document.createElement("img");
  userPic.src = obj.userPicture;
  userPic.classList.add("userPicture");
  div.appendChild(userPic);

  let date = document.createElement("p");
  date.innerText = obj.time;

  div.appendChild(date);

  let paragraph = document.createElement("p");
  paragraph.innerText = obj.textcontent;

  article.appendChild(div);

  let contentImageSrc = obj.imagecontent;
  if (contentImageSrc != null) {
    let contentImage = document.createElement("img");
    contentImage.src = contentImageSrc;

    contentImage.classList.add("postPicture");
    contentImage.alt = "submitted photo";

    article.appendChild(contentImage);
  }

  let contentVideoSrc = obj.videocontent;
  if (contentVideoSrc != null) {
    let videoDiv = document.createElement("div");
    videoDiv.classList.add("video");

    let videoFrame = document.createElement("iframe");
    videoFrame.src = contentVideoSrc;
    videoFrame.title = "YouTube video player";
    videoFrame.frameborder = 0;

    videoDiv.appendChild(videoFrame);
    article.appendChild(videoDiv);
  }

  let contentRecordingSrc = obj.recordingcontent;
  if (contentRecordingSrc != null) {
    let contentRecording = document.createElement("audio");
    contentRecording.controls = true;
    let recordingSrc = document.createElement("source");
    recordingSrc.src = contentRecordingSrc;
    recordingSrc.type = "audio/mp3";

    contentRecording.appendChild(recordingSrc);
    article.appendChild(contentRecording);
  }

  let like = document.createElement("a");
  like.href = "#";
  let likeImg = document.createElement("img");
  likeImg.src = "res/like.png";
  likeImg.width = 30;
  likeImg.alt = "like button";
  like.appendChild(likeImg);

  article.appendChild(paragraph);
  article.appendChild(like);

  return article;
}

window.onload = function () {
  let onlineAddress = "http://myjson.dit.upm.es/api/bins/egs4";
  let localAddress = "posts.json"; // task 5
  let wrongAddress = "bosts.json"; // fetching from here displays an error on the page

  fetch(localAddress)
    .then((response) => response.json())
    .then((json) => {
      for (let obj of json) {
        let main = document.getElementsByTagName("MAIN")[0];
        main.appendChild(createPost(obj));
      }
    })
    .catch(err => {
      let main = document.getElementsByTagName("MAIN")[0];
      
      let article = document.createElement("article");
      article.classList.add("border");
      article.classList.add("error")

      let title = document.createElement("h2")
      title.innerText = "Failed fetching posts"

      let p = document.createElement("p");
      p.innerText = err;

      article.appendChild(title)
      article.appendChild(p);
      main.appendChild(article)

    })
};
