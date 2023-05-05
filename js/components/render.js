import { createFeaturedPostHtml } from "./createHtml.js";

export const api = "https://blog.michaelriver.dev/";
export const postBase = "wp-json/wp/v2/posts";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const postsURL = api + postBase + "&_embed";
const postDetailsURL = api + postBase + `/${id}` + "?_embed";

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
