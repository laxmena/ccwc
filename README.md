# ccwc - clone of unix wc tool
Building my own version of the Unix command line tool `wc`!

Coding Challenge link: https://codingchallenges.fyi/challenges/challenge-wc 

# How to use

## Installing ccwc cli tool
Run this command to install the `ccwc` cli tool.

```
npm install
npm run release
```

Once these commands are successfuly executed, try running this command to verify `ccwc` is installed.

```
ccwc --help
```
## Usage

```
Usage: ccwc [options] [file-path]

Arguments:
  file-path    input file path

Options:
  -c, --bytes  number of bytes
  -l, --line   number of lines
  -w, --word   number of words
  -m, --char   number of characters
  -h, --help   display help for command
```

## Examples


**Count number of words in a file:**
```
ccwc --word test.txt
[or]
ccwc -w test.txt
```
Output: `58164 test.txt`

**ccwc also works with standard input:**
```
cat test1.txt | ccwc --line
```
Output: `43`


**Get Line, Word and Bytes count in a file:**
```
ccwc test.txt
```
Output: `7145 58164 342190 test.txt`

