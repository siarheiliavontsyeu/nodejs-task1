const fs = require('fs');
const util = require('util');
const path = require('path');
const { pipeline } = require('stream');
const chalk = require('chalk');
const Args = require('./Args');
const EncryptionStream = require('./EncryptionStream');
const { isPositiveInt, isPermittedActionValue } = require('./utils');

const access = util.promisify(fs.access);

const checkFileExisting = async output => {
  try {
    await access(path.join(__dirname, output));
  } catch (err) {
    console.error(chalk.red('Error =>', err.message));
    process.exit(1);
  }
};

const callCli = async () => {
  const { action, shift, input, output } = new Args().getProgramOptions();

  if (!isPermittedActionValue(action)) {
    console.error(
      chalk.red('ERROR: Value of action must be "encode" or "decode"')
    );
    process.exit(1);
  }

  if (!isPositiveInt(shift)) {
    console.error(chalk.red('ERROR: Value of shift must be positive integer'));
    process.exit(1);
  }

  let inputFilePath;
  let outputFilePath;
  let readTxtStream;
  let writeTxtStream;

  const encryptStream = new EncryptionStream({ action, shift });

  try {
    if (output) {
      await checkFileExisting(output);
    }

    if (input) {
      inputFilePath = path.join(__dirname, input);
      readTxtStream = fs.createReadStream(inputFilePath, 'utf8');
    } else {
      readTxtStream = process.stdin.setEncoding('utf8');
    }

    if (output) {
      outputFilePath = path.join(__dirname, output);
      writeTxtStream = fs.createWriteStream(outputFilePath, { flags: 'a' });
    } else {
      writeTxtStream = process.stdout;
    }

    await pipeline(readTxtStream, encryptStream, writeTxtStream, err => {
      if (err) {
        console.error(chalk.red('ERROR:', err.message));
        return;
      }
      console.log(chalk.green('Finished'));
    });
  } catch (err) {
    console.error(chalk.red('ERROR2:', err.message));
  }
};

callCli();
