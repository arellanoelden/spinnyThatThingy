import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';

const AddCategory = ({ label, weight, index, items }) => {
  const [currLabel, setCurrLabel] = useState(label);
  const [currWeight, setCurrWeight] = useState(weight);

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.label}>Category Name</Text>
        <TextInput
          style={styles.input}
          value={currLabel}
          onChangeText={(value) => {
            setCurrLabel(value);
            items[index].label = value;
          }}
        />
      </View>
      <View style={styles.weightContainer}>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          value={currWeight}
          keyboardType="numeric"
          onChangeText={(value) => {
            setCurrWeight(value);
            items[index].weight = value;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  nameContainer: {
    flex: 3,
    marginRight: 10,
  },
  weightContainer: {
    flex: 1,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default AddCategory;
