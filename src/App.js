import React, {Component} from "react";
import SongCard from "./components/SongCard";
import songs from "./services/songs";
class App extends Component {

    state = {
        songs:songs,
    };

    sortByTitle = (title) => {
       const sortTitle = [...this.state.songs.sort((a, b) =>a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
        this.setState({ songs: sortTitle });
    };
    sortByRating = (rating) => {
       const sortRating = [...this.state.songs.sort((a, b) => b.rating - a.rating)]
        this.setState({ songs: sortRating });
    };
    sortByArtist = (artist) => {};

  render() {
    return (
            <div id="super-tunes">
                <h2 id="st-title">SuperTunes - Songs of the Week</h2>
                <button className="st-btn" onClick={this.sortByTitle}>Sort By Title</button>
                <button className="st-btn" onClick={this.sortByRating}>Sort By Rating</button>
                <div id="song-list">
                    {
                        this.state.songs.map((song) => (
                            <SongCard key={song.id} data={song} />
                        ))
                    }
                </div>
            </div>
    );
  }
}

export default App;
