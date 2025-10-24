const updateButton = document.getElementById("updateButton");
const usersTable = document.getElementById("usersTable");
const tbody = usersTable.querySelector("tbody");

function loadUsers() {
    tbody.innerHTML = '<tr><td colspan="3" class="loading">Chargement...</td></tr>';
    
    fetch("users.php")
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = "";
            
            if (data.error) {
                tbody.innerHTML = '<tr><td colspan="3" class="error">' + data.error + '</td></tr>';
                return;
            }
            
            if (data.length === 0) {
                tbody.innerHTML = '<tr><td colspan="3" class="loading">Aucun utilisateur trouvé</td></tr>';
                return;
            }
            
            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.firstname} ${user.lastname}</td>
                    <td>${user.email}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Erreur :", error);
            tbody.innerHTML = '<tr><td colspan="3" class="error">Erreur lors du chargement des données</td></tr>';
        });
}

updateButton.addEventListener("click", loadUsers);

loadUsers();