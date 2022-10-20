import { BSON } from '@ldb/db-common';
import BIColumn    from './bi-column';
import NameMapping from '../interfaces/name-mapping';

const { EJSON } = BSON;

interface BITableInput extends NameMapping {
  pipeline    : Document[] | string;
  columns     : BIColumn[];
};

interface BITableInterface extends NameMapping {
  pipeline    : string;
  columns     : BIColumn[];
}

export class BITable implements BITableInterface {
  mongo_name  : string;

  sql_name    : string;

  pipeline    : string;

  columns     : BIColumn[];

  constructor(input: BITableInput) {
    this.mongo_name = input.mongo_name;
    this.sql_name   = input.sql_name;
    this.columns    = input.columns;

    const pipe: Document[] = typeof input.pipeline === 'string' ? EJSON.parse(input.pipeline) as Document[] : input.pipeline;
    this.pipeline   = EJSON.stringify(pipe);
  };
};

export default BITable;
