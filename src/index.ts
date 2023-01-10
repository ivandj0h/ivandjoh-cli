import { Command } from 'commander';
import figlet from 'figlet';

const program = new Command();
const title: string = "ivandjoh-cli";

console.log(figlet.textSync(title));

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();