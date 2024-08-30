interface MovieData {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Array<{ Source: string; Value: string }>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    Error?: string;
}

document.getElementById('get-movie-btn')!.addEventListener('click', () => {
    const movieName = (document.getElementById('movie-input') as HTMLInputElement).value;
    if (movieName) {
        getMovieData(movieName);
    }
});

async function getMovieData(movieName: string): Promise<void> {
    const API_KEY = 'b5bf99e2';
    const API_URL = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: MovieData = await response.json();

        if (data.Response === 'True') {
            displayMovieData(data);
        } else {
        
            throw new Error(data.Error || 'Movie not found');
        }
    } catch (error: any) {
        console.error('Error fetching movie data:', error.message);
        document.getElementById('movie-result')!.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    }
}

function displayMovieData(data: MovieData): void {
    const movieHTML = `
        <div class="col-6">
        <h3 class="text-center my-2">${data.Title} (${data.Year})</h3>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Actors:</strong> ${data.Actors}</p>
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Country:</strong> ${data.Country}</p>
        <p><strong>Type:</strong> ${data.Type}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${data.imdbRating} / 10</p>
        <p><strong>Awards:</strong> ${data.Awards} / 10</p>
        </div>
        <div class="col-6 d-flex flex-column align-items-center justify-content-center">
        <img src="${data.Poster}" alt="${data.Title} Poster" class="img-fluid mb-2">
        </div>
    `;
    document.getElementById('movie-result')!.innerHTML = movieHTML;
}
