import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import MovieDetail from "./components/movieDetail/MovieDetail.jsx";
import PageNotFound from "./components/pageNotFound/PageNotFound.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container" >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
