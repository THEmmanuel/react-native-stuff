/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState } from 'react';
import { View, Text, Button } from 'react-native';

const Cat = (props: any) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>
                Hi, I'm {props.name}, and i'm {isHungry ? 'hungry' : 'okay'}
            </Text>

            <Button
                onPress={() => setIsHungry(false)}
                disabled={!isHungry}
                title={isHungry ? 'pour me some milk hooman!' : 'pfft, whatever'}
            />
        </View>
    );
};

const App = () => {
    return (
        <>
            <Cat name="Tom" />
            <Cat name="Ginger" />
        </>
    );
};

export default App;
