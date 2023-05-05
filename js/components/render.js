import { createFeaturedPostHtml } from "./createHtml.js";

const api = "https://blog.michaelriver.dev/";
const postBase = "wp-json/wp/v2/posts";
const embed = "?_embed";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export const postsURL = api + postBase + embed;
const postDetailsURL = api + postBase + `/${id}` + embed;

export async function getApi(url) {
    const response = await fetch (url);
    const results = await response.json();
    return results;
};

export async function getPosts() {
    return await getApi(postsURL);
};

export async function getPostDetails() {
    return await getApi(postDetailsURL);
};

export function renderPosts(posts, parentElement) {
    posts.forEach(post => {
        createFeaturedPostHtml(post, parentElement);
    });
};

export function renderPostDetails(post, parentElement) {};
