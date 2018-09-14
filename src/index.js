/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
  let a=0; b=0; count=0; 
  for(var i=0; i<preferences.length; i++){ 
  a=preferences[i]-1; 
  b=preferences[a]-1; 
   if(preferences[b]-1===i){ 
   count++; 
   } 
  } 
  return Math.floor(count/3); 
  };
