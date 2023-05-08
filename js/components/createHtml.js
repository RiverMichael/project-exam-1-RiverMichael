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
export function createPostHtml(post, parentElement) {
    const cardLink = document.createElement("a");
    cardLink.classList.add("card-link");
    cardLink.id = post.id;
    cardLink.href = `blogpost.html?id=${post.id}`;

    const blogPostCard = document.createElement("div");
    blogPostCard.classList.add("card", "split");
    cardLink.append(blogPostCard);

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    cardImage.style = `background-image: url(${post["_embedded"]["wp:featuredmedia"][0]["source_url"]})`;
    blogPostCard.append(cardImage);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content", "flex");
    blogPostCard.append(cardContent);

    const cardTitle = document.createElement("h2");
    cardTitle.innerText = post.title.rendered;
    cardContent.append(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.innerText = post.excerpt.rendered.replace("<p>", "").replace("</p>", "");
    cardContent.append(cardDescription);

    parentElement.append(cardLink)
};

// BlogPost Details Page
export function createPostDetailsHtml (post, parentElement) {};

// Subscribe Validation
export function createSubscribeValidationHtml(parentElement) {
    const validationContainer = document.createElement("div");
    validationContainer.classList.add("subscribe-success", "flex")

    const validationHeading = document.createElement("h2");
    validationHeading.innerText = "Thank you for subscribing to The Flavor Files !";
    validationContainer.append(validationHeading);

    const button = document.createElement("div");
    validationContainer.append(button);
    const buttonLink = document.createElement("a");
    buttonLink.classList.add("cta");
    buttonLink.innerText = "explore the blog";
    buttonLink.href = "blog.html";
    button.append(buttonLink);

    parentElement.append(validationContainer);
};
