import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert, ScrollView, Image } from 'react-native';
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
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box1, 
                            styles.firstBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                         onPress={() => handleFeaturePress('Feature 1')}
                     >
                         <Text style={styles.boxText}>Quick and Healthy</Text>
                     </Pressable>
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box2, 
                            styles.secondBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                        onPress={() => handleFeaturePress('Feature 2')}
                     >
                         <Text style={styles.boxText}>High Protein</Text>
                     </Pressable>
                 </View>
                 
                 <View style={styles.row}>
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box1, 
                            styles.thirdBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                        onPress={() => handleFeaturePress('Feature 3')}
                     >
                         <Text style={[styles.boxText, styles.lowCarbText]}>Low Carb </Text>
                         <Image
                             source={require('../../assets/images/lowcarb.jpg')}
                             style={styles.dinnerImage}
                             resizeMode="cover"
                            />
                     </Pressable>
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box2, 
                            styles.fourthBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                        onPress={() => handleFeaturePress('Feature 4')}
                     >
                         <Text style={styles.boxText}>Meal Prep Ideas</Text>
                     </Pressable>
                 </View>
                 
                 <View style={styles.row}>
                    <Pressable 
                       style={({ pressed }) => [
                           styles.box1, 
                           styles.fifthBox,
                           {
                               backgroundColor: pressed ? '#005bb5' : '#007AFF',
                               transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                           }
                       ]} 
                       onPress={() => handleFeaturePress('Feature 5')}
                    >
                        <Text style={[styles.boxText, styles.dinnerText]}>Dinner Ideas</Text>
                        <Image
                            source={require('../../assets/images/Homemade-lasagna.png')}
                            style={styles.dinnerImage}
                            resizeMode="cover"
                        />
                    </Pressable>
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box2, 
                            styles.sixthBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                        onPress={() => handleFeaturePress('Feature 6')}
                     >
                         <Text style={styles.boxText}>Your Saved Meals</Text>
                     </Pressable>
                 </View>
                 
                 {/* Additional row of boxes */}
                 <View style={styles.row}>
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box1, 
                            styles.seventhBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                        onPress={() => handleFeaturePress('Feature 7')}
                     >
                         <Text style={[styles.boxText, styles.breakfastText]}>Breakfast Ideas</Text>
                         <Image
                             source={require('../../assets/images/download.jpg')}
                             style={styles.breakfastImage}
                             resizeMode="cover"
                         />
                     </Pressable>
                     <Pressable 
                        style={({ pressed }) => [
                            styles.box2, 
                            styles.eighthBox,
                            {
                                backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                            }
                        ]} 
                        onPress={() => handleFeaturePress('Feature 8')}
                     >
                         <Text style={styles.boxText}>Dessert Recipes</Text>
                     </Pressable>
                 </View>
                 
                 {/* More content section */}
                 <View style={styles.sectionContainer}>
                     <Text style={styles.sectionTitle}>High Protein Dishes</Text>
                     <View style={styles.row}>
                         <Pressable 
                            style={({ pressed }) => [
                                styles.box1, 
                                styles.ninthBox,
                                {
                                    backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                    transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                                }
                            ]} 
                            onPress={() => handleFeaturePress('Feature 9')}
                         >
                             <Text style={styles.boxText}>Trending Recipes</Text>
                         </Pressable>
                         <Pressable 
                            style={({ pressed }) => [
                                styles.box2, 
                                styles.tenthBox,
                                {
                                    backgroundColor: pressed ? '#005bb5' : '#007AFF',
                                    transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
                                }
                            ]} 
                            onPress={() => handleFeaturePress('Feature 10')}
                         >
                             <Text style={styles.boxText}>Chef's Choice</Text>
                         </Pressable>
                     </View>
                     <Text style={styles.sectionTitle}>Easy Dinner Recipes</Text>
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
        // Increased padding to account for Expo's footer
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
            right : 80,
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            marginBottom: 15,
        },
        boxText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: -6, // <-- Add this line to move text up a bit
        },

        dinnerText: {
            position: 'absolute',
            right: 10, // Controls how far from the right edge
            top: '40%',
            transform: [{ translateY: -10 }], // Centers text vertically
        },
        dinnerImage: {
            width: 50,
            height: 50, // This will now work with resizeMode="cover"
            position: 'absolute',
            left: 0.1,
            top: 0.1,
            borderRadius: 4,
        },
        breakfastText: {
            position: 'absolute',
            right: 4, // Controls how far from the right edge
            top: '40%',
            transform: [{ translateY: -10 }], // Centers text vertically
            fontSize: 14.2,
        },
        breakfastImage: {
            width: 50,
            height: 50, // This will now work with resizeMode="cover"
            position: 'absolute',
            left: 0.1,
            top: 0.1,
            borderRadius: 4,
        },
        lowCarbText: {
            position: 'absolute',
            right: 30, // Controls how far from the right edge
            top: '40%',
            transform: [{ translateY: -10 }], // Centers text vertically
        },
        lowCarbImage: {
            width: 50,
            height: 50, // This will now work with resizeMode="cover"
            position: 'absolute',
            left: 0.1,
            top: 0.1,
            borderRadius: 4,
        },
})
