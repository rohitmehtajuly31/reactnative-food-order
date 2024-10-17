import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';

// Create a component
const Order = () => {
    return (
        <ScrollView  contentContainerStyle={styles.container}>
            <View style={styles.section}>
                <Text style={styles.icon}>&gt;</Text>
                <Text style={styles.title}>Set Directions</Text>
            </View>

            {/* Select bar */}
            <View style={styles.container2}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>One</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText}>Two</Text>
                </TouchableOpacity>
            </View>

            {/* Location */}
            <View style={styles.container3}>
                <View style={styles.row}>
                    <Image
                        source={{ uri: 'https://bit.ly/4eIFHBl' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>San Francisco</Text>
                    </View>
                    <Text style={styles.arrow}>&gt;</Text>
                </View>

                {/* 2nd location */}
                <View style={[styles.row, { marginTop: 10 }]}>
                    <Image
                        source={{ uri: 'https://bit.ly/4eIFHBl' }}
                        style={styles.image}
                        resizeMode="contain"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>San Francisco</Text>
                    </View>
                    <Text style={styles.arrow}>&gt;</Text>
                </View>
            </View>

            {/* Delivery Time Info */}
            <View style={styles.deliveryInfo}>
                <View style={styles.deliveryRow}>
                    <Text style={styles.deliveryLabel}>Delivery Time</Text>
                    <Text style={styles.deliveryValue}>15-30S, 4:30H</Text>
                </View>
            </View>

            {/* Priority */}


            <View style={{ 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 10, 
    padding: 10, 
    backgroundColor: 'snow', 
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    // Elevation for Android
    elevation: 5
}}>
    <View style={{ 
        flexDirection: 'column', 
        justifyContent: 'center', 
        backgroundColor: '#f0e6e4', 
        padding: 10, 
        borderRadius: 5, 
        flex: 1, // Take up available space
        marginRight: 10, 
        borderRadius:10// Space between the two views
    }}>
        <Text style={{ fontWeight: 'bold', color: 'black' }}>Time in US</Text>
        <Text style={{ color: 'black' }}>Description of time</Text>
    </View>

    <View style={{ 
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, // Take up available space
        backgroundColor:'#f0e6e4',
        borderRadius:10,
        
    }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>4:30h</Text>
    </View>
</View>

{/* sstandard */}

<View style={{flexDirection:'col', width:'100%'}}>
<View style={{ 
   
    flexDirection: 'row',
    borderColor: 'black',
    marginTop:10, 
    width:'100%',
    borderWidth: 3, // Border width for visibility
    padding: 20, 
    alignItems: 'center', // Center items vertically
    backgroundColor: '#f0f0f0', // Optional background color
    borderRadius: 10, // Rounded corners
    // Shadow for iOS
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    // Elevation for Android
    elevation: 5, // Elevation for shadow effect
}}>
    <View>
        <Text style={{ 
            fontSize: 18, // Font size
            fontWeight: 'bold', // Bold text
            color: 'black', // Text color
            
        }}>
            Standard
        </Text>
    </View>
</View>

{/* 2nd */}

<View style={{ 
   
   flexDirection: 'row',
   borderColor: 'black', 
   marginTop:10,
   width:'100%',
   borderWidth: 3, // Border width for visibility
   padding: 20, 
   alignItems: 'center', // Center items vertically
   backgroundColor: '#f0f0f0', // Optional background color
   borderRadius: 10, // Rounded corners
   // Shadow for iOS
   shadowColor: '#000', // Shadow color
   shadowOffset: { width: 0, height: 2 }, // Shadow offset
   shadowOpacity: 0.3, // Shadow opacity
   shadowRadius: 4, // Shadow blur radius
   // Elevation for Android
   elevation: 5, // Elevation for shadow effect
}}>
   <View>
       <Text style={{ 
           fontSize: 18, // Font size
           fontWeight: 'bold', // Bold text
           color: 'black', // Text color
       }}>
           Standard
       </Text>
   </View>
</View>



</View>
{/* pickitem */}
<View style={{ 
    flexDirection: 'row', 
    width: '100%', 
    padding: 10, // Add some padding for better spacing
 // Background color for the header
    borderRadius: 5, // Optional: rounded corners
    alignItems:'flex-start'
}}>
    <View>
        <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black', // Text color
        }}>
            Pick Up Items
        </Text>
    </View>
</View>

{/* scrollview */}

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
{/* end */}

{/* cardscroolview */}
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
{/* endcardscroolview */}


        </ScrollView >
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'white',
        marginVertical: 30,
        marginHorizontal: 20,
    },
    section: {
        flexDirection: 'row', // Corrected from 'col' to 'row'
        alignItems: 'center',
    },
    icon: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    container2: {
        flexDirection: 'row',
        marginVertical: 20,
        height: 60,
        backgroundColor: '#f0e6e4',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 5,
        backgroundColor: 'white',
        borderRadius: 20,
        height: 50,
    },
    button2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginLeft: 5,
        backgroundColor: '#f0e6e4',
        borderRadius: 20,
        height: 50,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    container3: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 15,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        width: '100%',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    arrow: {
        fontSize: 30,
        color: 'black',
        marginLeft: 10,
    },
    deliveryInfo: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        padding: 15,
        width: '100%',
    },
    deliveryRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    deliveryLabel: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    deliveryValue: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    priorityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 15,
        backgroundColor: 'gray',
        borderRadius: 10,
    },
    priorityContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    priorityTitle: {
        fontWeight: 'bold',
        color: 'white',
    },
    priorityDescription: {
        color: 'white',
    },
    priorityTime: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    priorityTimeValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

// Make this component available to the app
export default Order;
