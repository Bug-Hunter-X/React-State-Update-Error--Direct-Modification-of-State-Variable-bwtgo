# React State Update Error: Direct Modification of State Variable

This repository demonstrates a common error in React when directly modifying state variables outside of the `setState` function (or the equivalent `useState` update function).  Direct manipulation will not trigger a re-render and will lead to unexpected behavior.

The `bug.js` file contains the erroneous code, which attempts to update state directly using assignment, which is incorrect in React.

The `bugSolution.js` file provides the correct implementation which demonstrates the usage of the `setCount` function from the `useState` hook to update the state correctly.