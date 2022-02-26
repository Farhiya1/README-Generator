// function generating markdown for README File
function generateMarkdown(data) {
  // The data requested by the inquirer is returned. Using that data to personalise a markdown page by writing inside the back ticks.
  return `# ${data.title}
  ----
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#test-instructions)
  - [Contact Information](#questions?)

  ### Description
  ${data.description}
  ### Installation
  ${data.installation}
  ### Usage
  ${data.usage}
  ## Lisence 
 <a href="https://img.shields.io/badge/License-${data.license[0]}-green"><img src="https://img.shields.io/badge/License-${data.license[0]}-green"></a>
  ### Contribution
  ${data.contribution}
  ### Test-Instructions
  ${data.tests}
  ### questions?
  [Github Profile](https://github.com/${data.username})
  ${data.email}
  `;
}
