//alert('hi');

// let noOfWashes = 2;
// let cleanPile = [1, 2, 1, 1,1,2,2,1];
// let dirtyPile = [1, 4, 3, 2, 4];
let single_clean = [];
let cleanpairno = 0;
let single_dirty = [];
let dirtypairno = 0;
let occur_arr = [];
let occur_arr_dirty = [];
let mywash = 0;
let tempCleanPile = [];
let mydirtypile = [];
let washdirtypile = false;
let tempDirtyPile =[];
let dirtywashed =0;

getMaxPairs(50,[40, 40, 40, 40, 40, 40, 40, 50, 50, 50, 50, 50], [40, 40, 45, 45, 30, 35, 50, 50, 25, 25, 20, 20]);



function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  // var noOfWashes = noOfWashes;
  //   var cleanPile = cleanPile;
  //   var dirtyPile = dirtyPile;
    let cleanpile_occur_array = cleanpile_occur(cleanPile);
    cal_cleanpair_cleanarrsingle(cleanpile_occur_array);
    //console.log(single_clean);
    //console.log(cleanpairno);
    //console.log(occur_arr);
    myownwashes(dirtyPile.sort(), noOfWashes)

    if(washdirtypile){
      let dirtypile_occur_array = dirtypile_occur(mydirtypile);
      //right
      //console.log(dirtypile_occur_array);
      cal_dirtypair_dirtyarrsingle(dirtypile_occur_array);
       dirtywashed = dirtyToWash(noOfWashes);

    }
    //console.log(dirty);

    let travel_sock = cleanpairno + mywash + dirtywashed;
    //console.log(dirtywashed);
    console.log(travel_sock);
    return travel_sock;
  
}

//module.exports = getMaxPairs;



// number_of_socks_to_travel_with(ff88fashes,cleanPile, dirtyPile);




function cleanpile_occur(theCleanPile){
  //let occur_arr = [];
  tempCleanPile = theCleanPile;
  let uniq_clean_pile = theCleanPile.filter(function(item, pos) {
    return theCleanPile.indexOf(item) == pos;
})
  //let's get the number of time the item occured
  uniq_clean_pile.forEach(myFunction);
  //console.log(occur_arr);
  return occur_arr;


}


function myFunction(value, index, array) {
  let result = tempCleanPile.filter(thearray => thearray == value);
  let thelength = result.length;
  let occur_arr_element = [value, thelength];
  occur_arr.push(occur_arr_element)

}

//let cleanpile_occur_array =cleanpile_occur(cleanPile);

function cal_cleanpair_cleanarrsingle(cleanpile_occur_array){
  //After running this function, you would have gotten the clean pair , array of single clean sock
  cleanpile_occur_array.forEach(function(element, index, array){
    if(element[1] > 1 ){
      let element_pair = Math.floor(element[1] / 2);
        cleanpairno = cleanpairno + element_pair;
      if(element[1] % 2 == 1){
        single_clean.push(element[0]);
      }
    }
    else{
      single_clean.push(element[0]);
    }
  });
}

function myownwashes(thedirtyPile, thenoOfWashes){
  mydirtypile = thedirtyPile;
  single_clean.forEach(function(element,index, parent_array){
    //let's search through the dirty pile

    
    let result = thedirtyPile.filter(thearray => thearray == element);
    let thelength = result.length;
    //console.log('length'+thelength)
    if(thelength > 0 && mywash < thenoOfWashes){
      mywash = mywash + 1;
      //let's remove the item washed from the dirty pile
      //we have a new array for dirty pile
      //array1 = array1.filter(val => !array2.includes(val));

      var index = mydirtypile.indexOf(element);    // <-- Not supported in <IE9
      if (index !== -1) {
          mydirtypile.splice(index, 1);
      }

      //console.log(mywash);
    }




  })

  if(mywash < thenoOfWashes){
    //we need to consider the dirty pile
    //mydirtypile = thedirtyPile;
    washdirtypile= true;
    
    
  }

  //console.log(mydirtypile)
}


function dirtypile_occur(thedirtyPile){
  //let occur_arr = [];
  tempDirtyPile = thedirtyPile;
  let uniq_dirty_pile = thedirtyPile.filter(function(item, pos) {
    return thedirtyPile.indexOf(item) == pos;
})
  //let's get the number of time the item occured
  uniq_dirty_pile.forEach(mydirtyFunction);
  //console.log(occur_arr_dirty);
  return occur_arr_dirty;


}


function mydirtyFunction(value, index, array) {
  let result = tempDirtyPile.filter(thearray => thearray == value);
  let thelength = result.length;
  let occur_arr_element = [value, thelength];
  occur_arr_dirty.push(occur_arr_element)

}


function cal_dirtypair_dirtyarrsingle(dirtypile_occur_array){
  //After running this function, you would have gotten the dirty pair , array of single dirty sock
  dirtypile_occur_array.forEach(function(element, index, array){
    if(element[1] > 1 ){
      let element_pair = Math.floor(element[1] / 2);
        dirtypairno = dirtypairno + element_pair;
      if(element[1] % 2 == 1){
        single_dirty.push(element[0]);
      }
    }
    else{
      single_dirty.push(element[0]);
    }
  });
  //console.log(dirtypairno);
  //passed
}

function dirtyToWash(noOfWashes){
  let possible_dirtywash = noOfWashes- mywash
  // let possible_dirtypair = Math.floor(possible_dirtywash / 2);
  // return possible_dirtypair;
  if(possible_dirtywash > dirtypairno *2){
    return dirtypairno;
  }else{
    return Math.floor(possible_dirtywash/2);
  }
}


// let array1=[1,2];
// let array2 = [1,2,2,3,4,4];
// //let array3 = [];

//  let array3 = array2.filter(val => !array1.includes(val));

// console.log(array3);