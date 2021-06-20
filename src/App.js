import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner'
import Nav from './Nav'


function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>

      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <Row title="Romantic Movies" fetchURL={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
