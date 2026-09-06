import profilePic from './profile-pic.jpg';
import pet from './pet.png';
import coruja from './coruja.mp3';
import loc from '../../assets/loc.png';
import message from '../../assets/message.png';
import messageHover from '../../assets/message_hover.png';
import back_white from '../../assets/back_white.png';
import menu from '../../assets/menu.png';
import like from '../../assets/like.png';
import liked from '../../assets/liked.png';
import './perfil.css';

let name = 'Professora Lilie';
let username = '@lilie.edu';
let bio = 'Letras - UFBA. <br> Apaixonada por literatura e educação. Compartilhando conhecimento e inspiração. <br> Cursos: <a href="" target="_blank">linktr.ee/lilie.edu</a>';
let location = 'Xique-Xique, Bahia';
let petName = 'Edwiges';
let followersCount = 532;
let followingCount = 367;
let likesCount = 125;
let isFollowing = false;
let isLiked = false;

export function setupProfileCounters(followersElement, followingElement) {
  followersCount = parseInt(followersElement.textContent) || 0;
  followingCount = parseInt(followingElement.textContent) || 0;
}

export function profile() {
  const profileElement = document.createElement('div');
  profileElement.className = 'profile';
  profileElement.innerHTML = `
    <button id="back-button" type="button" aria-label="Voltar">
      <img src="${back_white}" alt="" id="back-icon" />
    </button>
    <button id="menu-button" type="button" aria-label="Menu">
      <img src="${menu}" alt="" id="menu-icon" />
    </button>
    <h2 class="profile-name">${name}</h2>
    <div class="profile-meta">
      <h3 class="profile-username">${username}</h3>
      <div class="profile-location-row">
        <img src="${loc}" alt="" class="profile-location-icon" />
        <p class="profile-location">${location}</p>
      </div>
    </div>
    <div class="profile-bio-container">
      <p class="profile-bio">${bio}</p>
    </div>
    <img src="${profilePic}" alt="Profile Picture" id="profile-pic" />       
    <div class="profile-pet">
      <img src="${pet}" alt="Pet Icon" id="pet-icon" />
      <p class="pet-name">${petName}</p>
      <div class="pet-actions">
        <button id="like-button" type="button" aria-label="Curtir">
          <img src="${like}" alt="" id="like-icon" />
        </button>
        <span class="likes-count"><span id="likes">${likesCount}</span></span>
      </div>
    </div>
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
  const likeButton = profileElement.querySelector('#like-button');
  const likesElement = profileElement.querySelector('#likes');
  const likeIcon = profileElement.querySelector('#like-icon');
  const piu = new Audio(coruja); 

  followButton.addEventListener('click', () => {    
    if (!isFollowing) {
      isFollowing = true;
      followersCount += 1;
      followersElement.textContent = followersCount;
      followButton.textContent = 'Seguindo';
      followButton.classList.add('is-following');
    } else {
      isFollowing = false;
      followersCount -= 1;
      followersElement.textContent = followersCount;
      followButton.textContent = 'Seguir';
      followButton.classList.remove('is-following');
    }
  });

  likeButton.addEventListener('click', () => {
    if (!isLiked) {
      isLiked = true;
      likesCount += 1;
      likesElement.textContent = likesCount;
      likeIcon.src = liked;
      piu.play();
    } else {
      isLiked = false;
      likesCount -= 1;
      likesElement.textContent = likesCount;
      likeIcon.src = like;
    }
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