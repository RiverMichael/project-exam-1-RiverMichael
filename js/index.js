import { getPosts, renderPosts } from "./components/render.js";
import { clearHtml, createFeaturedPostHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

// const featuredContainer = document.querySelector(".featured-container");

// async function featuredPosts() {
//     const posts = await getPosts();

//     try {
//         clearHtml(featuredContainer);

//         for (let i = 0; i < 3; i++) {
//         const post = posts[i];
//         createFeaturedPostHtml(post, featuredContainer);
//         }
//     }
//     catch (error) {
//         console.log(error);
//         createMessage(featuredContainer, "error", "There was an error while loading the posts, please try again");
//     }
// };
// featuredPosts();


  