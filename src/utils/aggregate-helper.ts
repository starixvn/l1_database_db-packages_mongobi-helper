export function objToJSON(expression: object | string) {
  return ({ $concat: [
    '{',
    { $reduce: {
      input: { $objectToArray: expression },
      initialValue: '',
      in: { $concat: [
        '$$value',
        { $cond: { if: { $eq: ['$$value', ''] }, then: '', else: ',' } },
        '"', '$$this.k', '":',
        { $switch: {
          branches: [
            { case: { $eq: [{ $type: '$$this.v' }, 'null'] } , then: 'null' },
            { case: { $in: [{ $type: '$$this.v' }, ['double', 'bool', 'int', 'long', 'decimal']] } , then: { $toString: '$$this.v' } },
          ],
          default: { $concat: ['"', { $toString: '$$this.v' }, '"'] },
        } },
      ] },
    } },
    '}',
  ] });
};

export function arrToJSON(expression: object | string) {
  return ({ $concat: [
    '[',
    { $reduce: {
      input: expression,
      initialValue: '',
      in: { $concat: [
        '$$value',
        { $cond: { if: { $eq: ['$$value', ''] }, then: '', else: ',' } },
        { $switch: {
          branches: [
            { case: { $eq: [{ $type: '$$this' }, 'null'] } , then: 'null' },
            { case: { $in: [{ $type: '$$this' }, ['double', 'bool', 'int', 'long', 'decimal']] } , then: { $toString: '$$this' } },
            { case: { $eq: [{ $type: '$$this' }, 'object'] } , then: objToJSON('$$this') },
          ],
          default: { $concat: ['"', { $toString: '$$this' }, '"'] },
        } },
      ] },
    } },
    ']',
  ] });
};

const AggregateHelper = {};
export default AggregateHelper;
