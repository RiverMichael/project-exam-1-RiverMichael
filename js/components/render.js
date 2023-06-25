import { createFeaturedPostHtml, createPostDetailsHtml, createPostHtml } from "./createHtml.js";

const api = "https://blog.michaelriver.dev/";
const postBase = "wp-json/wp/v2/posts";
const embed = "?_embed";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postsURL = api + postBase + embed;
const postDetailsURL = api + postBase + `/${id}` + embed;

export let totalPages;

/**
 * Fetch an API call
 * @param {*} url The URL of the api to call
 * @returns The response in JSON
 * @example
 * const url = "https://blog.url.com/wp-json/wp/v2/posts";
 *
 * async function app() {
 * const posts = await getApi(url);
 * console.log(posts);
 * //Logs: The return from the API call in JSON
 * };
 */
async function getApi(url) {
  const response = await fetch(url);
  const results = await response.json();
  totalPages = parseInt(response.headers.get("X-WP-TotalPages"));
  return results;
}

/**
 * Calls the API and fetches the first 10 posts
 * @returns The first 10 blogposts
 */
export async function getFeaturedPosts() {
  return await getApi(postsURL);
}

/**
 * Calls the API and fetches posts based on a page number and a number of posts per page
 * @param {*} currentPage The page number to fetch
 * @param {*} postsPerPage How many posts to display per page
 * @returns A specific page number and the posts on that page
 * @example
 * async function app() {
 * const posts = await getPosts(1, 5);
 * console.log(posts);
 * //Logs: Page number 1 with 5 posts in JSON
 * };
 */
export async function getPosts(currentPage, postsPerPage) {
  return await getApi(postsURL + `&page=${currentPage}&per_page=${postsPerPage}`);
}

/**
 * Calls the API and fetches a specific post based on the ID param in the querystring
 * @returns The specific post in JSON
 * @example
 * async function app() {
 * const post = await getPostDetails();
 * console.log(post);
 * Logs: The specific post in JSON
 * };
 */
export async function getPostDetails() {
  return await getApi(postDetailsURL);
}

/**
 * Loops through and renders HTML for the the featured posts
 * @param {*} posts The posts to render
 * @param {*} parentElement Where to display the HTML
 * @returns Displays the HTML for the featured posts
 * @example
 * const featuredContainer = document.querySelector(".featuredposts");
 *
 * async function app() {
 * const posts = await getFeaturedPosts();
 * renderFeaturedPosts(posts, featuredContainer);
 * };
 */
export function renderFeaturedPosts(posts, parentElement) {
  posts.forEach((post) => {
    createFeaturedPostHtml(post, parentElement);
  });
}

/**
 * Loops thorugh and renders HTML for the choosen page and number of posts
 * @param {*} posts The posts to render
 * @param {*} parentElement Where to display the HTML
 * @returns Displays the HTML for the choosen posts
 * @example
 * const blogPostsContainer = document.querySelector(".blogposts");
 *
 * async function app() {
 * const posts = await getPosts(1, 5);
 * renderPosts(posts, blogPostsContainer);
 * };
 */
export function renderPosts(posts, parentElement) {
  posts.forEach((post) => {
    createPostHtml(post, parentElement);
  });
}

/**
 * Renders the HTML for a specific post
 * @param {*} post The post to render
 * @param {*} parentElement Where to display the HTML
 * @returns Displays the HTML for a specific post
 * @example
 * const postContainer = document.querySelector(".blogpost");
 *
 * async function app() {
 * post = await getPostDetails();
 * renderPostDetails(post, postContainer);
 * };
 */
export function renderPostDetails(post, parentElement) {
  return createPostDetailsHtml(post, parentElement);
}
