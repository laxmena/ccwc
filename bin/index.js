#! /usr/bin/env node 
const { Command } = require('commander')
const { lineCount, byteCount, wordCount, charCount, readContentFromFile } = require('./wc-util')
const program = new Command()

var stdin = ''

const usage = `[options] [file-path]

Examples:
    $ ccwc --line file.txt
    $ cat file.txt | ccwc -w
`

program
    .usage(usage)
    .option('-c, --bytes', 'number of bytes')
    .option('-l, --line', 'number of lines')
    .option('-w, --word', 'number of words')
    .option('-m, --char', 'number of characters')
    .argument('[file-path]', 'input file path')
    .action(async (filePath) => {
        if(!stdin && !filePath) return;

        const data = await getContent(stdin, filePath)

        let options = program.opts();
        if(Object.keys(options).length === 0) {
            options.line = true;
            options.word = true;
            options.bytes = true;
        }

        if(options.line) lineCount(data)
        if(options.word) wordCount(data)
        if(options.bytes) byteCount(data)
        if(options.char) charCount(data)

        if(filePath) console.log(`${filePath}`)
    })

const getContent = async (stdin, filePath) => {
    if(filePath) return await readContentFromFile(filePath)
    else return stdin;
}

if(process.stdin.isTTY) {
    program.parse(process.argv)
} else {
    process.stdin.on('readable', function() {
        var chunk = this.read();
        if(chunk !== null) {
            stdin += chunk;
        }
    });
    process.stdin.on('end', function() {
        program.parse(process.argv)
    })
}

