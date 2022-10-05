import MongoType from '../types/mongo-type';
import SQLType   from '../types/sql-type';

export interface ColumnTypeMapping {
  mongo_type  : MongoType;
  sql_type    : SQLType;
};

export default ColumnTypeMapping;
