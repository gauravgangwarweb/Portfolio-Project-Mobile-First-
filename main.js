const toggle = document.getElementById('menupng');
const cros = document.getElementById('closeMenu');
const resMenu = document.getElementById('responsive-menu');

function openMenu() {
  resMenu.style.display = 'flex';
}

function closeMenu() {
  resMenu.style.display = 'none';
}

toggle.addEventListener('click', openMenu);
cros.addEventListener('click', closeMenu);
resMenu.addEventListener('click', closeMenu);

const objItems = [
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    crossImg: ['./assets/union.svg'],
    projImg: ['./assets/Rectangle 21.svg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    link: { href: '#', value: 'See Project' },
    githubLink: { href: '#', value: '#' },
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    crossImg: ['./assets/union.svg'],
    projImg: ['./assets/Rectangle 46.svg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    link: { href: '#', value: 'See Project' },
    githubLink: { href: '#', value: '#' },
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    crossImg: ['./assets/union.svg'],
    projImg: ['./assets/Rectangle 25.svg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    link: { href: '#', value: 'See Project' },
    githubLink: { href: '#', value: '#' },
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    crossImg: ['./assets/union.svg'],
    projImg: ['./assets/Rectangle 27.svg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    link: { href: '#', value: 'See Project' },
    githubLink: { href: '#', value: '#' },
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    crossImg: ['./assets/union.svg'],
    projImg: ['./assets/Rectangle 26.svg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    link: { href: '#', value: 'See Project' },
    githubLink: { href: '#', value: '#' },
  },
  {
    title: 'Project name goes here',
    tech: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    crossImg: ['./assets/union.svg'],
    projImg: ['./assets/Rectangle 47.svg'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    link: { href: '#', value: 'See Project' },
    githubLink: { href: '#', value: '#' },
  },
];

const popUp = document.getElementById('prjpopUp');
const section = document.createElement('section');
const allBtns = document.querySelectorAll('.prjButton');
const hideAll = document.querySelectorAll('section');

allBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const prjDet = objItems[temp - 1];
    section.innerHTML = `
<div class="popupWin">
  <div class="popupHead">
    <h2>${prjDet.title}</h2>
    <img id="closeBtn" src="${prjDet.crossImg}" alt="">
  </div>
  <div class="prjTech">
    <button>${prjDet.tech[0]}</button>
    <button>${prjDet.tech[1]}</button>
    <button>${prjDet.tech[2]}</button>
  </div>
  <div class="prjImg">
    <img src="${prjDet.projImg}" alt="project">
  </div>
  <div class="prjDesc">
    <div class="prjDesc1">
      <p>${prjDet.description}</p>
    </div>
    <div class="buttons">
      <a href="${prjDet.link}">
        <button>
          <span>See live</span>
          <img src="./assets/Union1.svg" alt="">
        </button>
      </a>
      <a href="${prjDet.githubLink}">
        <button>
          <span>See source</span>
          <img src="./assets/ic_github_white.svg" alt="">
        </button>
      </a>
    </div>
    <div class="footerBtn">
      <button>
        <img src="./assets/ic_arrow_left.svg" alt="">
        <span>Preveious Project</span>
      </button>
      <button>
        <span>Next Project</span>
        <img src="./assets/ic_arrow_right.svg" alt="">
      </button>
    </div>
  </div>

</div>
  `;
    popUp.appendChild(section);
    hideAll.forEach((i) => i.classList.toggle('hideSec'));
    const cloBtn = document.getElementById('closeBtn');
    cloBtn.addEventListener('click', () => {
      popUp.removeChild(section);
      hideAll.forEach((i) => i.classList.toggle('hideSec'));
    });
  });
});

// form validation
const form = document.getElementById('form');
const input = document.getElementById('email');
const errorMsg = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value.trim();
  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(email)) {
    errorMsg.textContent = 'Email should be in lower case only';
  } else {
    form.submit();
  }
});
