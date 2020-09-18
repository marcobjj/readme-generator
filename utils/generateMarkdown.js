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





//const obj = {text:'sample text'};

//console.log(generateCodeBlock(obj));

module.exports = {generateH1Markdown,generateH2Markdown,generateCodeBlock,generateLink,generateTable};
