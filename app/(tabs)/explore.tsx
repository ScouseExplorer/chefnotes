import { Image } from 'expo-image';
import { Platform, SafeAreaView, StyleSheet, TextInput } from 'react-native';

import { useState } from 'react';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  }
  return (
    <SafeAreaView style={{flex:1, marginHorizontal: 20}}>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        style={styles.searchBox}
        autoCapitalize="none"
        autoCorrect={false}
        value={searchQuery}
        onChangeText={(query) => setSearchQuery(query)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 searchBox: {
  paddingHorizontal:20,
  paddingVertical:10,
  borderColor: '#ccc', 
  borderWidth: 1, 
  borderRadius:8,
 },
});
