import BITable from './bi-table';

export interface BIDatabaseInterface {
  name  : string;
  tables: BITable[];
};

export class BIDatabase implements BIDatabaseInterface {
  name  : string;

  tables: BITable[];

  constructor(input: BIDatabaseInterface) {
    this.name   = input.name;
    this.tables = input.tables;
  }
};

export default BIDatabase;
