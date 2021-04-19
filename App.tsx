/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */


import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

const App = () => {
    const [text, setText] = useState('');

    return (
        <View style={
            {
                padding: 10,
            }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Translate shit to pizza"
                onChangeText={(currentText) => setText(currentText)}
            />

            <Text
                style={{
                    padding: 10,
                    fontSize: 40,
                }}>
                {text.split(' ').map(word => word && '😆').join(' ')}
            </Text>
        </View>
    );
};

export default App;
