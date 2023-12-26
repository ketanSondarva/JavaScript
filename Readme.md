<!-- ![JavaScript](js.png) -->
<img src="js.png" height="2%" width="7%">

## level 1 content:

1. [Basics of JavaScript](<Level 1/Basic_JS.html>):

    - if, switch, loop statements is JS.
    - falsy value in JS.
    - undefined, null, 0, NaN, falsy value.
    - anonymous function <b>(IMP)</b>

2. [What can JS does?](<Level 1/js_first.html>)

    - change the content of HTML (innerHTML)
    - change the style of elements
    - can hide / show the element on condition

3. [Where to write JS code ?](<Level 1/JS_Where_To.html>)

    - in html document inside `<script> </script>`
    - external `.js` file
    - NOTE: use `<script>` at the end of html doc.(i.e. before closing `body` tag)

4. [Windows methods](<Level 1/JS2_Output.html>):

    - window.alert()
    - document.write()
    - document.print() : to print current page
    - console.log()
    - console.warn() : to specify warning msg
    - console.error() : to specify error msg

5. [getElementById and innerHTMl with variables](<Level 1/JS3_Statement.html>)

6. [diffrence between let and var](<Level 1/JS4_Let.html>)

7. [Data Types](<Level 1/JS5_DataType.html>)

    - number(int/float), string(char/string), object(array/object)
    - exponential declaration
    - `typeof` method
    - declaration without initialization considered as `undefined`

## leve 2 content:

1. [object declaration and access elements.](<level 2/JS_Objects_1.html>)

2. [type of ways to access object](<level 2/JS_Objects_2.html>):

    - direct access
    - by assingning to other variable by new keyword
    - by object constructor

3. [basic functions for dom element](<level 2/JS6_Function.html>)

    - function on button click `onclick`
    - function to manipulate innerHTML

4. [three interview questions on basic JS with answer](<level 2/Js_interview_que.html>)

## level 3 content:

1. [Arrays in JS](<level 3/JS_Arrays.html>):
    
    - multiple DataTypes in single array
    - add / remove(pop) element
    - NOTE: array methods are not covered here!

2. [Document Object Model & Browser Object Model](<level 3/JS_DOM_&_BOM.html>) `IMP`

3. [FUN WITH JS :)](<level 3/Js_Challanges.html>)

- > use browser console to run those all methods of <b>2</b> and tricks of <b>3</b>.

## level 4 content: (imp level)

- ### [ECMAScript 6, New Features:](<level 4/Advanced_Js_ES6.html>)

    1. Variable declaration:
       - let: block scope, modifiable
       - const: gloabl scope, unmodifiable
       - var: global scope, modifiable (use rarely)

    2. Templete litarals (template string)
    3. for .. in and for .. of loops
    4. Array methods
    5. String methods
    6. Date and Time methods `imp`
    7. Math object

## level 5 content:

1. [Project: calculator](<level 5/Project_Calculator.html>)
2. [Array and Object Destructuring](<level 5/destruct.html>)

3. [ES7](<level 5/ES7.html>): `array.includes(ele)` and exponantial oparator `2**3`
4. [ES8 and ES9](<level 5/ES8_ES9.html>):
    > ES8: `string.padStart(int)` & `string.padStart(int) ` and `obj.values()` & `obj.entries()`
    > ES9: Spread Operator
5. [ES10](<level 5/ES10.html>): `array.flat(1 to Infinity0)` Multidimension to single dimension array

## level 6 content:

1. [Ways to write events in JS](<level 6/events.html>):

    - inline events: alert, confirm.
    - custom functions: onclick, onchange, onkeypress, onkeyup, onkeydown, onmousedown, etc.
    - getElementById / querySelector obj.onclick:
     ```
        const usingId = document.getElementById("id");
        usingId.onClick = () => {};
        usingId.onChange = () => {};
        ...
     ```
     - using event litener `obj.addEventListener('evenType', callback)` <b>recommended</b>

2. [Event listeners and event object](<level 6/eventObj.html>):

    - mouse events: mousedown, mouseup, mouseenter, mouseleave
    - key evenets: keypress, keyup, keydown
    - querySelector() and addEventListener()

3. [Increment / Decrement on click event](<level 6/Increment-Decrement onclick.html>)

4. [Small project on -> Input event: input:text and drop down](<level 6/inputEvent.html>)


## level 7 content:

1. [objects in JavaScript](<level 7/obj.js>):
    
    - object with stirng, number & function type values.
    - ways to specify functoin inside object
    - object inside object (nested object)
    
2. [Object props, dynamic object](<level 7/objProps.html>)

3. [spread operator](<level 7/spreadOp.html>):

    ```
    const arr1 = [4,5,6];
    const arr2 = [1,2,3,...arr1,7,8,9];
    ```

4. [this operator](<level 7/thisOp.html>)

## level 8 content:

1. [Introduction to Advanced JS](<level 8/intro.html>)

2. [Lexical Scope](<level 8/lexiconScope.html>):
    - inner block can acquire variable of outer block but dont possible vice versa! this is lexicon scope
3. [Higher order functions](<level 8/higherOrdFun.html>)
4. [JSON](<level 8/JSON.html>): `JSON.stringify()` and `JSON.parse()` methods

## level 9 content: (imp & hard)

> note: go to step by step as given below:

1. [Timing Functions, Higher order functions](<level 9/timingEvents.html>)

2. [Callback with calbackhell](<level 9/call back.js>)

3. [JavaScript Promises](<level 9/promise.js>)

4. [Async Await](<level 9/async await.js>)

5. [Propagation](<level 9/Propagation.html>):

    - bubbling propagation: bottom-up, by default
    - capturing propagation: top-down, set `addEventListener`'s third parameter to true


## level 10 content: (Projects):

### Congratulations !! 🔥 You are project ready now 🥳

1. [Random jokes api implementation](<level 10 Projects/promis_async.htm>):

    - concepts: promises, async-await, fetch api

2. [Random contry inforamtion](<level 10 Projects/XML.html>):

    - concepts: promises, async-await, fetch api
    
