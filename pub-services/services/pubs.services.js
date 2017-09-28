var jsonFile = require ('../mocks/pubs');
console.log(jsonFile.length);
console.log(jsonFile[0].name);

function listPub (){
   return jsonFile;
}