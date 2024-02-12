const cachedFs = require('cachedfs')
const fs = new cachedFs();


const readContentFromFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        return data;
    })
}

const byteCount = (data) => {
    const count = Buffer.byteLength(data);
    process.stdout.write(`${count} `)
    return count;
}

const lineCount = (data) => {
    const lines = data.split('\n')
    const totalLines = lines.length - 1
    process.stdout.write(`${totalLines} `)
    return totalLines;
}

const wordCount = (data) => {
    const words = data.match(/\S+/g);
    process.stdout.write(`${words.length} `)
    return words.length
}

const charCount = (data) => {
    process.stdout.write(`${data.length} `)
    return data.length;
}

module.exports = {
    readContentFromFile,
    byteCount,
    lineCount,
    wordCount,
    charCount
}
