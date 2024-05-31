import fs from "fs"

// Here we are writing a file using fs module
// Using appendFileSync if the file already exists we will only add the content to the end of the file
const writingFiles = (fileName, fileContent) => {
  fs.appendFileSync(fileName, fileContent)
}


// We can use the unlink to delete files
const deletingFiles = (fileName) => {
  fs.unlinkSync(fileName)
}