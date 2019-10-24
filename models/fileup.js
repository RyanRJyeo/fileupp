/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getRegister = (name, email, image, hashedpassword, callback) => {

    let inputValues = [name, email, image, hashedpassword];

    let query = 'INSERT INTO users (name, email, image, password) VALUES ($1, $2, $3, $4) RETURNING *';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };


  let getLogin = (email, callback) => {

    let inputValues = [email];

    let query = 'SELECT * FROM users WHERE email = ($1)';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };



  let getHome = (user_id, callback) => {

    let inputValues = [user_id];

    let query = "SELECT users.id AS currentUser_id, users.name AS user_name, email, company_name, image, cases.id AS case_id, cases.name AS case_name FROM users LEFT JOIN cases ON (users.id = cases.users_id) WHERE users.id = ($1)";

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };





  let getGroups = (user_id, callback) => {

    let inputValues = [user_id];

    let query = "SELECT * FROM cases INNER JOIN groups ON (cases.id = groups.case_id) WHERE users_id = ($1)";

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };





  let getUserID = (user_id, callback) => {

    let inputValues = [user_id];

    let query = 'SELECT * FROM users WHERE id = ($1)';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };



  let getCaseAdded = (user_id, name, age, contact, callback) => {

    let inputValues = [user_id, name, age, contact];

    let query = 'INSERT INTO cases (users_id, name, age, contact) VALUES ($1, $2, $3, $4) RETURNING *';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };




  let getCase = (requestCaseID, callback) => {

    let inputValues = [requestCaseID];

    let query = "SELECT cases.id AS case_id, cases.name, age, contact, groups.id AS group_id, group_name, users.name AS user_name, users.id, likes, dislikes FROM cases LEFT JOIN groups ON (cases.id = groups.case_id) LEFT JOIN users ON (users.id = cases.users_id) LEFT JOIN preferences ON (cases.id = preferences.case_id) WHERE cases.id = ($1)"

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };





  let getCaseEdited = (requestCaseID, requestUserID, requestName, requestAge, requestContact, callback) => {

    let inputValues = [requestCaseID, requestUserID, requestName, requestAge, requestContact];

    let query = "UPDATE cases SET name = ($3), age = ($4), contact = ($5) WHERE id = ($1) AND users_id = ($2)";


    // 'SELECT cases.id AS case_id, cases.name, age, contact, groups.id AS group_id, group_name, users.name AS user_name, users.id FROM cases LEFT JOIN groups ON (cases.id = groups.case_id) LEFT JOIN users ON (users.id = cases.users_id) WHERE cases.id = ($1)';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };







  let getPreferenceEdited = (case_id, likes, dislikes, callback) => {

    let inputValues = [case_id, likes, dislikes];

    let query = 'INSERT INTO preferences (case_id, likes, dislikes) values ($1, $2, $3) RETURNING *';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        console.log(error);

        let inputValues = [case_id, likes, dislikes];

        let query = 'UPDATE preferences SET case_id = ($1), likes = ($2), dislikes = ($3) WHERE case_id = ($1) RETURNING *';

            dbPoolInstance.query(query, inputValues, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

              }else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                  callback(null, queryResult.rows);

                }else{
                  callback(null, null);

                }
              }
            });

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };







  let getGroup = (groupName, case_id, callback) => {

    let inputValues = [groupName, case_id];

    let query = 'INSERT INTO groups (case_id, group_name) values ($2, $1) RETURNING *';

    dbPoolInstance.query(query, inputValues, (error, queryResult) => {
      if( error ){

        console.log(error);

        let inputValues = [groupName, case_id];

        let query = 'UPDATE groups SET group_name = ($1) WHERE case_id = ($2) RETURNING *';

            dbPoolInstance.query(query, inputValues, (error, queryResult) => {
              if( error ){

                // invoke callback function with results after query has executed
                callback(error, null);

              }else{

                // invoke callback function with results after query has executed

                if( queryResult.rows.length > 0 ){
                  callback(null, queryResult.rows);

                }else{
                  callback(null, null);

                }
              }
            });

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };




  return {
    getRegister,
    getLogin,
    getHome,
    getGroups,
    getUserID,
    getCaseAdded,
    getCase,
    getCaseEdited,
    getPreferenceEdited,
    getGroup,
  };
};