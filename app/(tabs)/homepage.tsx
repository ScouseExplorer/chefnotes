import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomePage = () => {
    const handleFeaturePress = (feature: string) => {
        Alert.alert(`Feature: ${feature}`);
    }
    
    return (
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.container}>
             <ScrollView contentContainerStyle={styles.scrollContent}>
                 <View style={styles.row}>
                     <Pressable style={[styles.box1, styles.firstBox]} onPress={() => handleFeaturePress('Feature 1')}>
                         <Text style={styles.boxText}>Quick and Healthy</Text>
                     </Pressable>
                     <Pressable style={[styles.box2, styles.secondBox]} onPress={() => handleFeaturePress('Feature 2')}>
                         <Text style={styles.boxText}>High Protein</Text>
                     </Pressable>
                 </View>
                 
                 <View style={styles.row}>
                     <Pressable style={[styles.box1, styles.thirdBox]} onPress={() => handleFeaturePress('Feature 3')}>
                         <Text style={styles.boxText}>Low Carb </Text>
                     </Pressable>
                     <Pressable style={[styles.box2, styles.fourthBox]} onPress={() => handleFeaturePress('Feature 4')}>
                         <Text style={styles.boxText}>Meal Prep Ideas</Text>
                     </Pressable>
                 </View>
                 
                 <View style={styles.row}>
                     <Pressable style={[styles.box1, styles.fifthBox]} onPress={() => handleFeaturePress('Feature 5')}>
                         <Text style={styles.boxText}>Diner Ideas</Text>
                     </Pressable>
                     <Pressable style={[styles.box2, styles.sixthBox]} onPress={() => handleFeaturePress('Feature 6')}>
                         <Text style={styles.boxText}>Your Saved Meals</Text>
                     </Pressable>
                 </View>
                 
                 {/* Additional row of boxes */}
                 <View style={styles.row}>
                     <Pressable style={[styles.box1, styles.seventhBox]} onPress={() => handleFeaturePress('Feature 7')}>
                         <Text style={styles.boxText}>Breakfast Ideas</Text>
                     </Pressable>
                     <Pressable style={[styles.box2, styles.eighthBox]} onPress={() => handleFeaturePress('Feature 8')}>
                         <Text style={styles.boxText}>Dessert Recipes</Text>
                     </Pressable>
                 </View>
                 
                 {/* More content section */}
                 <View style={styles.sectionContainer}>
                     <Text style={styles.sectionTitle}>Popular This Week</Text>
                     <View style={styles.row}>
                         <Pressable style={[styles.box1, styles.ninthBox]} onPress={() => handleFeaturePress('Feature 9')}>
                             <Text style={styles.boxText}>Trending Recipes</Text>
                         </Pressable>
                         <Pressable style={[styles.box2, styles.tenthBox]} onPress={() => handleFeaturePress('Feature 10')}>
                             <Text style={styles.boxText}>Chef's Choice</Text>
                         </Pressable>
                     </View>
                 </View>
             </ScrollView>
            </View>
           
        </SafeAreaView>
        

        
    );

    
};

export default HomePage;

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    scrollContent: {
        alignItems: 'stretch', // Allow full width for positioning
        paddingTop: 20,
        paddingBottom: 150, // Increased padding to account for Expo's footer
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    box1: {
        width: 170,
        height: 50,
        position: 'relative',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    box2: {
        width: 170,
        height: 50,
        position: 'relative',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    firstBox: {
        backgroundColor: '#007AFF',
    },
    secondBox: {
        backgroundColor: '#007AFF',
    },
    thirdBox: {
        backgroundColor: '#007AFF',
    },
    fourthBox: {
        backgroundColor: '#007AFF',
    },
    fifthBox: {
        backgroundColor: '#007AFF',
    },
    sixthBox: {
        backgroundColor: '#007AFF',
    },
    seventhBox: {
        backgroundColor: '#007AFF',
    },
    eighthBox: {
        backgroundColor: '#007AFF',
    },
    ninthBox: {
        backgroundColor: '#007AFF',
    },
    tenthBox: {
        backgroundColor: '#007AFF',
    },
    sectionContainer: {
        marginTop: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 15,
    },
    boxText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
