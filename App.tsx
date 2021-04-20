/* eslint-disable prettier/prettier */


import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            paddingTop: 22,
        },

        item: {
            padding: 10,
            fontSize: 18,
            height: 44,
        },
    }
);

const App = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={
                    [
                        { key: 'Emmanuel' },
                        { key: 'Ben' },
                        { key: 'Jude' },
                        { key: 'Mark' },
                        { key: 'Luna' },
                        { key: 'Drew' },
                        { kwy: 'Seun' },
                        { key: 'Jimmy' },
                    ]
                }
                // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
};

export default App;
