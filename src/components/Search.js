import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ScrollView, View } from 'react-native';
import * as actions from './../actions';
import ListMovie from './ListMovie';
import { Spinner, Input } from './common';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.search({ target: { value: '' } });
    }

    search = (e) => {
      const query = e;
      const params = {};
      if (query !== '') {
        params.query = query;
      } else {
        params.query = '';
      }
      this.props.actions.getMovies(params, '/3/search/movie?');
    }

    render() {
        const { movies } = this.props;
        return (
          <View >
            <Input
                 placeholder="Search for movies..."
                 onChangeText={(e) => this.search(e)}
            />
            <ListMovie movieprops={movies} />

            <ScrollView contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}>
                <ListMovie movie={movies.data.results} />
            </ScrollView>
          </View >
        );
    }
}

Search.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { movies, isLoading, error } = state;
    return {
        movies,
        isLoading,
        error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
