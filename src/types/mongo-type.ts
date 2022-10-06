export enum MongoType {
  OID     = 'bson.ObjectId',
  STR     = 'string',
  FLOAT   = 'float64',
  INT     = 'int',
  INT64   = 'int64',
  BOOL    = 'bool',
  DATE    = 'date',
  FITLER  = 'mongo.Filter',

  object  = 'bson.Object',
  array   = 'bson.Array',
};

export default MongoType;
