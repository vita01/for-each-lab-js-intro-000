function iterativeLog(arr){
arr.forEach(function(item, i, arr) {
  console.log('${i}: ${item}');
  return i+': '+ item;
//  alert( i + ": " + item + " (массив:" + arr + ")" );
});

}

function iterate(callback){


}
function doToArray(arr,callback)
