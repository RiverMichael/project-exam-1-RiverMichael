import { clearHtml } from "./createHtml.js";
import { renderPosts } from "./render.js";
import { createMessage } from "./createMessage.js";

/**
 * Filters a search and displays the result
 * @param {*} value The search input
 * @param {*} parentElement Where to display the result
 * @param {*} postsList The list of posts to search from
 * @returns Displays the filtered list in HTML
 */
export function onSearch(value, parentElement, postsList) {
  const filteredPostsList = filterPostsOnSearch(postsList, value);

  if (filteredPostsList.length) {
    clearHtml(parentElement);
    renderPosts(filteredPostsList, parentElement);
  } else {
    clearHtml(parentElement);
    createMessage(parentElement, "error", "No posts found by the search");
  }
}

/**
 * Filters a list of posts
 * @param {*} posts The list of posts to filter
 * @param {*} term What term to filter by
 * @returns A filtered list
 */
function filterPostsOnSearch(posts, term) {
  return posts.filter(function (post) {
    term = term.toLowerCase().trim();
    const valuesToCheck = [post.title.rendered];

    const matchingValues = valuesToCheck.filter(function (value) {
      value = value.toLowerCase().trim();
      return value.includes(term);
    });

    return matchingValues.length;
  });
}
