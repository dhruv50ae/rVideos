import SearchBar from "./SearchBar";

import React, { Component } from "react";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends Component {
  state = { videos: [] };
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
        {this.state.videos.length} videos fetched
      </div>
    );
  }
}
