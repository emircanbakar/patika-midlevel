let posts = [
  {
    id: 1,
    title: "JavaScript'e Giriş",
    content: "JavaScript hakkında temel bilgiler.",
  },
  {
    id: 2,
    title: "React Nedir?",
    content: "React kütüphanesinin temel özellikleri.",
  },
  {
    id: 3,
    title: "Node.js ile Backend",
    content: "Node.js kullanarak backend geliştirme.",
  },
];

function displayPosts() {
  console.clear();
  console.log("---- Postlar ----");
  posts.forEach((post) => {
    console.log(`ID: ${post.id}`);
    console.log(`Başlık: ${post.title}`);
    console.log(`İçerik: ${post.content}`);
    console.log("------------------");
  });
}

function addPost(title, content) {
  const newPost = {
    id: posts.length + 1,
    title,
    content,
  };
  posts.push(newPost);
  console.log("Yeni post başarıyla eklendi!");
}

displayPosts();

addPost("Blog Oluşturma Adımları", "Blog nasıl oluşturulur, adım adım rehber.");
displayPosts();
