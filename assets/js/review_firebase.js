var reviewNum = 10;

function formatDate(dateObj){
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  newdate = year + "/" + month + "/" + day;
  return newdate;
}

function findIndicesOfMax(inp, count) {
    var outp = new Array();
    for (var i = 0; i < inp.length; i++) {
        outp.push(i);
        if (outp.length > count) {
            outp.sort(function(a, b) { return inp[b] - inp[a]; });
            outp.pop();
        }
    }
    return outp;
}

function getNumStars(n){
  var result = '';
  for (var i = 0 ; i < n; i++){
    result += '★ '
  }
  return result;
}

function recentReviewSetup(v){
// get indices of greatest elements
var indices = findIndicesOfMax(Object.keys(v), reviewNum);
if (Object.keys(v).length <= reviewNum){
  indices = indices.reverse();

}
console.log(indices);
// get actual value using indices
for (var i = 0; i < indices.length; i++){
  var key = Object.keys(v)[indices[i]];
  var htmlDivs = 
                 '<div id="recentReviews' + i + 'star" class="reviewStar staticStars"></div>' +
                 '<div id="recentReviews' + i +  'msg" class="reviewMsg"></div>' + 
                 '<div id="recentReviews' + i + 'name" class="reviewName"></div>' +
                 '<div id="recentReviews' + i +  'date" class="reviewDate"></div>' ;
  var userIcon = '<span class="glyphicon glyphicon-user" aria-hidden="true"></span>';
  $('#recentReviews' + i).html(htmlDivs);
  $('#recentReviews' + i +'name').text(' ' + v[key]['name']);
  $('#recentReviews' + i +'name').html(userIcon + $('#recentReviews' + i +'name').text());
  $('#recentReviews' + i +'star').text(getNumStars(v[key]['star']));
  $('#recentReviews' + i +'msg').text(v[key]['msg']);
  $('#recentReviews' + i +'date').text(v[key]['date']);
  }
}
// figures out how many stars are checked:
function checkedStars(){
  var checkedStar;
	for (var i = 0; i < $('input[name=rating]').length; i++){
  var attrName = 'input[id=star' + (i + 1) + ']';
  if ($(attrName).is(":checked")){
        	checkedStar = $(attrName).val();
        }
  	}
  return checkedStar;
}