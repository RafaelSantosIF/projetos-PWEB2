import profilePic from './profile-pic.jpg';
import loc from '../../assets/loc.png';
import message from '../../assets/message.png';
import messageHover from '../../assets/message_hover.png';
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
    <img src="${loc}" alt="Location Icon" class="profile-location-icon" />
    <p class="profile-location">Xique-Xique, Bahia</p>
    <img src="${profilePic}" alt="Profile Picture" id="profile-pic" />
    <div class="profile-stats">
      <span class="profile-followers">Seguidores: <span id="followers">${followersCount}</span></span>
      <span class="profile-following">Seguindo: <span id="following">${followingCount}</span></span>
    </div>
    <div class="profile-actions">
      <button id="follow-button" type="button">Seguir</button>
      <button id="message-button" type="button" aria-label="Enviar mensagem">
        <img src="${message}" alt="" id="message-icon" />
      </button>
    </div>
    
  `;

  const followButton = profileElement.querySelector('#follow-button');
  const followersElement = profileElement.querySelector('#followers');
  const messageButton = profileElement.querySelector('#message-button');
  const messageIcon = profileElement.querySelector('#message-icon');

  followButton.addEventListener('click', () => {
    followersCount += 1;
    followersElement.textContent = followersCount;
    followButton.textContent = 'Seguindo';
    followButton.classList.add('is-following');
    followButton.disabled = true;
  });

  messageButton.addEventListener('mouseenter', () => {
    messageIcon.src = messageHover;
  });

  messageButton.addEventListener('mouseleave', () => {
    messageIcon.src = message;
  });

  messageButton.addEventListener('focus', () => {
    messageIcon.src = messageHover;
  });

  messageButton.addEventListener('blur', () => {
    messageIcon.src = message;
  });

  return profileElement;
}