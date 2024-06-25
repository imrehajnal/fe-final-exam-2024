### Project Specification

#### Project Overview
Create a responsive single-page React application that displays a list of cute cats with images, names, and descriptions. The goal is to focus on site-building with clean JSX and plain CSS.

#### Requirements
1. Create and organize components for the application.
2. Use static data to display a list of cats.
3. Style the application using plain CSS.
4. Ensure the application is responsive and looks good on different screen sizes.

### Steps

#### Step 1: Setup and Installation

1. **Organize the Project Structure**
   - Inside the `src` folder, create a `components` folder.
   - Plan your folder structure to have the following:
     ```
     src/
       components/
         Header.js
         CatCard.js
       App.js
       App.css
     ```

2. **Clean Up**
   - Delete unnecessary files.

#### Step 2: Create Components

1. **Header Component**
   - Create a `Header.js` file in the `components` folder.
   - Define a functional component that renders the title and subtitle of the page.
   - Export the component.

2. **CatCard Component**
   - Create a `CatCard.js` file in the `components` folder.
   - Define a functional component that accepts props to display an individual cat's image, name, and description.
   - Export the component.

#### Step 3: Main App Component

1. **Define Static Data**
   - In `App.js`, define an array of objects representing the cats. Each object should have properties like `id`, `name`, `image`, and `description`.
   - Data:
     ```javascript
     const cats = [
       {
         id: 1,
         name: 'Mittens',
         image: 'https://cdn2.thecatapi.com/images/in-CD5LH5.jpg',
         description: 'A very cute and fluffy cat.'
       },
       {
         id: 2,
         name: 'Whiskers',
         image: 'https://cdn2.thecatapi.com/images/5txKBK89Y.jpg',
         description: 'Loves to play with yarn.'
       },
       {
         id: 3,
         name: 'Shadow',
         image: 'https://cdn2.thecatapi.com/images/Z5Wd0A-r_.jpg',
         description: 'Enjoys napping in the sun.'
       }
     ];
     ```

2. **Import Components**
   - Import the `Header` and `CatCard` components into `App.js`.

3. **Render the Components**
   - Use the `Header` component at the top of your `App` component.
   - Map over the array of cats to render a `CatCard` for each cat, passing the relevant data as props.

#### Step 4: Styling with CSS

1. **Create a CSS File**
   - Create an `App.css` file in the `src` folder.

2. **Add General Styles**
   - Style the `body` to use a clean and simple font-family like Arial or sans-serif.
   - Apply a margin and padding reset to ensure consistency across browsers.

3. **Style the Header**
   - Center-align the text.
   - Add padding and a background color for better visibility.

4. **Style the Cat Cards**
   - Add a border, border-radius, and box-shadow to the card.
   - Ensure the image is responsive and covers the card properly.
   - Add padding to the content inside the card.

5. **Responsive Grid Layout**
   - Use CSS Grid or Flexbox to create a responsive layout for the cat cards.
   - Ensure the grid adjusts based on the screen size (e.g., a single column on small screens, multiple columns on larger screens).

#### Step 5: Testing and Final Touches

1. **Check Responsiveness**
   - Test the application on different screen sizes to ensure it looks good and functions correctly.

2. **Make Adjustments**
   - Adjust the CSS as needed to fix any layout or styling issues.

3. **Final Testing**
   - Make sure all the data is displaying correctly and the application is responsive.

## Mobile
![mobile](/sitebuild/mobile.png)

## Tablet
![tablet](/sitebuild/tablet.png)

## Large
![large](/sitebuild/large.png)
