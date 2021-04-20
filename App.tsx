/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: '#FFFFFF',
    },

    red: {
        color: 'red',
    },

    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },

});

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>
                This will be red!
            </Text>

            <Text style={styles.bigBlue}>
                Big and bloo!
            </Text>

            <Text style={[styles.bigBlue, styles.red]}>
                First, I'll be big and bloo! and then turn red!
            </Text>

            <Text style={[styles.red, styles.bigBlue]}>
                Red, then big 'n bloo!
            </Text>
        </View>
    );
};

export default App;
