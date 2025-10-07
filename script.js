const postList = document.getElementById("postList");
const fetchButton = document.getElementById("fetchButton");
const submitButton = document.getElementById("submit-button");
const titleInput = document.getElementById("titleInput");
const bodyInput = document.getElementById("bodyInput");

// GET request to retrieve posts 
fetchButton.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response) {
        return response.json(); // converts response to JSON
    })
    .then(function(data) {
        console.log(data);
        return data;
    })
    .then(function(data) { // loop through data, inject text into body of HTML
        for (let post of data) {
            postList.innerHTML += `
                <h3>${post.title}</h3>
                <p>${post.body}</p> 
            `;
        }
    })
});

// POST method
submitButton.addEventListener("click", function() {
    // grab user inputs
    let postObj = `{
        "title": ${titleInput.value},
        "body": ${bodyInput.value}
    }`;
    let postBody = JSON.stringify(postObj);
    
    // send user inputs to API
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", 
        body: postBody
    })

    console.log("Sending your post ...");

});
