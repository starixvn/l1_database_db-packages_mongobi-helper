import BIDatabase from './bi-database';

export interface BISchemaInterface {
  databases : BIDatabase[];
};

export class BISchema implements BISchemaInterface {
  databases : BIDatabase[];

  constructor(input: BISchemaInterface) {
    this.databases = input.databases;
  };
};

export default BISchema;
