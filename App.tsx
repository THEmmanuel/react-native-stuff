/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, View, TextInput } from 'react-native';

const App = () => {
    return (
        <View>
            <Text>Peace on earth!</Text>

            <TextInput
                style={{
                    height: 40,
                    borderColor: 'yellow',
                    borderWidth: 1,
                }}

                defaultValue="hey ho!"
            />
        </View>
    );
};

export default App;