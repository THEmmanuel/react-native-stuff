/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text } from 'react-native';

const Cat = (props: any) => {
    return (
        <View>
            <Text>Hello, I'm {props.name}</Text>
        </View>
    );
};

const App = () => {
    return (
        <View>
            <Cat name="Tom" />
            <Cat name="Scott" />
            <Cat name="Ginger" />
        </View>
    );
};

export default App;
