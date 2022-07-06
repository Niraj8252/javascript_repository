var a =["selenium", "webdriverio", "terminal"]
var b =["java","js","console"]
var c = []
for(var i =0; i<a.length; i++)
{
     c.unshift(a[i]+" : "+b[i])        // o/p = [ 'terminal : console', 'webdriverio : js', 'selenium : java' ]
     c.push(a[i]+" : "+b[i])           // o/p = [ 'selenium : java', 'webdriverio : js', 'terminal : console' ]
 }
console.log(c);