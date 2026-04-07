// Define the Movie class
class Movies {
  constructor(title, cast, description, rating) {
    this.title = title;
    this.cast = cast;
    this.description = description;
    this.rating = rating;
}
}

  // title, cast, description, rating


  // Method to update the rating of the movie
  updateRating(rating) {
    this.rating = rating ;
  }
  
  // Method to display the movie's information
movie.displayInfo();


// Test your implementation
const movie = new Movies("The Matrix", 
  ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"], 
  "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.", 8.7);

// Display the initial information of the movie
movie.displayInfo();

// Update the rating of the movie
movie.updateRating(9.0);

// Display the updated information of the movie
movie.displayInfo();