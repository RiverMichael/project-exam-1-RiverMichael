import { clearHtml } from "./createHtml.js";
import { renderPosts } from "./render.js";
import { createMessage } from "./createMessage.js";

export function onSearch(value, parentElement, postsList) {
    const filteredPostsList = filterPostsOnSearch(postsList, value);

    if (filteredPostsList.length) {
        clearHtml(parentElement);
        renderPosts(filteredPostsList, parentElement);
    } else {
        clearHtml(parentElement);
        createMessage(parentElement, "error", "No posts found by the search");
    };
};

function filterPostsOnSearch(posts, term) {
    return posts.filter(function(post) {
        term = term.toLowerCase().trim();
        const valuesToCheck = [post.title.rendered];

        const matchingValues = valuesToCheck.filter(function(value) {
            value = value.toLowerCase().trim();
            return value.includes(term);
        });

        return matchingValues.length;
    });
};
