✅ episode 1 - React.js Intro

✅ episode 2 - 
Essential & must know JS topics before React.js

✅ episode 3 - 
Learned about - React element : Everything in JS is an Object. React elements is also an Object behind the scene

✅ episode 4 - 
Learned about - JSX and babel.js
1) JSX allows us to write html like syntax in JS.
2) Babel.js is a tool that watches the JSX code we write in our files, and converts it in React.createElement code behind the scene

✅ episode 5 - 
Learned about - Source maps
source maps are very important when u work with bundlers, minified files and dist folders, source maps help us in debugging our code. it basically tells us -
"this minified code is generated output off this line of code in your manually written file"

✅ episode 6 - 
React.js VS Next.js : Next.js is built on top of React.js, both uses JS under the hood. basically Next.js is 80% React with 20% additional features. for learning 
Next.js we need to learn React First. 

✅ episode 7 -  Parcel.js intro

✅ episode 8 - 
Learned about - Hoe to render Multiple Elements in react - we can give array of elements directly to Render method, React takes care of rendering array of elements without causing an error.

✅ episode 9 - Intro to React `<Components />`

✅ episode 10 - How to use images in React - with modules and import/export

✅ episode 11 - How to handel and work with Events in React

✅ episode 12 - What is state in React & How is works - when we use state in react, Every data on DOM related to state doesn't needs another code to Update the changes on DOM. - most powerful, interesting and highly optimized feature by React creators✨.

✅ episode 13 -
Learned about - `useState()` hook how use state works = [stateVariable, stateVariable Updater call back function] = useState(initial value of state variable)
we update the "stateVariable" with "stateVariable Updater call back function", when the sate updates the components renders itself again.

✅ episode 14 -
state vs props in react - Components are reusable functions which return JSX. And props are the way to pass data components, and then the components will perform coding operations on the data which we pass through props like this - <Components props={"**Data**"} />

✅ episode 15 - Learned about - React Fragments

✅ episode 16 - Learned about - the children props. what is children props in React?

✅ episode 17 - 
Learned about - Conditional Rendering in React. How can we perform optimized/less code conditional rendering in React using the Ternary operators, coalescing operators and using && , || operators.

✅ episode 18 -
Learned about - Modular CSS in React. How to use modular CSS in React using a componentName.module.css file, import them in the related component using - 
"import styles form './componentName.module.css'"

✅ episode 19 - Started building E-commerce product Cards project using hands-on React.

✅ episode 20 - Implemented search functionality in the project.

✅ episode 21 - 
1) Learned about - useEffect and React. the useEffect hook, which takes a callback function as an argument, and the second argument it takes is an empty dependency array. That empty dependency array we can use to monitor any state for a normal variable. Whenever the state variable or normal variable in the dependency array gets updated, the call back function in useEffect hook runs again. If the data in the dependency array stay the same as the previous data, then the code will never run which we added in the callback function of useEffect hook. The dependency array of useEffect hook can accept any kind of data for monitoring, such as normal variables, state variables, arrays, objects, or even call back functions. another most powerful, interesting and highly optimized feature by React creators✨.
2) Made the first fetch call using the `useEffect()` in the React. 


✅ episode 22 - 
Learned about - React-router v6 & how it's compatible with Parcel. 
1) Learned about createBrowserRouter and RouteProvider method of React-router.
2) Learned about path, element, errorElement, and children props of createBrowserRouter method of React-router.


✅ episode 23 - 
1) Learned about Dynamic Routing using React-router with "/:" 
2) Learned about the `useParams()` hook of React-router to get the URL prefixes and the URL endpoint which is created with React-router.


⚠️ episode 24 - (Pending learnings)
1) Handle multiple fetch requests in a React Component
2) first try to understand the source code of this video, each line of code, what is the role of every line?
3) Learn about how to work with useState() hook when you have Previous State?
4) Explore about Promise.all(), how it works? common errors..

✅ episode 25 - 
1) Added loading skeletons for products container & product details page.
   used this method for dynamic creation for loading cards - 
   Array.form({length.(10)}).map((el,index) => {
       return <loading card div key={index} />
   }); 

