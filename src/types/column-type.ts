import ColumnTypeMapping from '../interfaces/column-type-mapping';
import MongoType         from './mongo-type';
import SQLType           from './sql-type';

type TypeDef = 'OID' | 'STR' | 'FLOAT' | 'INT' | 'INT64' | 'BOOL' | 'DATE' | 'FITLER' | 'object' | 'array';

export const ColumnType: Record<TypeDef, ColumnTypeMapping> = {
  OID     : { mongo_type: MongoType.OID   , sql_type: SQLType.OID    },
  STR     : { mongo_type: MongoType.STR   , sql_type: SQLType.STR    },
  FLOAT   : { mongo_type: MongoType.FLOAT , sql_type: SQLType.FLOAT  },
  INT     : { mongo_type: MongoType.INT   , sql_type: SQLType.INT    },
  INT64   : { mongo_type: MongoType.INT64 , sql_type: SQLType.INT64  },
  BOOL    : { mongo_type: MongoType.BOOL  , sql_type: SQLType.BOOL   },
  DATE    : { mongo_type: MongoType.DATE  , sql_type: SQLType.DATE   },
  FITLER  : { mongo_type: MongoType.FITLER, sql_type: SQLType.FITLER },

  object  : { mongo_type: MongoType.object, sql_type: SQLType.STR    },
  array   : { mongo_type: MongoType.array , sql_type: SQLType.STR    },
};

export default ColumnType;
