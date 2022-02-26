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

