import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
      padding: 20, 
      flex: 1,
    },
    input: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 10,
      marginBottom: 10,
    },
    card: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      backgroundColor: '#f8f8f8',
      padding: 10,
      borderRadius: 8,
    },
    logo: {
      width: 100,
      height: 60,
      alignSelf: 'center',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    title: { 
      fontSize: 24 
    }
    
  });
  
  export default styles;