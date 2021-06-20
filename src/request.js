const API_KEY = "ef112c85d7307079475d6087881ba128";

const request ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchFantasyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=14`,
    fetchRomanceMovies:`/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/tv?api_key=${API_KEY}&with_genres=99`,
}
export default request;