import SearchBar from "./SearchBar";

import React, { Component } from "react";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
  };
  onVideoSelect = (video) => {
    console.log("from the app", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
