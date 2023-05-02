export function clearHtml(parentElement) {
    parentElement.innerHTML = "";
};

// Featured (carousel) Posts
export function createFeaturedPostHtml(post, parentElement) {
    const featuredLink = document.createElement("a");
    featuredLink.classList.add("featured-link");
    featuredLink.id = post.id;
    featuredLink.href = `blogpost.html?id=${post.id}`;
    
    const featuredPost = document.createElement("div");
    featuredPost.classList.add("featured-post", "flex");
    featuredLink.append(featuredPost)

    const featuredImage = document.createElement("div");
    featuredImage.classList.add("featured-image");
    featuredImage.style = `background-image: url(${post["_embedded"]["wp:featuredmedia"][0]["source_url"]})`;
    featuredPost.append(featuredImage)

    const featuredTitle = document.createElement("h3");
    featuredTitle.innerText = post.title.rendered;
    featuredPost.append(featuredTitle)

    parentElement.append(featuredLink);
};

// BlogPosts Page
export function createPostHtml(post, parentElement) {};

// BlogPost Details Page
export function createPostDetailsHtml (post, parentElement) {};
