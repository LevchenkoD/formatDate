//-------------------formatDate Usage-------------------//
//
// formatDate(new Date(), 'YYYY MMMM DD');
//
//-----------------formatDate Usage-END-----------------//

function formatDate(dateObj, format){
	var mF = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    	mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      beautify = function(n){ return n<10 ? '0'+n : n; },
      values = {
        	'YYYY' : dateObj.getFullYear()
        ,  'YY' : dateObj.getFullYear().toString().slice(2)
        ,  'MMMM' : mF[dateObj.getMonth()]
        ,  'MM' : mS[dateObj.getMonth()]
        ,  'M' : beautify(dateObj.getMonth() + 1)
        ,  'DD' : beautify(dateObj.getDate())
        ,  'hh' : beautify(dateObj.getHours())
        ,  'mm' : beautify(dateObj.getMinutes())
        ,  'ss' : beautify(dateObj.getSeconds())
        ,  'ms' : beautify(dateObj.getMilliseconds())
        ,  '%dif%' : difference(dateObj)
      },
      result = format;

  function difference(then){
       var diff = new Date() - then,
           year = 3.154e+10,
           month = 2.628e+9,
           day = 8.64e+7,
           hour = 3.6e+6,
           minute = 60000;

      if(diff/year >= 1){
        return (diff/year) < 2 ? '1 year' : Math.round((diff/year)) + ' years';
      } else if(diff/month >= 1){
        return (diff/month) < 2 ? '1 month' : Math.round((diff/month)) + ' months';
      } else if(diff/day >= 1){
        return (diff/day) < 2 ? '1 day' : Math.round((diff/day)) + ' days';
      } else if(diff/hour >= 1){
        return (diff/hour) < 2 ? '1 hour' : Math.round((diff/hour)) + ' hours';
      } else if(diff/minute >= 1){
        return (diff/minute) < 2 ? '1 minute' : Math.round((diff/minute)) + ' minute';
      } else {
        return 'less than a minute';
      }
  };

  for(key in values){
    result = result.replace(key, values[key]);
  };

  return result;
};
