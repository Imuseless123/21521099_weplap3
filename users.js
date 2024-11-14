document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch user data from JSONPlaceholder API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        const userList = document.getElementById("user-list");

        // Display users with name and email
        function displayUsers(filteredUsers) {
            userList.innerHTML = "";
            filteredUsers.forEach(user => {
                const listItem = document.createElement("li");
                listItem.textContent = `${user.name} - ${user.email}`;
                userList.appendChild(listItem);
            });
        }

        // Initial display of all users
        displayUsers(users);

        // Filter users based on search input
        document.getElementById("search-box").addEventListener("input", event => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredUsers = users.filter(user =>
                user.name.toLowerCase().includes(searchTerm)
            );
            displayUsers(filteredUsers);
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
    }
});
