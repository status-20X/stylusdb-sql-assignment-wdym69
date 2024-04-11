function parseQuery(query){
  const seleceRegex = /SELECT (.+) FROM (.+)/i;
  const match = query.match(seleceRegex);
  if(match){
    const [,fields,table] = match;
    return{
      fields: fields.split(',').map(field=>field.trim()),
      table:table.trim()
    };
  }else{
    throw new Error('Invalid query format')
  }
}

module.exports = parseQuery;