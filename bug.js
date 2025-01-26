```javascript
import {useRouter} from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/new-page');
    // Perform some action after navigation
    console.log('Navigation completed');
  };

  return (
    <button onClick={handleClick}>Go to New Page</button>
  );
}

export default MyComponent; 
```