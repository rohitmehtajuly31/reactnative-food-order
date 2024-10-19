// Import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackView } from '@react-navigation/stack';



// Create a component
const HomeNew = () => {
    const SearchBar = ({ value, onChangeText }) => {
        return (
            <View style={styles.searchContainer}>
                <Image
                    source={{ uri: 'https://img.icons8.com/material-outlined/24/000000/search.png' }} // Example icon URL
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        );
    };
       


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop:10 }}>
                
                <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'flex-start', alignItems: 'center', padding: 0}}>
                    <Text style={styles.greetingText}>Greetings</Text>
                    <Image
                        source={require('../src/assets/cartlight.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>

                {/* Second view can be used for additional content */}
                <View style={{ flexDirection: 'row', width: '45%', justifyContent: 'flex-end', alignItems:'center'  }}>
                <Image
                        source={require('../src/assets/bell1.png')}
                        style={[styles.icon, { marginRight: 10 }]}

                        resizeMode="contain"
                    />
                    <Image
                        source={require('../src/assets/cartlight.png')}
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </View>
            </View>
            <SearchBar/>

            {/* horizontal scool */}
            <ScrollView horizontal={true} contentContainerStyle={ {}} >
    <View style={{ alignItems: 'center', marginHorizontal:20}}>
        <Image
            source={require('../src/assets/pizza.png')}
            style={{ width: 50, height: 50, borderRadius: 100 }}
            resizeMode='cover'
        />
        <Text style={{ color: 'black', fontSize: 12, marginTop: 5, fontWeight: 'bold' }}>Greetings</Text>
    </View>
    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Image
            source={require('../src/assets/rice.png')}
            style={{ width: 50, height: 50, borderRadius: 10 }}
            resizeMode='cover'
        />
        <Text style={{ color: 'black', fontSize: 12, marginTop: 5, fontWeight: 'bold' }}>Greetings</Text>
    </View>
    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Image
            source={require('../src/assets/wine.jpeg')}
            style={{ width: 50, height: 50, borderRadius: 100, backfaceVisibility:'hidden' }}
            resizeMode='cover'
        />
        <Text style={{ color: 'black', fontSize: 12, marginTop: 5, fontWeight: 'bold' }}>Greetings</Text>
    </View>

    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Image
            source={require('../src/assets/fries.png')}
            style={{ width: 50, height: 50, borderRadius: 10 }}
            resizeMode='cover'
        />
        <Text style={{ color: 'black', fontSize: 10, marginTop: 5, fontWeight: 'bold' }}>Greetings</Text>
    </View>

    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Image
            source={require('../src/assets/pizza.png')}
            style={{ width: 50, height: 50, borderRadius: 10 }}
            resizeMode='cover'
        />
        <Text style={{ color: 'black', fontSize: 10, marginTop: 5, fontWeight: 'bold' }}>Greetings</Text>
    </View>

    <View style={{ alignItems: 'center', marginHorizontal: 10 }}>
        <Image
            source={require('../src/assets/burger.png')}
            style={{ width: 50, height: 50, borderRadius: 10 }}
            resizeMode='cover'
        />
        <Text style={{ color: 'black', fontSize: 12, marginTop: 5, fontWeight: 'bold' }}>Greetings</Text>
    </View>
</ScrollView>

{/* icons in hori */}

<ScrollView horizontal={true} contentContainerStyle={{flexDirection:'row',
        alignItems:'flex-start',
        width:'100%',marginHorizontal:20, marginTop:0}}>
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Center the items within the View
        borderRadius: 20,
        width: '25%',
        backgroundColor: 'red',
        padding: 10, // Added padding for better spacing
    }}>
        <View style={{flexDirection:'row'}}>
        <Image
            source={require('../src/assets/burger.png')}
            style={{ width: 20, height: 20, marginRight: 5 }} // Adjusted height and added margin
            resizeMode='contain' // Use 'contain' for better scaling
        /></View>
        <View>
        <Text> Pick up</Text></View>
    </View>
</ScrollView>


        </ScrollView>
        
        
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // Add padding for better spacing
    },
    greetingText: {
        color: 'black', // Adjust text color
        fontSize: 20,
        marginBottom: 5,
        fontWeight:'bold'
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 5, // Space between text and icon
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center', // Center button text
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    searchContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#f3f3f3',
        borderRadius:30,
        paddingHorizontal: 5,
        backgroundColor:'#f3f3f3',
        marginTop:10
    },
    searchIcon:{
        width:25,
        height:25,
        marginRight:15
    },
    scrollContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        backgroundColor:'#f3f3f3',

    }
});

// Make this component available to the app
export default HomeNew;