✅ episode 26 - 
1) Learned about - `useLocation()` hook of React-router, `state` attribute of `Link` element in React-router.
2) We can pass and share data across the crated components using the <Link /> element of the React-router. We can do this using the `state={*data*}` prop of 
   the Link element. Later, we can access the data we passed in state prop using `useLocation()` hook, which is provided by React-router.
3) Quickly built and implemented a small functionality in the project using useLocation() hook & state prop of Link element.

✅ episode 27 -
1) Learned about - `context` prop of <Outlet /> component of React-router & how to work with `useOutletContext()` hook of React-router.
   data we pass in - "context prop of <Outlet /> component" is accessible in every component which is render through the <Outlet /> component.

✅ episode 29 -
1) Learned about - Creating contexts with `createContext()` function in React, Learned how to use the created context using `useContext()` hook 
   of React.
3) how to share context across any Components using `.Provider` method and its `value` prop = <context.Provider value={ // context Data }></context.Provider>
2) Implemented Dark Mode UI logic using Context API & useContext hook.

✅ episode 30 -
Learned about `custom Hooks` in React, and how to create our own custom Hooks.
Custom hooks are not any fancy feature provided by React. They are just reusable functions we can use anywhere. The best and recommended practice is to use the `use` keyword before the hook name and have a separate folder named `hooks` for all your custom hooks.

✅ episode 30 -
Implemented filter by Category functionality in the project. project is completed✅.

✅ episode 31 - Project Deployment

✅ episode 32 - Intro to Vite. 
1) Learned about - `npm create vite@latest` command to quickly setup a React project using `Vite`.
2) which is Best scalable folder structure for a React project, best way to structure our HTML file with Script and Link tags (for importing fonts, CDN links, JS files). Right way to import CSS styles in React components. 
3) best folder structure suggested by ChatGPT.
4) Explored - crypto.randomUUID(), reduce() method real Implementation

✅ episode 33 -
1) Unidirectional Data flow : it means the flow of data will only move form - Component state to Ui (Model -> View) or the data wil move from -
   parent component -> child component -> UI. 
2) One way data binding : Simple explanation is Our Components state will trigger the re-render of UI, But changes on the UI will not trigger the 
   Components state update.
3) Controlled Inputs : Control inputs are the best examples of one-way data binding. Best practice recommended is to have the `onChange` event handlers on 
   all of your inputs. That `onChange` event should update the state, and the state updates will trigger UI render.

✅ episode 34 -
1) Learned about - `useRef()` hook in React. Any value or UI element linked with useState hook, will trigger the component Re-render on any change. In the case of 
   useRef() hook, any value or UI element linked with useRef() hook will not trigger UI component re-render on change, and it has logic, which remembers the recent changes made with its Linked value or UI element.
2) Implemented useRef hook in Expense tracker project and built another variant of form submission logic with useRef() hook,
   and using it's `ref={ **value or UI element }` prop.

simple explanation - `useRef()` hook allows us to create a mutable reference of a value or DOM element without triggering the component rerender When the value for the DOM element changes. 

✅ episode 35 - Learned about - how to add form validations on form inputs in React and show Error massages

✅ episode 36 - 
1) Learned about advanced form validation logic using the custom form validation configurations object approach. in form validation configurations object 
   we can write our all input validation rules and then we can loop trough every rule to perform validations on all of our input fields in form. 
2) made reusable components for input & select filed.
3) used reusable input components & implemented advanced form validation using custom form validation configurations object approach.
`Important realization : - we can use .some() method while performing validations, the .some() method will loop on every iterable if we return "true" at end` 

✅ episode 37 - 
coded an advance, reusable, dynamic `useFilter()` custom hook for use it anywhere in our project. this function takes an `dataArray` to perform filtration, and a `call back function` which takes the exact filed form data array we want to filter. it takes dataArray & filter filed call back Fn and returns `filtered data array` and `setQuery()` hook to set the filter Query, if the filter query would change in future.  

✅ episode 38 -
1) Made a custom Context Menu with edit and delete options.
2) Added delete functionality on expenses. - when the user clicks on context menu, then delete option the task will be deleted from Expense table

