/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
 const input = require("./inputs/input.js");
 var moment = require('moment');
 moment().format();

function classifier(input) {
  // Your code should go here.
  const array_with_age =reformat_array_to_contain_age(input);
  const age_sorted_array = array_with_age.sort(age_sorter);
//console.log(new_array);
  //return new_array;

 const group_array = myownchunk(age_sorted_array);
 const outputEdge = group_object(group_array);
  console.log(outputEdge);
  return outputEdge;
}

module.exports = classifier;





function create_student(name, dob, regNo) {
  //recreate object of student from a given set of input
  const student = {};
  const age = get_age_from_date(dob);
  student.name = name,
  student.age = age,
  student.regNo = regNo
  return student;
  
}




function reformat_array_to_contain_age(the_array){
  const new_array = [];
    the_array.forEach(function (arrayItem) {
      // const x = arrayItem.prop1 + 2;
      // console.log(x);
      const dob = arrayItem.dob;
      const name = arrayItem.name;
      const regNo = arrayItem.regNo;
      const student = create_student(name, dob, regNo);
      console.log(dob);
      console.log(student);
      //let's push the new student to the array
      new_array.push(student);
  });
  return new_array;
}









function get_age_from_date(thedate){
  const todays_date = new Date();
  const todays_date_moment = moment(todays_date);
  const thedate_moment = moment(thedate);
  const age = todays_date_moment.diff(thedate_moment, 'years')
  return age;
}

//console.log(get_age(mydate));



function age_sorter(a,b) {
  //this function helps to sort the array based on the property age
  if (a.age < b.age)
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}

// const result = mikesample.sort(age_sorter);
 

const result = reformat_array_to_contain_age(input);
console.log(result);




//let's split the arrays in chunks





function myownchunk(thearray){
  const chunked_array =[];
  let temparray = [];
  let chunk =0;
  let temparray_smallest_index_value= 0;
  temparray_smallest_index_value = thearray[0].age;
  console.log(temparray_smallest_index_value);
  
  for(let i=0;i<thearray.length ; i++){
  
    console.log(thearray[i].age);
    if(temparray.length == 0 ){
       temparray_smallest_index_value = thearray[i].age;
    }

    if((temparray.length < 3) && ((temparray_smallest_index_value + 5) >= thearray[i].age)){
      //console.log(temparray_smallest_index_value);
      //console.log(thearray[i]);
      temparray.push(thearray[i]);
      //console.log(temparray);
      
    }
    else if((temparray.length < 3) && ((temparray_smallest_index_value + 5) < thearray[i].age)){
      chunked_array.push(temparray);
      temparray =[];
    }

    // temparray = thearray.slice(i,i+chunk);
    //   console.log(temparray);
    // chunked_array.push(temparray);

  }
  console.log(chunked_array)
  return chunked_array;
}


function group_object(group_array){
  const output = {};
  output.noOfGroups = group_array.length;
  //let groupnumber = 1;
  group_array.map(function(item, i){
      let groupnum = i+1;
      let mygroups = output['group'+groupnum]= {} ;
      
      //let eldest = Math.max(...item.age);
      mygroups.oldest = item[item.length -1].age; 
      mygroups.members = [];
      //mygroups.sum = 0;
      let addition = 0;



      mygroups.regNos = [];
      console.log(mygroups);
      item.map(function(student, i){
        mygroups.members.push(student.name);
        mygroups.regNos.push(student.regNo);
        addition = addition+ student.age;

      })
      mygroups.sum = addition;
      console.log(mygroups);
  });
  return output;
}

