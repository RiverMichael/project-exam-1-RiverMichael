import { totalPages, getPosts, renderPosts } from "./components/render.js";
import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";
import { setSearchListeners } from "./components/setSearchListeners.js";

const blogPostsContainer = document.querySelector(".cardcontainer__wrapper");
const loadPostsButton = document.querySelector(".blog-action button");
const messageContainer = document.querySelector(".message");
const sortSelect = document.querySelector("#sort");

let currentPage = 1;
let postsPerPage = 10;
let postsToSort;

sortSelect.addEventListener("change", sortPosts);
loadPostsButton.addEventListener("click", showMorePosts);

async function blogPosts() {
  try {
    const posts = await getPosts(currentPage, postsPerPage);
    postsToSort = posts;

    clearHtml(blogPostsContainer);
    renderPosts(posts, blogPostsContainer);
    setSearchListeners(blogPostsContainer, postsToSort);
    loadPostsButton.style.display = "block";
  } catch (error) {
    console.log(error);
    clearHtml(blogPostsContainer);
    createMessage(blogPostsContainer, "error", "There was an error while loading the posts, please try again");
  }
}
blogPosts();

// Load More Blog Posts
async function showMorePosts() {
  try {
    if (currentPage < totalPages) {
      currentPage++;
      const posts = await getPosts(currentPage, postsPerPage);

      posts.forEach((post) => {
        postsToSort.push(post);
      });

      renderPosts(posts, blogPostsContainer);
    }
    if (currentPage === totalPages) {
      loadPostsButton.style.display = "none";
    }
  } catch (error) {
    console.log(error);
    clearHtml(messageContainer);
    createMessage(messageContainer, "error", "There was an error while loading the posts, please try again");
  }
}

// // Sort Blog Posts
function sortPosts(event) {
  const selected = event.target.value;

  if (selected === "newest") {
    postsToSort = postsToSort.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (selected === "oldest") {
    postsToSort = postsToSort.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (selected === "name-az") {
    postsToSort = postsToSort.sort((a, b) => a.title.rendered.localeCompare(b.title.rendered));
  } else if (selected === "name-za") {
    postsToSort = postsToSort.sort((a, b) => b.title.rendered.localeCompare(a.title.rendered));
  }

  clearHtml(blogPostsContainer);
  renderPosts(postsToSort, blogPostsContainer);
}
