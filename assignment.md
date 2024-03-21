Q: What is Emmet?
A: Emmet is the essential toolkit for web-developers. It allows you to type shortcuts that are then expanded into full pieces of code for writing HTML and CSS, based on an abbreviation structure most developers already use that expands into HTML markup and CSS rules.

Q: Difference between a Library and Framework?
A: A library is a collection of packages that perform specific operations, wheras a framework contains the basic flow and architecture of an application. The major difference between them is the complexity. Libraries contain a number of methods that a developer can just call whenever they write code. React js is library and Angular is a framework. The framework provides the flow of a Software of a software application tells the developer what it needs and calls the code provided by the develoepr as required. If a library is used, the application calls the code from the library.

Q: What is CDN? Why do we use it?
A: CDN stands for Content Delivery Network, it refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content. That main use of a CDN isto deliver content through a network of servers in a secure and efficient way.

Q: Why is React known as React?
A: React is named React because of it's ability to react to changes in data. React is called React because it was designed to be a delcarative, efficient and flexible JavaScript library for building user interfaces. The name React was chosen because the library was designed to allow developers to react to changes in state and data within an application, and to update the user interface in a declarative and efficient manner. React is a JavaScript-based UI develeopment library. Facebook and an open-source community run it.

Q: What is crossorigin in script tag?
A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

Syntax

```
<script crossorigin = "anonymous|use-credentials">
```

Q: What is the difference between React and ReactDOM?
A: React is a JavaScript library for building User Interfaces whereas ReactDOM is also a library that allows React to interact with the DOM.
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the universal helpers that you need to build components. The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

Q: What is the difference between react.development.js and react.production.js files via CDN?
A: Development is the stage of an appliction before it is public for the users, while production is the term used to the same application when it's made public. Development build is several times(maybe 3-5x) slower than the production build.

Q: What is async and defer?
A: Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) for parsing the page, and executed as early it get's available(does not block HTML DOM construction during downloading process) and does not wait for anything.

Syntax

```
<script src="demo_async.js" async></script>
```

Defer is a boolean-attribute. The script is downloaded in parallel(background) for parsing the page and executed after the page has finished parsing(after browser finishes DOM construction). The defer attribute tells the browser not wait for the script. Instead, the browser will continute to process the HTML, build DOM.

Syntax

```
<script type="module" src="main.js"></script> place the tag inside <head>
```
