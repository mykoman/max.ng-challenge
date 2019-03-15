/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
 const input = require("./inputs/input.js");
 var moment = require('moment');
 moment().format();
 //moment was used for time formatting

function classifier(input) {
  // Your code should go here.
  const array_with_age =reformat_array_to_contain_age(input);
  //format the original array to contain age with dob
  const age_sorted_array = array_with_age.sort(age_sorter);


 const group_array = myownchunk(age_sorted_array);
 //here goes the chunk based on condition set
 const output = group_object(group_array);
  console.log(output);
  return output;
}

module.exports = classifier;

function create_student(name, dob, regNo) {
  //recreate object of student from a given set of input
  const student = {};
  const age = get_age_from_date(dob);
  student.name = name,
  student.age = age,
  student.regNo = regNo,
  student.dob = dob
  return student;
  
}


function reformat_array_to_contain_age(the_array){
  const new_array = [];
    the_array.forEach(function (arrayItem) {
      // const x = arrayItem.prop1 + 2;
      // console.log(x);
      let dob = arrayItem.dob;
      let name = arrayItem.name;
      let regNo = arrayItem.regNo;
      let student = create_student(name, dob, regNo);
      //console.log(dob);
      //console.log(student);
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


function age_sorter(a,b) {
  //this function helps to sort the array based on the property age
  if (a.age < b.age)
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}


function myownchunk(thearray){
  //this function helps to chunk arrays based on the condition given in the question
  const chunked_array =[];
  let temparray = [];
  //let chunk =0;
  //let temparray_smallest_index_value= 0;
  if(thearray.length >0){


  let temparray_smallest_index_value = thearray[0].age;
  console.log(temparray_smallest_index_value);
  
  for(let i=0;i<thearray.length ; i++){
    //since the array was sorted already, we just use the first element as reference to guide the 5 difference
    console.log(thearray[i].age);
    if(temparray.length == 0 ){
       temparray_smallest_index_value = thearray[i].age;
    }

    if((temparray.length < 3) && ((temparray_smallest_index_value + 5) >= thearray[i].age)){
      
      temparray.push(thearray[i]);
      if(i == (thearray.length-1)){
        chunked_array.push(temparray);
      }

      
    }
    else if((temparray.length < 4) && ((temparray_smallest_index_value + 5) < thearray[i].age)){
      chunked_array.push(temparray);
      temparray =[];
      temparray.push(thearray[i]);
      if(i == (thearray.length-1)){
        chunked_array.push(temparray);
      }
    }
    else{
        console.log('check me');
    }


  }
  }
  

  return chunked_array;
}


function group_object(group_array){
  const output = {};
  output.noOfGroups = group_array.length;
  
  group_array.map(function(item, i){
      let groupnum = i+1;
      let mygroups = output['group'+groupnum]= {} ;
      
      
      mygroups.oldest = item[item.length -1].age; 
      mygroups.members = [];
      //mygroups.sum = 0;
      let addition = 0;

      mygroups.regNos = [];
      console.log(mygroups);
      item.map(function(student, i){
      	let member = {}
      	member.name = student.name;
      	member.age = student.age;
        member.dob = student.dob;
        member.regNo = student.regNo;
        mygroups.members.push(member);
        mygroups.regNos.push(student.regNo);
        addition = addition+ student.age;

      })
      mygroups.sum = addition;
      console.log(mygroups);
  });
  return output;
}
