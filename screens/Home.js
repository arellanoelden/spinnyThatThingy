import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, Button, StyleSheet } from 'react-native';

const WHEELS = [
  {
    wheelName: 'wheel1',
    data: [
      {
        label: 'Option1',
        weight: 1,
      },
      {
        label: 'Option3',
        weight: 1,
      },
      {
        label: 'Option2',
        weight: 1,
      },
    ],
  },
];

const Home = ({ navigation, route }) => {
  const newWheel = route.params?.newWheel;
  const [wheels, setWheels] = useState(WHEELS);

  useEffect(() => {
    if (newWheel) {
      setWheels((wheels) => [newWheel, ...wheels]);
    }
  }, [newWheel]);

  return (
    <View style={styles.container}>
      <SectionList
        sections={wheels}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.label}: {item.weight}
            </Text>
          );
        }}
        keyExtractor={(item) => item.label}
        renderSectionHeader={({ section }) => <Text>{section.wheelName}</Text>}
      />
      <View style={styles.button}>
        <Button
          onPress={() => {
            navigation.navigate('AddWheel');
          }}
          title="Add Wheel"
          accessibilityLabel="Add a new wheel"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    width: '35%',
    alignSelf: 'flex-end',
  },
});

export default Home;
