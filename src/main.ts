import feather from 'feather-icons';

window.addEventListener('DOMContentLoaded', () => {
  feather.replace();
});

const projects = [
  {
    title: "Cartoon quiz",
    description: "A school project and my first group collaboration using TypeScript. It’s a fun, interactive quiz themed around classic cartoons.", 
    techStack: ['HTML', 'JavaScript', 'TypeScript', 'SCSS', 'Prettier', 'EsLint', 'Vite'],
    liveUrl: "https://matildasoderhall.github.io/cartoon-quiz/",
    githubUrl: "https://github.com/matildasoderhall/cartoon-quiz",
    img: {
      url: './src/images/cartoon_quiz.jpg',
      width: '1600',
      height: '1066',
      alt: ''
    }
  },
  {
    title: "Donut webshop",
    description: "Gotfrids Munkfabrik is a fictional donut shop created for a school project. It was my first project using JavaScript, focusing on basic interactivity and DOM manipulation.", 
    techStack: [ 'html', 'js', 'scss' ],
    liveUrl: "https://matildasoderhall.github.io/donut-webshop/",
    githubUrl: "https://github.com/matildasoderhall/donut-webshop",
    img: {
      url: './src/images/donut_webshop.jpg',
      width: '2416',
      height: '1496',
      alt: ''
    }
  },
  {
    title: 'Reptilicious',
    description: "Reptilicious is a fictional candy brand with jungle-inspired flavors. Built with Vue.js, this project focused on implementing routing to bring another group’s design to life.", 
    techStack: ['Node.js', 'Vue', 'Vue Router', 'Vite', 'Npm', 'Eslint', 'Prettier', 'TypeScript', 'Scss'],
    liveUrl: "https://matildasoderhall.github.io/reptilicious/",
    githubUrl: "https://github.com/matildasoderhall/reptilicious",
    img: {
      url: './src/images/reptilicious.jpg',
      width: '1494',
      height: '996',
      alt: ''
    }
  },
  // {
  //   title: "",
  //   description: "", 
  //   techStack: [],
  //   liveUrl: "",
  //   githubUrl: "",
  //   img: {
  //     url: './src/images/',
  //     width: '',
  //     height: '',
  //     alt: ''
  //   }
  // },
]

const projectsContainer = document.querySelector('#projects-container');

projects.forEach(project => {
  const card = document.createElement("article");
  card.className = "project-card";

  card.innerHTML = `
    <div class="img-container">
      <img src="${project.img.url}">
    </div>
    <div class="content-container">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul>
        ${(project.techStack as string[]).map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
      <div class="buttons">
        <a href="${project.liveUrl}" target="_blank"><button>Live Site</button></a>
        <a href="${project.githubUrl}" target="_blank"><button>GitHub</button></a>
      </div>
    </div>
  `;

  projectsContainer!.appendChild(card);
});