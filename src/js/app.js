const fetchUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const usersContainer = document.getElementById('users-container');

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            userCard.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <div class="address">
                    <p><strong>Address:</strong></p>
                    <p>${user.address.street}, ${user.address.city}</p>
                </div>
            `;

            usersContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

fetchUsers();
