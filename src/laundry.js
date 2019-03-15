/**
 * This is the entry point to the program.
 *
 * @param {number} noOfWashes The number of times the laundry machine can clean a dirty sock
 * @param {number[]} cleanPile The array of clean socks
 * @param {number[]} dirtyPile The array of dirty socks to wash
 */

function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  // Your solution should go here.
//   const totalsocks = 0;
//   const dirty_clean_match =0;
//   const clean = cleanPile.sort();
//   const dirty = dirtyPile.sort();
//   const unique_clean = unique_with_occurence(cleanPile);
//   const unique_dirty = unique_with_occurence(dirty);
  //totalsocks = Math.floor(clean.length + dirty.length+ noOfWashes);
  //return totalsocks;
  
	//first let check for total clean pairs available
	//const 
	//we'll check for duplicate in clean pile array
	//count duplicates and add to totalsocks
	//we'll use array splice to remove duplicates
	//we'll use the remaining items left in clean pile
	//iterate through the array and search in the dirtypile
	//for every match, splice both clean and dirty pile
	//add to dirty_clean_match
	//if dirty_clean_match >= noOfWashes  then return totalsocks=totalsocks+ noOfWashes
	//else
}

module.exports = getMaxPairs;








function no_clean_pair(cleanPile){
	const clean_pile_no  = cleanPile.length;
	const unique_clean_pile_no = [...new Set(clean_pile_no)].length;
	//const clean_pair = clean_pile_no -
}



function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}




function paired_socks_array(thearray){
	var cache = {};
var temp_results = [];
for (var i = 0, len = arr.length; i < len; i++) {
  if(cache[arr[i]] === true){
      temp_results.push(arr[i]);
   }else{
       cache[arr[i]] = true;
   }

}
//temp_result is array with duplicates
//there is a chance that the 
console.log(temp_results);
return temp_results;
}
var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7, 9];

console.log(unique_with_occurence(arr));


//this fxn returns an array a unique array with its no of occurences
function unique_with_occurence(arr) {
    var a = [], b = [], prev;

    arr.sort();
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }

    return [a, b];
}

function nocleanpair_otherpairable(arr1, arr2){
    paired_clean = 0;
    element_to_remove =[]

  arr2.array.forEach(element => {
      let pairs = Math.floor(element /2)
      if(pairs >0){
          paired_clean = paired_clean + pairs;
        }
        if(element % 2 == 0){
            //lets store arrays that have elements that are not paired 
            
        }
      
  });
}

