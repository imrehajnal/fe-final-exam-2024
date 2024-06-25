#### Objectives

1. Create two screens using `react-router-dom`. (List of rooms and furnitures)
2. Use Tailwind CSS for styling or any thrird party utils.
3. Implement a loading state for each screen.
4. Create links to navigate from the home screen to the room detail page.
5. Display a list of furniture items in the room detail page.
6. Implement search functionality for furniture by weight and price.

#### Notes

1. Use **USD** currency formatting 
2. Use the react-icons library for the arrow icon
3. react-query is preferred for async operations, but not mandatory 

#### Steps

1. **Home Screen (List of Rooms)**

   - Fetch the list of rooms from the API and display them.
   - Implement a loading state while the data is being fetched.
   - Create links for each room to navigate to the room detail page.

2. **Room Detail Screen**
   - Fetch the list of furniture for a specific room.
   - Display the furniture items in a list.
   - Implement search fields to filter the furniture list by weight and price.

#### Element IDs (for testing)

1. List of rooms: **rooms**
2. Search by weight input: **weight**
3. Search by price: **price**
4. Furnitures table: **furnitures**

#### API Documentation

##### Rooms API

- **Endpoint**: `/api/rooms`
- **Method**: GET
- **Response**:
  ```json
  {
    "rooms": [
      { "id": "1", "name": "Living Room" },
      { "id": "2", "name": "Bedroom" },
      { "id": "3", "name": "Kitchen" }
    ]
  }
  ```

##### Room Furniture API

- **Endpoint**: `/api/rooms/:id/furnitures`
- **Method**: GET
- **Response**:
  ```json
  {
    "furnitures": [
      { "id": "1", "name": "Sofa", "weight": 50, "price": 300 },
      { "id": "2", "name": "Coffee Table", "weight": 20, "price": 100 },
      { "id": "3", "name": "TV Stand", "weight": 25, "price": 150 }
    ]
  }
  ```

![spec!](/react/spec.png)
