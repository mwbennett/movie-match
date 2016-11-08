import React, { Component } from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const movieData = [
  {
    "title": "Titanic",
    "imdbId": "tt0120338",
    "releaseDate": "1997-12-14T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 1997,
    "releaseMonth": 11,
    "releaseDay": 14
  },
  {
    "title": "Shakespeare in Love",
    "imdbId": "tt0138097",
    "releaseDate": "1998-12-08T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 1998,
    "releaseMonth": 11,
    "releaseDay": 8
  },
  {
    "title": "American Beauty",
    "imdbId": "tt0169547",
    "releaseDate": "1999-09-08T04:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 1999,
    "releaseMonth": 8,
    "releaseDay": 8
  },
  {
    "title": "Gladiator",
    "imdbId": "tt0172495",
    "releaseDate": "2000-05-01T04:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2000,
    "releaseMonth": 4,
    "releaseDay": 1
  },
  {
    "title": "A Beautiful Mind",
    "imdbId": "tt0268978",
    "releaseDate": "2001-12-13T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2001,
    "releaseMonth": 11,
    "releaseDay": 13
  },
  {
    "title": "Chicago",
    "imdbId": "tt0299658",
    "releaseDate": "2002-12-18T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2002,
    "releaseMonth": 11,
    "releaseDay": 18
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "imdbId": "tt0167260",
    "releaseDate": "2003-12-17T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2003,
    "releaseMonth": 11,
    "releaseDay": 17
  },
  {
    "title": "Million Dollar Baby",
    "imdbId": "tt0405159",
    "releaseDate": "2004-12-15T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2004,
    "releaseMonth": 11,
    "releaseDay": 15
  },
  {
    "title": "Crash",
    "imdbId": "tt0375679",
    "releaseDate": "2005-04-26T04:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2005,
    "releaseMonth": 3,
    "releaseDay": 26
  },
  {
    "title": "The Departed",
    "imdbId": "tt0407887",
    "releaseDate": "2006-09-26T04:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2006,
    "releaseMonth": 8,
    "releaseDay": 26
  },
  {
    "title": "No Country for Old Men",
    "imdbId": "tt0477348",
    "releaseDate": "2007-11-04T04:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2007,
    "releaseMonth": 10,
    "releaseDay": 4
  },
  {
    "title": "Slumdog Millionaire",
    "imdbId": "tt1010048",
    "releaseDate": "2008-11-12T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2008,
    "releaseMonth": 10,
    "releaseDay": 12
  },
  {
    "title": "The Hurt Locker",
    "imdbId": "tt1655246",
    "releaseDate": "2009-01-29T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2009,
    "releaseMonth": 0,
    "releaseDay": 29
  },
  {
    "title": "The King's Speech",
    "imdbId": "tt1504320",
    "releaseDate": "2010-12-24T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2010,
    "releaseMonth": 11,
    "releaseDay": 24
  },
  {
    "title": "The Artist",
    "imdbId": "tt1655442",
    "releaseDate": "2011-11-23T05:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2011,
    "releaseMonth": 10,
    "releaseDay": 23
  },
  {
    "title": "Argo",
    "imdbId": "tt1024648",
    "releaseDate": "2012-10-04T04:00:00.000Z",
    "releaseCountry": "USA",
    "releaseYear": 2012,
    "releaseMonth": 9,
    "releaseDay": 4
  }
]

export default class MovieListPage extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({rowHasChanged: (movie1, movie2) => movie1.imdbId !== movie2.imdbId});
    this.state = {
      dataSource: dataSource.cloneWithRows(movieData)
    };
  }

  _renderMovieListItem = (movie) => {
    console.log(movie);
    return (
      <View style={styles.movieItem}>
        <Text>{movie.title}</Text>
        <Text>{movie.releaseYear}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this._renderMovieListItem}
        style={styles.listView}
      />
    )
  }
}


const styles = StyleSheet.create({
  listView: {
    flex: 1
  },
  movieItem: {
    flex: 1
  }
});
