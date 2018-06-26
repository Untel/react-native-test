import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputField: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      paddingLeft: 10
    },

    row: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
    },

    col: {
      flex: 1,
      width: '100%',      
      flexDirection: 'column'
    }
});