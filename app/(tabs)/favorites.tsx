import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Favorites = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.title}>Your Favorite Recipes</Text>
                    <View style={styles.placeholderContainer}>
                        <Text style={styles.placeholderText}>No favorites yet!</Text>
                        <Text style={styles.subtitleText}>Start exploring recipes and save your favorites here.</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 16,
    },
    scrollContent: {
        alignItems: 'center',
        paddingTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    placeholderContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    placeholderText: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    subtitleText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
    },
});

export default Favorites;
