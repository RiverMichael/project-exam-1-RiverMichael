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
    featuredLink.append(featuredPost);

    const featuredImage = document.createElement("img");
    featuredImage.classList.add("featured-image");
    featuredImage.src = post["_embedded"]["wp:featuredmedia"][0]["source_url"];
    featuredImage.alt = post["_embedded"]["wp:featuredmedia"][0]["alt_text"];
    featuredPost.append(featuredImage);

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("featured-title", "flex");
    featuredPost.append(titleContainer);

    const featuredTitle = document.createElement("h3");
    featuredTitle.innerText = post.title.rendered;
    titleContainer.append(featuredTitle);

    parentElement.append(featuredLink);
};

// BlogPosts Page
export function createPostHtml(post, parentElement) {
    const cardLink = document.createElement("a");
    cardLink.classList.add("card-link");
    cardLink.href = `blogpost.html?id=${post.id}`;

    const blogPostCard = document.createElement("section");
    blogPostCard.classList.add("card", "split");
    blogPostCard.id = post.id;
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

    const cardAction = document.createElement("div");
    cardAction.classList.add("card-action");
    cardContent.append(cardAction);

    const cardButton = document.createElement("a");
    cardButton.href = `blogpost.html?id=${post.id}`;
    cardButton.classList.add("cta", "card-button");
    cardButton.innerText = "view more";
    cardAction.append(cardButton);

    parentElement.append(cardLink);
};

// BlogPost Details Page
export function createPostDetailsHtml (post, parentElement) {
    const blogpost = document.createElement("div");
    blogpost.classList.add("blogpost__wrapper");

    const descriptionContainer = document.createElement("section");
    descriptionContainer.classList.add("blogpost-content");
    blogpost.append(descriptionContainer);

    const postTitle = document.createElement("h1");
    postTitle.innerText = post.title.rendered;
    descriptionContainer.append(postTitle);

    const postDescription = document.createElement("p");
    postDescription.classList.add("description");
    postDescription.innerText = post.content.rendered.match(/<p>(?:(?!<\/p>).)*<\/p>\s*(<p>(?:(?!<\/p>).)*<\/p>)?/g)[0].replace("<p>", "").replace("</p>", "").trim();
    descriptionContainer.append(postDescription);

    const imageContainer = document.createElement("section");
    imageContainer.classList.add("blogpost__image-container");
    blogpost.append(imageContainer);

    const postImage = document.createElement("img");
    postImage.classList.add("blogpost-image");
    postImage.src = post["_embedded"]["wp:featuredmedia"][0]["source_url"];
    postImage.alt = post["_embedded"]["wp:featuredmedia"][0]["alt_text"];
    imageContainer.append(postImage);

    const ingredientsContainer = document.createElement("section");
    ingredientsContainer.classList.add("ingredients", "flex");
    blogpost.append(ingredientsContainer);

    const ingredientsHeading = document.createElement("h2");
    ingredientsHeading.innerText = "Ingredients";
    ingredientsContainer.append(ingredientsHeading);

    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("flex");
    const ul = post.content.rendered.match(/<ul>([\s\S]*?)<\/ul>/)[0];
    const ulListItems = ul.match(/<li>(.*?)<\/li>/g);
    
    ulListItems.forEach( item => {
        const listItem = item.replace("<li>", "").replace("</li>", "");
        const ingredient = document.createElement("li");
        ingredient.innerText = listItem;
        ingredientsList.append(ingredient)
    });
    ingredientsContainer.append(ingredientsList);

    const instructionsContainer = document.createElement("section");
    instructionsContainer.classList.add("instructions", "flex");
    blogpost.append(instructionsContainer);
    
    const instructionsHeading = document.createElement("h2");
    instructionsHeading.innerText = "Instructions";
    instructionsContainer.append(instructionsHeading);

    const instructionsList = document.createElement("ol");
    instructionsList.classList.add("flex");
    const ol = post.content.rendered.match(/<ol>([\s\S]*?)<\/ol>/)[0];
    const olListItems = ol.match(/<li>(.*?)<\/li>/g);

    olListItems.forEach( item => {
        const listItem = item.replace("<li>", "").replace("</li>", "");
        const instruction = document.createElement("li");
        instruction.innerText = listItem;
        instructionsList.append(instruction);
    });
    instructionsContainer.append(instructionsList);

    const instructionsParagraph = document.createElement("p");
    instructionsParagraph.innerText = post.content.rendered.match(/<p>(?:(?!<\/p>).)*<\/p>\s*(<p>(?:(?!<\/p>).)*<\/p>)?/g)[1].replace("<p>", "").replace("</p>", "");
    instructionsContainer.append(instructionsParagraph);
    
    parentElement.append(blogpost);
};

// Image Modal
export function createImageModalHtml(post, parentElement) {
    const imageModal = document.createElement("img");
    imageModal.classList.add("modal-image");
    imageModal.src = post["_embedded"]["wp:featuredmedia"][0]["source_url"];
    imageModal.alt = post["_embedded"]["wp:featuredmedia"][0]["alt_text"];

    parentElement.append(imageModal);
};

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