✅ episode 39 -
1) Added Edit functionality - when the user clicks on edit option on the context menu -> the selected expense item data will be populated on the Add expense form -> Add button's text will be changes to 'Save' -> changes will be added to the expense table ->  
Save button's text will be changes to 'Add' again. 
`Important realization : - always run the setState() call at the end of any function, because form the setState() call the component re-renders it self and the code after it might not work as expected!` 

✅ episode 40 -
1) `Added Advanced Sorting Functionality` - with the help of this. The user can sort the Expense table by amount (like highest <-> lowest & lowest <-> highest),
   and also the user can sort the Expense table by title, A to Z and Z to A.
2) `Clear sort feature` - Added clear sort Button! used a separate state for storing the original DataArray. The clear sort functionality will never touch the 
   stored DataArray, Instead, it will perform sorting operations on a copy of the stored DataArray. On any sorting action, the sorting functionality will 
   return sorted data, after performing certain sorting operation on the original DataArray. If the user clicks on clear sort, the sorting functionality will
   return the original data array which he saved at the very first.

✅ episode 41 -
1) made an Advanced `useLocalStorage()` - it uses useState, useEffect, and localStorage to set the Expense table data in to localStorage.
   This hook receives a key and initial data, then this hook will set the received initial data with the key in local storage. After that, this hook returns us the data as a state (it use useState() hook behind the scene). Another thing this hook returns is a setData callback function (Just like how the useState hook gives us a set data function), we can use this setData callback function later to update the data which we was set in the local storage using this `useLocalStorage` hook. 
2) Implemented this `useLocalStorage()` hook in my Expense tracker project. 

✅ episode 42 - Introduction & Exploration of React Developer tools 

✅ episode 43 - 
1) Introduction to Tailwind CSS with React + Vite
2) Started new mini project - Added header & home, about, contact & error page components using React-router setup 

✅ episode 44 - 
1) Learned about `NavLink` element - NavLink's `className` prop allows as to pass a call back function in it. in that callBack function
   we can receive an object which included NavLink's active or inactive status. from the call back we can return a string which will be automatically set as the NavLink's class, weather it's a Tailwind's util class or normal class.
2) Built a prototype with NavLinks in new mini project.

✅ episode 45 - 
1) Learned about - `React Portal`: React provides a `createPortal()` Method which takes 2 arguments - first the popup UI element & second the root element in our html file where this first argument (popup UI element) will be rendered. Portal motive & benefits of using it are - it keeps or renders our modals/popups outside the main root elements to prevent the Styling conflicts between popups & page elements.  

✅ episode 46 - Code splitting & lazy loading in React
1) for lazy loading of components we use `lazy()` & `import()` functions of React. like this -
   const Component = lazy(() => import('./Component'))
2) to make the Code splitting & lazy loading work properly we need `<Suspense></Suspense>` component form React. we need to wrap 
   this <Suspense> component on our main component which renders all pages or routes of our application. 
3) this Suspense component gives us a `fallback={<LoadingComponent />}` prop which can paly the role of site/page Loader while 
   our pages/site is loading. 

✅ episode 47 -
1) Learned about legacy `Class Components` in React. -
   class components extends `Component` from react like this - 
   import { Component } from "react";
   class DemoClass extends Component {
      constructor(){
      } 
      render(){
      }
   }
2) useState alternative in class components - this.state for defining state, this.setState for updating state. built a small prototype in project.

✅ episode 48 - Common Lifecycle methods is React
1) Constructor - Runs at very first
2) render - runs when component renders UI on page
3) componentDidMount - runs at the end when a component did render (equivalent to useEffect()) 
4) componentDidUpdate - it never runs at the start, it runs when state update + re-renders (equivalent to useEffect() who is monitoring a state update in his dependency array) 
5) componentWillUnMount - it runs when the Component has excluded form the app (equivalent to useEffect's returned clean up  call back function)

✅ episode 49 - .bind() method on this keyword 

✅ episode 50 - Higher order class components
1) HOCs are best for reusability. child components of a HOC can reuse the state, state updater function and other helper functions given by the Higher order parent class component.
2) built a small prototype of HOC in project

=====================================================================================================================

Hooks i Explored in React.js - 
useState
useEffect
useContext
useRef

React-router Hooks :-
usePrams 
useLocation
useOutletContext