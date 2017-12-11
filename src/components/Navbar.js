import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Navbar extends Component {
    render() {
        return (
            <View>
                <Text onPress={() => Actions.popularMovies()}>Popular  Movies</Text>
                <Text onPress={() => Actions.cinemaMovies()}>In Cinema Now </Text>
                <Text onPress={() => Actions.kidsMovies()}>Kids Movies</Text>
                <Text onPress={() => Actions.dramaMovies()}>Best Drama</Text>
                <Text onPress={() => Actions.search()}>Search</Text>
            </View>
        );
    }
}

export default Navbar;
