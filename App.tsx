/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import {Text} from 'react-native';


const App = () => {
    const getFullName = (firstName : string, middleName: string, age: number) => {
        return (`hi, I'm ${firstName} ${middleName} and I'm ${age} years old`);
    };

    return (
        <Text>
            {getFullName('Emmanuel', 'Ayodele', 20)}
        </Text>
    );
};

export default App;
