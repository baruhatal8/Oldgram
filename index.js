const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735", 
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const likes = document.querySelector(".likes");
const like =  document.querySelector(".like");


  
  let container = document.querySelector("main");
  function createPostHTML() {
  let list = ""; // Инициализируем переменную вне цикла
  
  posts.forEach((item,index) => {
    list += `
      <section class="user">
        <section class="title">
          <img src="${item.avatar}" alt="mini" class="mini">
          <section class="info">
            <h3 class="font nick">${item.name}</h3>
            <h4 class="font point">${item.location}</h4>
          </section>
        </section>
        <img src="${item.post}" alt="post" class="post">
        <section class="social">
        <img src="images/icon-heart.png" alt="like" class="icon like" id="like-${index}">
          <img src="images/icon-comment.png" alt="comment" class="icon comment">
          <img src="images/icon-dm.png" alt="share" class="icon share">
        </section>
        <h4 class="likes" id="likes-${index}">${item.likes} Likes</h4>
        <p class="subs"><span class="username">${item.username}</span> ${item.comment}</p>
      </section>
    `;

   
   
  });
  
  container.innerHTML = list; // Добавляем весь HTML в контейнер после формирования списка  
  addLikeEventListeners();
}

function addLikeEventListeners() {
  posts.forEach((item, index) => {
    let likeIcon = document.getElementById(`like-${index}`);
    likeIcon.addEventListener("click", () => {
      item.likes++;
      document.getElementById(`likes-${index}`).textContent = `${item.likes} Likes`;
    });
  });
}

createPostHTML();