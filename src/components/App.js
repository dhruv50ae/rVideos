import SearchBar from "./SearchBar";

import React, { Component } from "react";
import youtube from "../apis/youtube";

export default class App extends Component {
  onTermSubmit = (term) => {
    console.log(term);
    youtube.get("/search", { params: { q: term } });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
