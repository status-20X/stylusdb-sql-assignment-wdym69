const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');
const query = 'SELECT * FROM sample'
// console.log("hello");
async function executeSELECTQuery(query){
  const {fields,table} = parseQuery(query);
  const data = await readCSV(`./${table}.csv`);
  // console.log(data);


  if(fields == '*'){
    // console.log(data[0]);
    return data;
  }else{
    return data.map(row=>{
      const filteredRow = {};
      fields.forEach(field=>{
        filteredRow[field] = row[field];
      });
      console.log(filteredRow);
      return filteredRow;
    });
  }

  
} 
module.exports =  executeSELECTQuery;