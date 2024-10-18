// Import libraries
// Import libraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput,TouchableOpacity } from 'react-native';

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
// Create a component
const Vege = ({navigation}) => {
    const [searchText, setSearchText] = useState('');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.row}>
                <View style={styles.leftRow}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FrfgglBvfU_TdxmBIsPM0k1QPb_xuId7jw&s' }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Text style={{fontSize: 24,
        color: 'black',
        fontWeight: 'bold',}}>Safeway</Text>
                    </View>
                </View>

                {/* Right Row */}
                <View style={styles.rightRow}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVW6y0ArR6hY3v4SHz4HBRVjjs8-c_iiO5og&s' }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uktSSUvzXaHzc0NtguemKnTz2C-OqS_krA&s' }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>

            {/* searchbar */}
<SearchBar value={searchText} onChangeText={setSearchText}></SearchBar>


{/* price and fee and miniutes */}

<View style={styles.priceContainer}>
                <View style={styles.row}>
                    <View style={styles.leftRow}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uktSSUvzXaHzc0NtguemKnTz2C-OqS_krA&s' }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.infoText}>Minutes</Text>
                    </View>

                    <View style={styles.rightRow}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uktSSUvzXaHzc0NtguemKnTz2C-OqS_krA&s' }}
                            style={styles.image}
                            resizeMode="contain"
                        />
                        <Text style={styles.infoText}>Price and Fees</Text>
                    </View>
                </View>
            </View>

            {/* 3 buttons */}
            <View style={{ flexDirection: 'row', backgroundColor: 'white', padding: 10 }}>
            <View style={{ marginHorizontal: 5, borderRadius: 10, overflow: 'hidden' }}>
                <View style={{ backgroundColor: 'black', borderRadius: 10, padding: 10 }}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Read More</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 5, borderRadius: 10, overflow: 'hidden' }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Read More</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 5, borderRadius: 10, overflow: 'hidden' }}>
                <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
                    <Text style={{ color: 'black', textAlign: 'center' }}>Read More</Text>
                </View>
            </View>
        </View>

{/* scroolview horz */}

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
           width: 300, // Set a fixed width for each card
           alignItems: 'center',
           marginRight:10
}}>

    <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNULJ6YE0WsLqqBUs3ozHh6rkZDFAJlXzlFw&s' }} // Replace with your map image URL
 style={{width:280, height:100, borderRadius:10}} resizeMode='cover'>

    </Image></View>
    <Text style={styles.brandName}>Vegetables </Text>
</View>

{/* 2 */}

<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 300, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNULJ6YE0WsLqqBUs3ozHh6rkZDFAJlXzlFw&s' }} // Replace with your map image URL
 style={{width:280, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Vegetables </Text>
</View>

{/* 3 */}

<View style={{
           backgroundColor: '#fff',
           borderRadius: 10,
           elevation: 3,
           shadowColor: '#000',
           shadowOffset: { width: 0, height: 1 },
           shadowOpacity: 0.3,
           shadowRadius: 2,
           margin: 10,
           width: 300, // Set a fixed width for each card
           alignItems: 'center',
}}>
    <Image
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNULJ6YE0WsLqqBUs3ozHh6rkZDFAJlXzlFw&s' }} // Replace with your map image URL
 style={{width:280, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Vegetables </Text>
</View>

</ScrollView>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: 10, backgroundColor: 'snow' }}>
    <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Vegetables</Text>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Shop all</Text>
    </View>
</View>


{/* lll */}
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
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzCLlyaFWX6rVmiTD7SVZeThGvaNm3fGWgA&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Avacado </Text>
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
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYqC7q8SDWGimpqlWRp_AhsXPQ9i6xfg9gw&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>tomato</Text>
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
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhUF47x8Ik-_qBSh6attioZsDbzVZzRgAbNQ&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Banana</Text>
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


{/* second */}

<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: 10, backgroundColor: 'snow' }}>
    <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Snacks</Text>
    </View>
    <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>Shop all</Text>
    </View>
</View>


{/* lll */}
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
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcsvOz5XjvfcbHZZVWtZFO4RKRYFpoKAVoQ&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Pepsi </Text>
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
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRde2TuK_Zqom42WRYgivVvkupZSx4wzNVYBg&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Lays</Text>
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
  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAp7vZGufNPD-YztI3R5A5_oKGNydgrhtrnA&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Chetoz</Text>
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
  source={{ uri: 'hthttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcsvOz5XjvfcbHZZVWtZFO4RKRYFpoKAVoQ&stps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtcsvOz5XjvfcbHZZVWtZFO4RKRYFpoKAVoQ&s' }} // Replace with your map image URL
 style={{width:100, height:100, borderRadius:10}} resizeMode='cover'>

    </Image>
    <Text style={styles.brandName}>Coldrinks</Text>
</View>


</ScrollView>
{/* stacknavigation */}
<View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, width: '100%' }}>
    <TouchableOpacity 
        style={{ backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }} 
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'white', fontSize: 16 }}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity 
        style={{ backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 }} 
        onPress={() => navigation.navigate('Order')}>
        <Text style={{ color: 'white', fontSize: 16 }}>Order</Text>
    </TouchableOpacity>
</View>




        </ScrollView>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Space between left and right rows
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
        // backgroundColor: 'red', // For visibility, can be removed
        padding: 8, // Padding around the row
        // backgroundColor:'green'
    },
    leftRow: {
        flexDirection:'row',
   
        alignItems: 'center',
    },
    rightRow: {
        flexDirection:'row',
        alignItems: 'center',
    },
    imageContainer: {
        marginHorizontal: 4, // Space between images
    },
    image: {
        width: 30, // Set a fixed width for images
        height: 30, // Set a fixed height for images
        borderRadius: 5, // Optional: add some border radius
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        fontSize: 16,
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    infoText: {
        marginLeft: 4,
        fontSize: 20,
        color: 'black',
        
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 8, // Space between the icon and input
    },
    searchIconn: {
        width: 24,
        height: 24,
        marginRight: 8, // Space between the icon and input
        alignItems:'flex-end'
    },
    searchInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 1,
        backgroundColor: 'white',
    },
    priceContainer: {
            // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
       
        borderRadius: 5,
        width: '99%',
    },
    scrollContainer: {
        paddingVertical: 10,
        
        flexDirection:'row'
    },
    card: {
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
        padding: 10,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    brandName: {
        marginTop: 8,
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
    },
});

// Make this component available to the app
export default Vege;
