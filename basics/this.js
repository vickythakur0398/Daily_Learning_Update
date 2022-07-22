// Playing around this keyword & call apply method(didnt use in example but similar to call only diff is apply take arguments useing [a,b ] while call take simple a,b)

    // console.log(this);
'use strict'

var abc = function name()
{
    console.log(this);
}

abc()
// w/o strict we will get window object
// here we will get function name as we are calling via call
abc.call(abc)

function name()
{
    console.log(this);
}
name()
name.call(name)


var obj = {
  'prop1' : 12,
  fun : function()
  {
          console.log(this);

  }
}

obj.fun();


/*
undefined
[Function: name]
undefined
[Function: name]
{ prop1: 12, fun: [Function: fun] }

*/
