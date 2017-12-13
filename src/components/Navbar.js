import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RaisedTextButton } from 'react-native-material-buttons';


class Navbar extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <RaisedTextButton
                    title='Popular  Movies'
                    titleStyle={ styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.popularMovies()}
                />
                <RaisedTextButton
                    title='In Cinema Now '
                    titleStyle={ styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.cinemaMovies()}
                />
                <RaisedTextButton
                    title='Kids Movies'
                    titleStyle={ styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.kidsMovies()}
                />
                <RaisedTextButton
                    title='Best Drama'
                    titleStyle={ styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.dramaMovies()}
                />
                <RaisedTextButton
                    title='Search'
                    titleStyle={ styles.buttonStyle}
                    style={styles.textStyle}
                    onPress={() => Actions.search()}
                />
            </View>
        );
    }
}
const styles = {
    buttonStyle: {
        fontSize: 20
    },
    textStyle: {
        padding: 15,
        width: 300,
        height: 60
    },
    viewStyle: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
};

export default Navbar;
