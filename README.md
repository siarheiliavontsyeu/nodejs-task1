# Caesar cipher CLI tool

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/vviiiii/nodejs-task1
```

## Installing NPM modules

```
npm install
```

## Running cli application (examples)

CLI tool should accept 4 options (short alias and full name):

1.  **-a, --action**: an action encode/decode (required)
2.  **-s, --shift**: a shift (required)
3.  **-i, --input**: an input file
4.  **-o, --output**: an output file
   
```
cd task1
node caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"

// Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// Svylt Pwzbt pz zptwsf kbttf alea vm aol wypuapun huk afwlzlaapun pukbzayf.
```

```
cd task1
node caesar_cli --action encode --shift 7 --input "./input.txt" --output "./output.txt"
```
or
```
cd task1
node caesar_cli --action encode --shift 7 --input "./input.txt"
```
or
```
cd task1
node caesar_cli --action encode --shift 7 --output "./output.txt
```
or
```
cd task1
node caesar_cli --action encode --shift 7
```
or
```
cd task1
node caesar_cli -a encode -s 7
```


