# Next.js router.push() Navigation Completion Issue

This example demonstrates an uncommon bug in Next.js where `router.push()` doesn't wait for navigation to complete before executing subsequent code. This can lead to unexpected behavior if you perform actions immediately after navigation.

## Bug Description
The issue occurs when using `router.push()` to navigate to a new page, and then trying to execute code that depends on the navigation being completed. The subsequent code might run before the navigation is finished, causing errors or unexpected results.

## How to Reproduce
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Click the button to navigate. Observe that 'Navigation completed' is logged immediately without waiting for navigation to finish.

## Solution
The solution is to use the `router.events` object to listen for the `routeChangeComplete` event, which is fired when navigation is completed. This ensures that the subsequent code runs only after the navigation is finished. 