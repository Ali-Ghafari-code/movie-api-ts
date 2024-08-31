"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.getElementById('get-movie-btn').addEventListener('click', () => {
    const movieName = document.getElementById('movie-input').value;
    if (movieName) {
        getMovieData(movieName);
    }
});
function getMovieData(movieName) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = 'b5bf99e2';
        const API_URL = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`;
        try {
            const response = yield fetch(API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            if (data.Response === 'True') {
                displayMovieData(data);
            }
            else {
                throw new Error(data.Error || 'Movie not found');
            }
        }
        catch (error) {
            console.error('Error fetching movie data:', error.message);
            document.getElementById('movie-result').innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        }
    });
}
function displayMovieData(data) {
    const movieHTML = `
        <div class="col-md-6 order-md-1 order-2">
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
        <div class="col-md-6 d-flex flex-column align-items-center justify-content-center order-md-2 order-1">
        <img src="${data.Poster}" alt="${data.Title} Poster" class="img-fluid mb-2">
        </div>
    `;
    document.getElementById('movie-result').innerHTML = movieHTML;
}
