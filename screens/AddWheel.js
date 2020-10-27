import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import AddCategory from '../components/AddCategory';

const AddWheel = ({ navigation }) => {
  const [name, setName] = useState('');
  const [items, setItems] = useState([{ label: '', weight: '1' }]);

  const addWheel = () => {
    const newWheel = {
      wheelName: name,
      data: items,
    };

    console.log(newWheel);
    navigation.navigate('Home', { newWheel });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <View style={styles.button}>
        <Button
          title="Add Category"
          onPress={() => setItems([...items, { label: '', weight: '1' }])}
        />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item.label}${index}`}
        renderItem={({ item, index }) => (
          <AddCategory
            label={item.label}
            weight={item.weight}
            index={index}
            setItems={setItems}
            items={items}
          />
        )}
      />
      <Button onPress={addWheel} title="Add Wheel" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    padding: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    width: '35%',
  },
});

export default AddWheel;
