# E-COMMERCEWEBSITE
Approach
1. Componentization
The application is broken down into reusable, modular components. This ensures that the UI is clean and maintainable:

Header: Contains a search bar and icons for profile and cart.
ProductCard: Displays product details (image, name, price) with "View Product" and "Add to Cart" buttons.
AddToCartModal: Handles the modal display when a user clicks "Add to Cart".
Pagination: Enables navigation through the product list.
ThankYouPage: Redirects users after they click "View Product".
2. Routing
React Router is used to manage navigation between the main product listing page and the custom "Thank You" page. The URL structure is dynamic, incorporating the product name in the "Thank You" page URL.
3. State Management
React Hooks (useState, useEffect) manage the component state such as the selected product in the modal, pagination state, and modal visibility. Context API can be integrated for more complex state management if needed.
4. Mock Data
Static mock product data is used for the purpose of the assignment. This eliminates the need for a backend or API integration and allows the focus to be on UI/UX and front-end functionality.
5. UI/UX
The project follows the design principles from the Figma file, paying attention to layout, button styles, and overall user interaction. Hover states, modal displays, and navigational feedback are implemented to create a smooth experience for users.
Challenges
Dynamic Routing:

Implementing dynamic routes for the "Thank You" page using React Router to include the product name in the URL was a challenge, but it was solved by using React Router’s useParams hook.
Modal Management:

Handling the modal display and interaction state was another challenge. The modal needs to open and close smoothly, and ensuring this behavior with React state management was crucial.
Pagination:

Implementing pagination with mock data required slicing the data array correctly to display the correct products on each page. Handling state changes when navigating pages required careful use of hooks to ensure a responsive UI.
