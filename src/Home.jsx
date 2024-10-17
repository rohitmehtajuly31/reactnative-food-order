// Import libraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, ScrollView
 } from 'react-native';

// Create a component
const Home = () => {
    const handlePress = (buttonNumber) => {
        Alert.alert(`Button ${buttonNumber} Pressed!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handlePress(1)}>
                    <Text style={styles.buttonText}>Restaruants</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handlePress(2)}>
                    <Text style={styles.buttonText}>Dine Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handlePress(3)}>
                    <Text style={styles.buttonText}>Grocery</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.section}>
                <View style={styles.row}>
                    <View style={[styles.sectionBox, { width: '100%' }]}>
                        <Text style={styles.sectionText}>Special Festive Season</Text>  
                    </View>
                    {/* <View style={[styles.sectionBox, {  width: '40%', alignItems:'flex-start' }]}>
                        <Text style={styles.sectionText}>Above 199</Text>  
                    </View> */}

                </View>
            </View>

{/* card */}

<View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between', backgroundColor: 'white', marginHorizontal:20 }}>
            <View style={{ flex: 1, flexDirection: 'row', width: '40%', backgroundColor:'#78bbe6', height: 100, marginRight: 10, borderRadius:10 }}>
                <View style={{ width: '50%', justifyContent: 'flex-end', alignItems:'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 20,
fontWeight: 'bold', }}>American</Text>
                </View>
                <View style={{ width: '50%', justifyContent: 'flex-end', justifyContent:'flex-start', alignItems: 'flex-end' }}>
                    <Image
                        source={{ uri: 'https://bit.ly/4eIFHBl' }}
                        style={{ width: 40, height: 40, borderRadius:20 }} // Adjust the size as needed
                        resizeMode="contain"
                    />
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', width: '40%', backgroundColor: '#a26ea1', height: 100, marginRight: 10, borderRadius:10 }}>
                <View style={{ width: '50%', justifyContent: 'flex-end', alignItems:'flex-start' }}>
                    <Text style={{ color: 'black', fontSize: 20,
fontWeight: 'bold' }}>Grocery</Text>
                </View>
                <View style={{ width: '50%', justifyContent: 'flex-end', justifyContent:'flex-start', alignItems: 'flex-end' }}>
                    <Image
                        source={{ uri: 'https://bit.ly/402usz9' }}
                        style={{ width: 40, height: 40, backgroundColor: 'transparent', borderRadius:20 }} // Adjust the size as needed
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>


{/* horizontal scrool */}

<ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 120, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmgVoAC9h3Sm4MLprsHzWxSmw68ilARqsNQ&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Pan Corner</Text>
</View>

<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 120, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPY655FwVDIxz6TleqJoiFAyCDdx5q7aU-pQ&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Fruits & Veggie</Text>
</View>

<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 120, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-B1b250ECpbUjHI6i_cxQgyO04CEdnBT9g&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Alchol</Text>
</View>

<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 120, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://bit.ly/4eCTk58' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Fast Food</Text>
</View>
<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 120, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoHHq6VoaXZnKBLycPusGoPOG21MseBPnUA&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Coldrinks</Text>
</View>


</ScrollView>




        {/* card */}
<View style={styles.card}>
  <Image source={{ uri: 'https://bit.ly/4gWVjCT' }} style={{width: 350, height: 150, borderRadius:10}} resizeMode='cover'></Image>
  <View>
    <Text style={{fontSize: 20,fontWeight: 'bold', color: 'black',
}}>American Street Cafe</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color: 'black',
}}>Best in chandigarh and free hom delivery at just 199</Text>
  </View>
 
    
</View>

{/* card2 */}
<View style={styles.card}>
  <Image source={{ uri: 'https://bit.ly/4dEPI15' }} style={{width: 350, height: 150, borderRadius:10}} resizeMode='cover'></Image>
  <View>
    <Text style={{fontSize: 20,fontWeight: 'bold', color: 'black',
}}>LA Miami Pizza</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color: 'black',
}}>Best in chandigarh and free hom delivery at just 199</Text>
  </View>
 
    
</View>
{/* card */}
<View style={styles.card}>
  <Image source={{ uri: 'https://bit.ly/4dEQ0oH' }} style={{width: 350, height: 150, borderRadius:10}} resizeMode='cover'></Image>
  <View>
    <Text style={{fontSize: 20,fontWeight: 'bold', color: 'black',
}}>Baskin and Robin</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color: 'black',
}}>Best in chandigarh and free hom delivery at just 199</Text>
  </View>
 
    
</View>
{/* card */}

<View style={styles.card}>
  <Image source={{ uri: 'https://bit.ly/4eCTk58' }} style={{width: 350, height: 150, borderRadius:10}} resizeMode='cover'></Image>
  <View>
    <Text style={{fontSize: 20,fontWeight: 'bold', color: 'black',
}}>KFC</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color: 'black',
}}>All items price at just 199!! Grab the Deal</Text>
  </View>
 
    
</View>

<View style={styles.card}>
  <Image source={{ uri: 'https://bit.ly/3zPtZFZ' }} style={{width: 350, height: 150, borderRadius:10}} resizeMode='cover'></Image>
  <View>
    <Text style={{fontSize: 20,fontWeight: 'bold', color: 'black',
}}>Amrit Sweets</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color: 'black',
}}>Best sweets and fast food in tricity</Text>
  </View>
 
    
</View>

<View style={styles.card}>
  <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6x3etloFG5HVh-5FLrvMOdzosjZR2X6u-HA&s' }} style={{width: 350, height: 150, borderRadius:10}} resizeMode='cover'></Image>
  <View>
    <Text style={{fontSize: 20,fontWeight: 'bold', color: 'black',
}}>Mcdonald's</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color: 'black',
}}>Best Chicken salami burger!! Hot and crispy</Text>
  </View>
 
    
</View>


        

        </ScrollView>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start', // Aligns items at the top
        alignItems: 'center', // Center align items horizontally
        backgroundColor: '#FFFAFA',
        paddingTop: 50, // Adjust padding from the top
    },
    buttonRow: {
        flexDirection: 'row', // Align buttons in a row
        justifyContent: 'space-between', // Space buttons evenly
        width: '100%', // Full width for the row
        paddingHorizontal: 20, // Padding on the sides
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 10,
        marginHorizontal: 5, // Space between buttons
        flex: 1, // Allows buttons to expand evenly
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    section: {
        marginTop: 10,
        width: '100%', // Ensure the section takes full width
        alignItems: 'center',
        
    },
    row: {
        flexDirection: 'row', // Align items in a row
        justifyContent: 'space-between', // Space items evenly
        width: '80%', // Full width for the row
        paddingHorizontal: 20, // Padding on the sides
        alignItems:'center',
        
    },
    sectionBox: {
         // Allows the boxes to expand evenly
        alignItems: 'center', // Center text in the boxes
        paddingVertical: 10, // Padding for vertical space
        marginHorizontal: 5,

        width:'50%'
        
        // Space between boxes
    },
    sectionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black', // Make text color white for better contrast
    },
    card:{

        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3, // Shadow effect for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        margin: 10,
        overflow: 'hidden',

    },
    scrollContainer: {
        paddingVertical: 20,
    },
    brandName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    
});

// Make this component available to the app
export default Home;
