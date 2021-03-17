const { BadRequestError } = require("../expressError");

/* Helper function for mapping data into SQL format for SET clause
in SQL UPDATE queries. Used in User and Company models.

dataToUpate may include:
  { firstName, lastName, password, email, isAdmin }

  
  EXAMPLE:
    dataToUpdate = {firstName: 'Aliya', age: 32, ...}
    
    jsToSql = {
                firstName: "first_name",
                lastName: "last_name",
                isAdmin: "is_admin",
              }
    jsToSql maps js-style data fields to database column names

Returns =>
      {
        setCols: '"first_name"=$1', '"age"=$2',
        values: ['Aliya', 32],
      }
  */

function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  const keys = Object.keys(dataToUpdate);
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>
    `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );

  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = {
  sqlForPartialUpdate,
};
