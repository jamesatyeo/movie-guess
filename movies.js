'use strict'

let movies = [];

function Movie(title, star, year, genre) {

    this.title = title;
    this.star = star;
    this.genre = genre;

    this.clue = `This ${year} ${genre} movie starred ${star}.`;
}

function addMovie(title, star, year, genre) {

    let movie = new Movie(title, star, year, genre);

    movies.push(movie);
}

addMovie("The Shawshank Redemption", "Tim Robbins", 1994, "drama");

addMovie("The Godfather", "Marlon Brando", 1972, "crime");

addMovie("Twelve Angry Men", "Henry Fonda", 1957, "drama");

addMovie("The Dark Knight", "Christian Bale", 2008, "action");

addMovie("Pulp Fiction", "John Travolta", 1994, "crime");

addMovie("Fight Club", "Brad Pitt", 1999, "drama");

addMovie("Forrest Gump", "Tom Hanks", 1994, "drama");

addMovie("Inception", "Leonardo DiCaprio", 2010, "action");

addMovie("The Matrix", "Keanu Reeves", 1999, "sci-fi");

addMovie("Goodfellas", "Ray Liotta", 1990, "crime");

addMovie("Seven Samurai", "Toshiro Mifune", 1954, "action");

addMovie("Life Is Beautiful", "Roberto Benigni", 1997, "comedy");

addMovie("City of God", "Alexandre Rodrigues", 2002, "crime");

addMovie("The Silence of the Lambs", "Anthony Hopkins", 1991, "thriller");

addMovie("Saving Private Ryan", "Tom Hanks", 1998, "war");

addMovie("Spirited Away", "Rumi Hiiragi", 2001, "animated");

addMovie("The Green Mile", "Tom Hanks", 1999, "drama");

addMovie("Interstellar", "Matthew McConaughey", 2014, "sci-fi");

addMovie("Parasite", "Kang-ho Song", 2019, "drama");

addMovie("The Usual Suspects", "Kevin Spacey", 1995, "crime");

addMovie("The Lion King", "Matthew Broderick", 1994, "animated");

addMovie("Back to the Future", "Michael J. Fox", 1985, "comedy");

addMovie("The Pianist", "Adrien Brody", 2002, "biography");

addMovie("American History X", "Edward Norton", 1998, "drama");

addMovie("Modern Times", "Charles Chaplin", 1936, "comedy");

addMovie("Psycho", "Anthony Perkins", 1960, "horror");

addMovie("Gladiator", "Russell Crowe", 2000, "drama");

addMovie("The Departed", "Leonardo DiCaprio", 2006, "crime");

addMovie("Whiplash", "J.K. Simmons", 2014, "music");

addMovie("The Prestige", "Hugh Jackman", 2006, "mystery");

addMovie("Once Upon a Time in the West", "Henry Fonda", 1968, "western");

addMovie("Casablanca", "Humphrey Bogart", 1942, "drama");

addMovie("Cinema Paradiso", "Philippe Noiret", 1988, "drama");

addMovie("Rear Window", "James Stewart", 1954, "thriller");

addMovie("Alien", "Sigourney Weaver", 1979, "sci-fi");

addMovie("Apocalypse Now", "Martin Sheen", 1979, "war");

addMovie("Memento", "Guy Pearce", 2000, "mystery");

addMovie("Raiders of the Lost Ark", "Harrison Ford", 1981, "adventure");

addMovie("Django Unchained", "Jamie Foxx", 2012, "western");

addMovie("The Lives of Others", "Ulrich Muhe", 2006, "thriller");

addMovie("The Shining", "Jack Nicholson", 1980, "horror");

addMovie("Sunset Boulevard", "Gloria Swanson", 1950, "noir");

addMovie("Oldboy", "Min-sik Choi", 2003, "mystery");

addMovie("Braveheart", "Mel Gibson", 1995, "drama");

addMovie("Das Boot", "Jurgen Prochnow", 1981, "thriller");

addMovie("Toy Story", "Tom Hanks", 1995, "animated");

addMovie("Amadeus", "F. Murray Abraham", 1984, "biographical");

addMovie("Inglourious Basterds", "Brad Pitt", 2009, "adventure");

addMovie("Good Will Hunting", "Matt Damon", 1997, "drama");

addMovie("Requiem for a Dream", "Jared Leto", 2000, "drama");

addMovie("Vertigo", "James Stewart", 1958, "mystery");

addMovie("Eternal Sunshine of the Spotless Mind", "Jim Carrey", 2004, 'drama');

addMovie("Citizen Kane", "Orson Welles", 1941, "drama");