const inquirer = require('inquirer');
const writeFile = require('./utils/generate-readme.js');
const {generateH1Markdown,generateH2Markdown,generateCodeBlock, generateLink,generateTable} = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Please enter project title'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions'
    },
    {
      type: 'confirm',
      name: 'install_command',
      message: 'Would you like to enter a code block for installation instructions?',
      default: true
    },
    {
      type: 'input',
      name: 'codeBlock',
      message: 'Enter your code now:',
      when: ({ install_command }) => install_command
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information'
    }
    ,
    {
      type: 'confirm',
      name: 'usage_link',
      message: 'Would you like to create a link to a video tutorial or wiki page?',
      default: true
   }
   ,
   {
    type: 'input',
    name: 'link_name',
    message: 'Please enter the name of your link',
    when: ({ usage_link}) => usage_link
   }
   ,
   {
        type: 'input',
        name: 'link_url',
        message: 'Please enter the url of your link',
        when: ({ usage_link}) => usage_link
       
    }
    ,
    {
         type: 'input',
         name: 'contributing',
         message: 'Please enter contribution guidelines',
        
     }
    ,
    {
        type: 'input',
        name: 'tests',
        message: 'Testing Instructions'
    }
    ,
    {
        type: 'input',
        name: 'github_user',
        message: 'Please enter your Github username'
    }
    ,
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Enter your license',
      choices: ['Apache v2.0', 'MIT License','GNU General Public License v3.0','Mozilla Public License 2.0']
    }
  ];

// inquirer prompt
const promptUser = () => {
    return inquirer.prompt(questions);
  };


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {


    promptUser()
    .then(data => {
    
      return generateTemplate(data);
    })
    .then(readmeData => writeFile(readmeData))

}

const licenses = { 
  
  'Apache v2.0':{
    badge:`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    text: `Copyright 2020

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`

  }, 
  
  'MIT License':{
    badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    text: `MIT License

    Copyright (c) 2020 
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`

  },
  
  'GNU General Public License v3.0':{
    badge: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    text:`GNU GENERAL PUBLIC LICENSE
    Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.  
[Link to Full text](https://choosealicense.com/licenses/gpl-3.0/)
`

  },
  
  'Mozilla Public License 2.0':{
    badge: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    text:`Mozilla Public License Version 2.0  
==================================  
[Link to Full text](https://choosealicense.com/licenses/mpl-2.0/)
    `
  }    

}

const generateBadge = license => {

  return licenses[license].badge

}

const generateLicenseText = license => {

  return licenses[license].text
}

const generateTemplate = data => {

   
    const { title, description, usage, contributing, tests, installation, codeBlock, link_name,link_url, github_user,email,license } = data;

    const github_url = "http://www.github.com/" +github_user;


return `
${generateH1Markdown(title)}

${generateBadge(license)}

${generateH2Markdown("Table of Contents")}
${generateTable(["Description","Usage","Contributing","Tests","Installation","Questions","License"])}  

${generateH2Markdown("Description")}
${description}

${generateH2Markdown("Usage")} 
${usage}  
${generateLink(link_url,link_name)}

${generateH2Markdown("Contributing")}
${contributing}

${generateH2Markdown("Tests")}
${tests}

${generateH2Markdown("Installation")}
${installation}  
${generateCodeBlock(codeBlock)}

${generateH2Markdown("Questions")} 
Contact me at:  
${generateLink(email,email)}  
${generateLink(github_url,github_url)}

${generateH2Markdown("License")} 
${generateLicenseText(license)}

`

}

// function call to initialize program
init();
