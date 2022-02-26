import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <MapView showsUserLocation={true} style={styles.map}>
        <Marker title='Jegricka bridge' description='Great for portrait photos!' coordinate={{latitude: 45.454396, longitude: 19.884825}} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});