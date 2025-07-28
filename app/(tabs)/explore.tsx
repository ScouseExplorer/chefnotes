import { Image } from 'expo-image';
import { Platform, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function TabTwoScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search recipes, ingredients..."
          clearButtonMode="always"
          style={styles.searchBox}
          autoCapitalize="none"
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 50 : 10, // More padding for Android
    paddingBottom: 10,
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'android' ? 15 : 12, // Taller on Android
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});
