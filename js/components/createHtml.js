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
    cardLink.href = `blogpost.html?id=${post.id}`;

    const blogPostCard = document.createElement("div");
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
    cardButton.innerText = "read more";
    cardAction.append(cardButton);

    parentElement.append(cardLink)
};

// BlogPost Details Page
export function createPostDetailsHtml (post, parentElement) {
    const blogpost = document.createElement("div");
    blogpost.classList.add("blogpost");

    const postTitle = document.createElement("h1");
    postTitle.innerText = post.title.rendered;
    blogpost.append(postTitle);

    const postDescription = document.createElement("p");
    postDescription.innerText = post.content.rendered.match(/<p>(?:(?!<\/p>).)*<\/p>\s*(<p>(?:(?!<\/p>).)*<\/p>)?/g)[0].replace("<p>", "").replace("</p>", "").trim();
    blogpost.append(postDescription);

    const postImage = document.createElement("img");
    postImage.src = post["_embedded"]["wp:featuredmedia"][0]["source_url"];
    postImage.alt = post["_embedded"]["wp:featuredmedia"][0]["alt_text"];
    blogpost.append(postImage);

    const ingredientsContainer = document.createElement("div");
    ingredientsContainer.classList.add("ingredients");
    blogpost.append(ingredientsContainer);

    const ingredientsHeading = document.createElement("h2");
    ingredientsHeading.innerText = "Ingredients";
    ingredientsContainer.append(ingredientsHeading);

    const ingredientsList = document.createElement("ul");
    const ul = post.content.rendered.match(/<ul>([\s\S]*?)<\/ul>/)[0];
    const ulListItems = ul.match(/<li>(.*?)<\/li>/g);
    
    ulListItems.forEach( item => {
        const listItem = item.replace("<li>", "").replace("</li>", "");
        const ingredient = document.createElement("li");
        ingredient.innerText = listItem;
        ingredientsList.append(ingredient)
    });
    ingredientsContainer.append(ingredientsList)

    const instructionsContainer = document.createElement("div");
    instructionsContainer.classList.add("instructions");
    blogpost.append(instructionsContainer)
    
    const instructionsHeading = document.createElement("h2");
    instructionsHeading.innerText = "Instructions";
    instructionsContainer.append(instructionsHeading);

    const instructionsList = document.createElement("ol");
    const ol = post.content.rendered.match(/<ol>([\s\S]*?)<\/ol>/)[0];
    const olListItems = ol.match(/<li>(.*?)<\/li>/g);

    olListItems.forEach( item => {
        const listItem = item.replace("<li>", "").replace("</li>", "");
        const instruction = document.createElement("li");
        instruction.innerText = listItem;
        instructionsList.append(instruction)
    });
    instructionsContainer.append(instructionsList);

    const instructionsParagraph = document.createElement("p");
    instructionsParagraph.innerText = post.content.rendered.match(/<p>(?:(?!<\/p>).)*<\/p>\s*(<p>(?:(?!<\/p>).)*<\/p>)?/g)[1].replace("<p>", "").replace("</p>", "");
    instructionsContainer.append(instructionsParagraph);
    
    parentElement.append(blogpost);
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
