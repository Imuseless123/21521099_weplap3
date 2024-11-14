document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch post data from JSONPlaceholder API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();

        // Calculate total number of posts
        const totalPosts = posts.length;

        // Calculate the average length of post titles
        const averageTitleLength = posts.reduce((sum, post) => sum + post.title.length, 0) / totalPosts;

        // Count the number of posts created by user ID 1
        const postsByUser = posts.filter(post => post.userId === 1).length;

        // Display results in HTML
        document.getElementById("total-posts").textContent = `Total Posts: ${totalPosts}`;
        document.getElementById("average-title-length").textContent = `Average Title Length: ${averageTitleLength.toFixed(2)}`;
        document.getElementById("posts-by-user").textContent = `Posts by User ID 1: ${postsByUser}`;
    } catch (error) {
        console.error("Error fetching post data:", error);
    }
});
