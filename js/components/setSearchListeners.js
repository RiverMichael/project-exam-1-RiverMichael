import { onSearch } from "./onSearch.js";

const searchForm = document.querySelector("form#search-form");

/**
 * Sets the terms of where to search and where to display the results
 * @param {*} parentElement Where to display the results
 * @param {*} searchList Where to search from
 * @returns Displays the results of the search
 */
export function setSearchListeners(parentElement, searchList) {
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  searchForm.addEventListener("input", function (event) {
    onSearch(event.target.value, parentElement, searchList);
  });
}
