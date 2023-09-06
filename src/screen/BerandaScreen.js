import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../style/BerandaScreenStyles';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Nilai Hitung: {count}</Text>

      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={increaseCount}>
              <Text style={styles.buttonText}>Tambah</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={decreaseCount}>
              <Text style={styles.buttonText}>Kurang</Text>
          </TouchableOpacity>
      </View>

    </View>
  );
};


export default Counter;
