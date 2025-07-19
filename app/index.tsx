import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    color: '#007AFF',
    fontSize: 16,
  },
  formContainer: {
    marginTop: 30,
    width: '90%',
    alignItems: 'flex-start',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkmark: {
    color: 'green',
    fontSize: 18,
    marginRight: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wilkommen</Text>
      <View style={styles.formContainer}>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>Quick and Easy Recipes</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>High Protein Meals</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>Healthy Eating</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.checkmark}>✓</Text>
                <Text style={styles.featureText}>Meal Prep Ideas</Text>
              </View>
      <Link href="/(tabs)" style={styles.link}>
        Login
      </Link>
      
      </View>
    </View>
  );
}