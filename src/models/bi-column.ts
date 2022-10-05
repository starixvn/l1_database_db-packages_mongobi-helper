import ColumnTypeMapping from '../interfaces/column-type-mapping';
import NameMapping       from '../interfaces/name-mapping';
import MongoType         from '../types/mongo-type';
import SQLType           from '../types/sql-type';

interface BIColumnInterface extends NameMapping, ColumnTypeMapping {};

export class BIColumn implements BIColumnInterface {
  mongo_name: string;

  sql_name  : string;

  mongo_type: MongoType;

  sql_type  : SQLType;

  constructor(input: BIColumnInterface) {
    this.mongo_name = input.mongo_name;
    this.sql_name   = input.sql_name;
    this.mongo_type = input.mongo_type;
    this.sql_type   = input.sql_type;
  };
};

export default BIColumn;
