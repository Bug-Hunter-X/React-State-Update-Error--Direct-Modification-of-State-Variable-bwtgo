```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly modifying the count variable
    count = count + 1; 
    // Correct: Use the setCount function
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```