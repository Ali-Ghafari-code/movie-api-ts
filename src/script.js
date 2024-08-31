var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
document.getElementById('get-movie-btn').addEventListener('click', function () {
    var movieName = document.getElementById('movie-input').value;
    if (movieName) {
        getMovieData(movieName);
    }
});
function getMovieData(movieName) {
    return __awaiter(this, void 0, void 0, function () {
        var API_KEY, API_URL, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    API_KEY = 'b5bf99e2';
                    API_URL = "https://www.omdbapi.com/?t=".concat(encodeURIComponent(movieName), "&apikey=").concat(API_KEY);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(API_URL)];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (data.Response === 'True') {
                        displayMovieData(data);
                    }
                    else {
                        throw new Error(data.Error || 'Movie not found');
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error fetching movie data:', error_1.message);
                    document.getElementById('movie-result').innerHTML = "<p class=\"text-danger\">Error: ".concat(error_1.message, "</p>");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function displayMovieData(data) {
    var movieHTML = "\n        <div class=\"col-6 d-flex\">\n        <h3>".concat(data.Title, " (").concat(data.Year, ")</h3>\n        <img src=\"").concat(data.Poster, "\" alt=\"").concat(data.Title, " Poster\" class=\"img-fluid \">\n        </div>\n        <div class=\"col-6\">\n        <p><strong>Director:</strong> ").concat(data.Director, "</p>\n        <p><strong>Actors:</strong> ").concat(data.Actors, "</p>\n        <p><strong>Genre:</strong> ").concat(data.Genre, "</p>\n        <p><strong>Plot:</strong> ").concat(data.Plot, "</p>\n        <p><strong>IMDB Rating:</strong> ").concat(data.imdbRating, " / 10</p>\n        </div>\n    ");
    document.getElementById('movie-result').innerHTML = movieHTML;
}
