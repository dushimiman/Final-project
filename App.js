import { StatusBar } from 'expo-status-bar';
import { 
  Dimensions, StyleSheet, Text, View,
  Image 
} from 'react-native';

import Landing from './components/Landing';

export default function App() {
  return (
    <Landing/>
  );
}

const {height} = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d60033',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
