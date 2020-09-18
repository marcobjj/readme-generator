// function to generate h1 markdown for README title
const generateH1Markdown = section => {
  return `# ${section}

`;
}

const generateH2Markdown = section => {
  return `## ${section}

`;
}

const generateCodeBlock = codeblock => {

  if(!codeblock) return '';

  return ` \`\`\` ${codeblock} \`\`\` `  ;
}

const generateLink = (url,name) => {

  if(!name || !url) return '';

  return `[${name}](${url})` ;
}

const generateTable = array => {
  let table = ``;
  array.forEach(string => {

    table += 
` 
* [${string}](#${string.toLowerCase()})  
`
  }
    
    )

    return table

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

const generateMarkdown = data => {

   
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





//const obj = {text:'sample text'};

//console.log(generateCodeBlock(obj));

module.exports = generateMarkdown;
