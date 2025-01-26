```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    const handleRouteChangeComplete = (url) => {
      console.log('Navigation completed to:', url);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.push('/new-page');
    
    //Clean up event listener after navigation
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  };

  return (
    <button onClick={handleClick}>Go to New Page</button>
  );
}

export default MyComponent; 
```