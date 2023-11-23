const projectsDisplay = document.querySelector('#projects');
//newest first
const myProjects = [
    'library',
    'dashboard',
    'sign-up-form',
    'calculator',
    'etch-a-sketch',
    'rock-paper-scissors',
    'odin-recipes',
    'odin-landing-page',
]

myProjects.forEach(project => {
    //create card
    let projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    //caption
    let projectCaption = document.createElement('h2');
    projectCaption.textContent = makeCaption(project);
    projectCaption.classList.add('project-caption');
    //repo link
    let projectRepoLink = document.createElement('a');
    projectRepoLink.textContent = 'Repository';
    projectRepoLink.setAttribute('href', `https://github.com/shumin11git/${project}`);
    projectRepoLink.classList.add('project-repo-link');
    //pages link
    let projectPagesLink = document.createElement('a');
    projectPagesLink.textContent = 'View';
    projectPagesLink.setAttribute('href', `https://shumin11git.github.io/${project}`);
    projectPagesLink.classList.add('project-pages-link');
    //append all to card
    projectCard.append(projectCaption, projectPagesLink, projectRepoLink);
    //add card to page
    projectsDisplay.appendChild(projectCard);
})

function makeCaption(projectName) {
    return projectName
            .split('-')
            .map(word => {
                return word[0].toUpperCase()
                        + word.slice(1);
            })
            .join(' ');
}