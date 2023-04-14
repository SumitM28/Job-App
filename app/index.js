import { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";


const Home = () => {
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState('');
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite
        }}>
            {/* header of app */}
            <Stack.Screen

                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: true,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                    ),

                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                    headerTitle: ""
                }}
            />

            {/* section after header */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}
                >

                    {/* welcome section */}
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={()=>{
                            if(searchTerm){
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    {/* popular jobs section */}
                    <Popularjobs />

                    {/* Nearby jobs section */}
                    <Nearbyjobs />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
};


export default Home;