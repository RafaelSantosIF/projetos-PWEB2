import profilePic from './profile-pic.jpg';
import './perfil.css';

let followersCount = 532;
let followingCount = 367;

export function setupProfileCounters(followersElement, followingElement) {
  followersCount = parseInt(followersElement.textContent) || 0;
  followingCount = parseInt(followingElement.textContent) || 0;
}

export function profile() {
  const profileElement = document.createElement('div');
  profileElement.className = 'profile';
  profileElement.innerHTML = `
    <h2 class="profile-name">Professora Lilie</h2>
    <h3 class="profile-username">@lilie.edu</h3>
    <p class="profile-bio">Apaixonada por literatura e educação. Compartilhando conhecimento e inspiração.</p>
    <p class="profile-location">Localização: Xique-Xique, Bahia</p>
    <img src="${profilePic}" alt="Profile Picture" id="profile-pic" />
    <span class="profile-followers">Seguidores: <span id="followers">${followersCount}</span></span>
    <span class="profile-following">Seguindo: <span id="following">${followingCount}</span></span>
    <button id="follow-button">Seguir</button>
    
  `;
  return profileElement;
}