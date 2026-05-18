Rules of jsx

1. All self closing tags are must and should need to close
 ex: <img> ---> <img/>
2. If we have same level element more than one , we have to wrap inside a parent element
ex: <h1>hello</h1> ----> <div> <h1>hello</h1></div> 
    <h1>hello</h1>        

 reason --> one component need to return only one jsx element

3.class ---> className , why beacause class is a keyword in js also for attr--->htmlFor

4.if we need to access a js variable inside jsx we need jsx expression {}

5.inside the jsx expression we can't use any blocks. we can't declear any variable

6.if we need to show the difference b/w html element and React component all html elements are in lowercase . react Component is in Captilize