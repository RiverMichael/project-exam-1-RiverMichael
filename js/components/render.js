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

export async function getApi(url) {
    const response = await fetch (url);
    const results = await response.json();
    totalPages = parseInt(response.headers.get('X-WP-TotalPages'));
    return results;
};

export async function getFeaturedPosts() {
    return await getApi(postsURL);
};

export async function getPosts(currentPage, postsPerPage) {
    return await getApi(postsURL + `&page=${currentPage}&per_page=${postsPerPage}`);
};

export async function getPostDetails() {
    return await getApi(postDetailsURL);
};

export function renderFeaturedPosts(posts, parentElement) {
    posts.forEach(post => {
        createFeaturedPostHtml(post, parentElement);
    });
};

export function renderPosts(posts, parentElement) {
    posts.forEach(post => {
        createPostHtml(post, parentElement);
    })
};

export function renderPostDetails(post, parentElement) {
    return createPostDetailsHtml(post, parentElement);
};
