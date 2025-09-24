const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src= "${user.avatarUrl}" alt="Foto do perfil do usuário" />
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 🥲'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 🥲'}</p>
                                <p>👥 Seguidores: ${user.followers}</p>
                                <p>➡️ Seguindo: ${user.following}
                            </div>
                         </div>`;

        if (user.repositories.length > 0) {
            let repositoriesItens = '';
            user.repositories.forEach(repo => {
                repositoriesItens += `
          <div class="repo-card">
            <a href="${repo.html_url}" target="_blank" class="repo-name">
              ${repo.name}
                <div>
                  <span>⭐ ${repo.stargazers_count ?? 'N/A'}</span>
                  <span>🍴 ${repo.forks_count ?? 'N/A'}</span>
                  <span>👀 ${repo.watchers_count ?? 'N/A'}</span>
                  <span>💻 ${repo.language ?? 'N/A'}</span>
                </div>
            </a>
          </div>`;
            });

            this.userProfile.innerHTML += `
        <div class="repositories section">
          <h2>Repositórios</h2>
          <ul class="repositories-container">
            ${repositoriesItens}
          </ul>
        </div>`;
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }