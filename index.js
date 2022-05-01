// Code your solution here


function findMatching(source , search) {
   return source.filter(driver => 
         driver.toLowerCase() === search.toLowerCase()
    )
}



function fuzzyMatch(source, search) {
    let index = search.length
    return source.filter(driver => 
      driver.substr(0, index) === search
    )
}


 function matchName(source, search) {
     return source.filter(record => record.name === search)
 }






 
