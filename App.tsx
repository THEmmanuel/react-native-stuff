/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */


import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => (
    <ScrollView>
        <Text>Some Text</Text>
        <View>
            <Text>Some other text</Text>
            <Image source={
                { uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
                style={
                    {
                        width: 200,
                        height: 200,
                    }}
            />
        </View>

        <TextInput
            style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
            }}

            defaultValue="say something"
        />
    </ScrollView>
);

export default App;
