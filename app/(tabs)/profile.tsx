import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
    const handleOptionPress = (option: string) => {
        console.log(`${option} pressed`);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <Text style={styles.title}>Profile</Text>
                    
                    <View style={styles.profileSection}>
                        <Text style={styles.userName}>Chef User</Text>
                        <Text style={styles.userEmail}>chef@example.com</Text>
                    </View>

                    <View style={styles.optionsContainer}>
                        <Pressable style={styles.option} onPress={() => handleOptionPress('Settings')}>
                            <Text style={styles.optionText}>Settings</Text>
                        </Pressable>
                        <Pressable style={styles.option} onPress={() => handleOptionPress('My Recipes')}>
                            <Text style={styles.optionText}>My Recipes</Text>
                        </Pressable>
                        <Pressable style={styles.option} onPress={() => handleOptionPress('Help')}>
                            <Text style={styles.optionText}>Help & Support</Text>
                        </Pressable>
                        <Pressable style={styles.option} onPress={() => handleOptionPress('About')}>
                            <Text style={styles.optionText}>About</Text>
                        </Pressable>
                        <Pressable style={[styles.option, styles.logoutOption]} onPress={() => handleOptionPress('Logout')}>
                            <Text style={[styles.optionText, styles.logoutText]}>Log Out</Text>
                        </Pressable>
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
        paddingTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 40,
        padding: 20,
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        width: '100%',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
    },
    optionsContainer: {
        width: '100%',
    },
    option: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: 'center',
    },
    logoutOption: {
        backgroundColor: '#FF3B30',
        marginTop: 20,
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    logoutText: {
        color: '#fff',
    },
});

export default Profile;
