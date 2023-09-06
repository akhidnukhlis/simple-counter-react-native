import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      alignItems: 'center',
      marginBottom: 10,
    },
});

export default styles;