import {projects} from '../data/data.js'

const projectTypeBtn = document.querySelectorAll('.project-type')
const projectContainer = document.querySelector('.grid-containers')
const paginationContainer = document.querySelector('.pagination')

const itemsPerPage = 6
renderProjects(projects)

function displayProject(projects) {
  const projectContainer = document.querySelector('.grid-containers')

  let generatedHtml = ''

  projects.forEach(project => {
    generatedHtml += `
      <div class="grid-item">
        <div class="project-image" style="background-image: url('../${project.thumbnail}')">

        </div>
        <div class="project-content">
            <div class="project-title">${project.name}</div>
            <div class="project-details">
                <div class="project-language">
                  ${project.languages.length > 0? 
                    project.languages.map(language => {
                      return`<div class="language">${language}</div>
                      `
                    }).join("") : ''
                    }
                </div> 
                <div class="view-project"><a href="${project.website}">View<span class="ti-arrow-top-right"></span></a></div>
            </div>
        </div>
      </div>
    `
  })

  projectContainer.innerHTML = generatedHtml

}


function renderProjects(projectArray) {

  paginationContainer.innerHTML = ''

  if (projectArray.length === 0) {
    projectContainer.innerHTML =
      `<p class="no-project-message">No project in this category yet</p>`
    return
  }

  // Show only first 6
  const projectsToShow = projectArray.slice(0, itemsPerPage)

  displayProject(projectsToShow)

  // If more than 6, create View More button
  if (projectArray.length > itemsPerPage) {
    const moreBtn = document.createElement('button')
    moreBtn.textContent = 'View More'
    moreBtn.classList.add('btn2', 'expand-btn')

    let expanded = false

    moreBtn.addEventListener('click', () => {

      if (!expanded) {
        // Show all projects
       displayProject(projectArray)

        moreBtn.textContent = 'Show Less'
        expanded = true

      } else {
        // Go back to 6
        displayProject(projectsToShow)
        expanded = false
        moreBtn.textContent = 'view more'
        
        projectContainer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'      
    })
      }
    })

    paginationContainer.appendChild(moreBtn)
  }
}


projectTypeBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
  projectTypeBtn.forEach(btn => {btn.classList.remove('active')})
  btn.classList.add('active')

    if (btn.textContent.toLowerCase() === 'all') {
      renderProjects(projects)
      return;
    }
      const filtered = projects.filter(project => 
       btn.textContent.toUpperCase() === project.category.toUpperCase()
      )  
      renderProjects(filtered)
  })
})
