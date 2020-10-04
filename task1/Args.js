const program = require('commander');

class Args {
  constructor() {
    this.program = program;
    this.program.storeOptionsAsProperties(false).passCommandToAction(false);
    this.createProgramOptions();
  }

  createProgramOptions() {
    this.program.name('caesar_cli').usage(
      `[global options] command
    Examples: 
        node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
        node caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
        node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
        
        node my_caesar_cli -a encode -s 7`
    );
    this.program
      .requiredOption('-a, --action <value>', 'an action encode/decode')
      .requiredOption('-s, --shift <number>', 'a shift')
      .option('-i, --input <value>', 'an input file')
      .option('-o, --output <value>', 'an output file');
  }

  getProgramOptions() {
    this.program.parse(process.argv);
    return program.opts();
  }
}

module.exports = Args;
