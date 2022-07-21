
// Countdown timer in JS By Timing events 
// user can give value But I hardcoded 10 for the time being

var num = 10
function fun()
{
    if (num == 0)
    {
        console.log("Times Up");
          clearInterval(id);
          return; // if we dont add return than after 1 it will print 0 
  
    }
    console.log(num +" sec passed");
    num--;
};

var id = setInterval(fun, 1000);



/*
op
10 sec passed
9 sec passed
8 sec passed
7 sec passed
6 sec passed
5 sec passed
4 sec passed
3 sec passed
2 sec passed
1 sec passed
Times Up

*/

