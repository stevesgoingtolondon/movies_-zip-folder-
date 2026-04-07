document.getElementById("movie-info")

// Define the Movie class
class Movies {
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
  }

  // Method to update the rating of the movie
  updateRating(rating) {
    this.rating = rating;
  }
 // Method to display the movie's information
  displayInfo() {
  }
}

// Test your implementation
const movie = new Movies("The Matrix", 
  ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], 
  "Neo believes that Morpheus, an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix?", 8.7);

// Display the initial information of the movie
movie.displayInfo();

// Update the rating of the movie
movie.updateRating(9.0);

// Display the updated information of the movie
movie.displayInfo();