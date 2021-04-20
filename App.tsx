/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    container: {
        height: '50%',
        backgroundColor: 'white',
    },

    firstBloo: {
        flex: 2,
        backgroundColor: 'yellow',
    },

    secondBloo: {
        flex: 2,
        backgroundColor: 'green',
        //width: 100,
        //height: 100,
    },

    thirdBloo: {
        flex: 4,
        backgroundColor: 'red',
        // width: 150,
        // height: 150,
    },
});

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.firstBloo} />
            <View style={styles.secondBloo} />
            <View style={styles.thirdBloo} />
        </View>
    );
};

export default App;
