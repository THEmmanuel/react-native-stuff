/* eslint-disable prettier/prettier */

import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },

    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#e2e2e2',
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


const App = () => {
    return (
        <View style={styles.container}>
            <SectionList sections={
                [
                    { title: 'D', data: ['Dan', 'Devin', 'Dummy'] },
                    { title: 'E', data: ['Emmanuel', 'Ella', 'Eugene'] },
                ]
            }
                renderItem={({ item }) => <Text style={styles.item}>
                    {item}
                </Text>}

                renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>
                    {section.title}
                </Text>}

                keyExtractor={(item, index) => index}

            />

        </View>
    );
};

export default App;
