import { onSearch } from "./onSearch.js";

const searchForm = document.querySelector("form#search-form");

/**
 * Sets the terms of where to search from and where to display the results
 * @param {*} parentElement Where to display the results
 * @param {*} searchList Where to search from
 * @example
 * const blogPostsContainer = document.querySelector(".blogposts");
 *
 * async function app() {
 * const posts = await getPosts();
 * setSearchListeners(posts, blogPostsContainer);
 * };
 */
export function setSearchListeners(parentElement, searchList) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    onSearch(event.target.value, parentElement, searchList);
  });
}
