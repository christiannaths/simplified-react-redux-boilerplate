# Simplified React-Redux
A boilerplate for adding Redux to a React application

---


## Step 1: Dependencies
Use Yarn or npm to add two required packages:

* `yarn add redux react-redux`
* download and copy the `store/` directory to your react application's `src/` folder.


## Step 2: Actions

Define some actions. We’ll use these actions later in our component event handlers to manipulate data in the store. In this somewhat contrived example, I am creating actions to handle toggling the user notification settings in my app.

[./store/actions.js](../blob/master/store/actions.js)

Here we’re doing two things. First, defining and exporting a TYPES declaration, which we will use when we handle the action. Second, we’re defining and exporting an actions object, in which we’ve defined a function to pass data along to our reducer.


## Step 3: Reducers

[./store/reducers.js](../blob/master/store/reducers.js)

In this file we’ll create and export our reducers. Reducers are used to determine how data in the Redux store is updated.

## Step 4: Store and Provider

[./store/index.js](../blob/master/store/index.js)

Now we’ll import reducers, combine them into a single “root reducer”, and create our store. The createStore method returns a store object to use with React-Redux’s <Provider> component, in which we’ll wrap our entire application before rendering it to the DOM.

[./redux-app.js](../blob/master/redux-app.js)

And that’s it for the setup! Next let’s look at using our Redux store by connecting it to components and dispatching actions.



## Connecting Components

Continuing with my contrived example, let’s create a controlled checkbox component. The settings.notifications key in the Redux store will control the state of the component. 

[./connected-component.js](../blob/master/connected-component.js)

A couple of noteworthy points:

* onChange will dispatch the setNotifications action we created earlier.
mapStateToProps, when passed to connect(), maps keys from the Redux store to props in the component.
* Now any connected component will have access to the value that is set by the above component.
