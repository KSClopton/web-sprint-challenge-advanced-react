# Sprint Challenge: Advanced React - React Plants 🌿

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored some advanced React topics ⚛️. During this sprint, you studied class components, the component lifecycle and class component lifecycle methods, custom hooks, and React Testing Library 🐙. In your challenge this week, you will demonstrate your mastery of these skills by creating an app that will fetch data from a local server using a class component, displaying that data, using a custom hook, and writing tests for your app.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction.

_You have **three hours** to complete this challenge. Plan your time accordingly._

## Introduction

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:

[Plant List Page](https://tk-assets.lambdaschool.com/88008802-846c-46bb-8cf8-11ace219e2bf_ScreenShot2020-04-30at12.39.22PM.png)

[Successful Form Submission](https://tk-assets.lambdaschool.com/90ebefd4-ee0f-4b1c-884c-1336ce87441d_ScreenShot2020-04-30at12.40.56PM.png)

You will also need to build the two tests in the `CheckoutForm.test.js` file and make sure they are testing what the test title says they are.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Explain how to build stateful class components.

  Stateful class components extend from React.Component. They use a constructor to build out components and update state. State is set using this.setState and then update with desired results. Correct states are then passed around as needed to various components. Make sure to use this.state to link to the state.

2. Describe the different phases of the component lifecycle.

    Phases are:
    1. Mounting - This is the first time a new component mounts
    2. Updating - This is what happens as that component updates ( new props, state changes, forceUpdate - should rarely/ever use!)
    3. Unmounting - This is right before a new component is goign to mount, must unmount the current one.
    
3. Demonstrate an understanding of class component lifecycle methods.

  The lifecycle of components allows logic to automatically hook into certain aspects of the life cycle. They can take advantage of these phases to run some functionality. The methods themselves:
    1. ComponentDidMount - Can use something like an axios request when a component mounts so that it can be filled in with axios results
    2. componentDidUpdate - this occurs multiple times as new updates mount. This can occur A LOT and can cause infiniite loops. (This is when updates trigger functions that trigger updates)
    3. ComponentWillUnmount - As the name suggests, this could be when a user clicks a different portion of the website leading to a new component. The original component must first unmount. 

4. Define stateful logic.

  Logic that keeps state. State is almost like the status of something. As the user interfaces with website, changes in state will occur depending on the logic in place.

5. Describe how to test a React component with React Testing Library.

  Must have a file ending in tests.js. React will look through this file. Import testing library. Then write out your tests in orderly fashion:
    1. Must name your test
    2. Must render your components
    3. Must make queries 
    4. Must make assertions - what you expect to happen with the results from the queries.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.

## Instructions

### Task 1: Project Set Up

_This project uses a local server for the data fetching. You will need three seperate terminal windows open:_

1. _one for your server_
2. _one for your React app (in the /client folder)_
3. _and one to run your tests_

_Please follow the setup instructions closely so that you can get everything up and running smoothly_

**Basic set up**

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.

**Starting the server**

- [ ] Run `npm install` to download dependencies for the server.
- [ ] Run the server using `npm start`.
- [ ] Open a new browser tab and navigate to `http://localhost:3333/plants` - if you see a JSON object with plants data, then you know the server is running 👍

**Starting the React app**

- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm run start` to run the client application.
- [ ] Your browser should open up the project as normal

**Starting your test runner**

- [ ] In the final terminal window, make sure you are in the `client` folder still
- [ ] Start the test runner with `npm test` (I recommend doing this only when you're testing - any change in your app will make the tests run, and that could eat up your computer power)

**Commit and Push OFTEN!**

- [ ] Implement the project on this Branch, **committing progress & changes often.**
- [ ] Push commits: `git push origin <firstName-lastName>`.

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

#### Plant List

Display a list of the plants from the server. This should be done in the class component `PlantList`.

- [ ] In the `PlantList` class component, fetch data from the server you now have running - the data can be fetched from `http://localhost:3333/plants`
- [ ] Set the data to a state property called `this.state.plants`
- [ ] The render function is already built and styled. Once the data is on the state, you will see the list of plants, and you will have the functionality to add a plant to the cart

#### Shopping Cart

Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

- [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic

_Note: You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step._

#### Testing the Checkout Form

- [ ] Build out the tests listed in `CheckoutForm.test.js`. You will need to make sure they are testing what the test title implies they are testing
- [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working

<hr/>
In your solution, it is essential that you follow best practices and produce clean and professional results. You will be scored on your adherence to proper code style and good organization. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- [ ] Add a filter input to the plant list page.
- [ ] Build and implement another custom hook - a dark mode hook would be great for this project, though you'll have to style the light theme ☀️ 🌙
- [ ] Add a test file for the `ShoppingCart` component and test that it displays plants there (you'll need some mock plant data for the test, and then you can pass that data in as a prop when you call `render` and render the component - see the example below)

```js
const plants = {{}, {}, {}} // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)

  ...

})
```

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request
