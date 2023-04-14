import { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput
} from 'react-native';

import { useRouter } from 'expo-router';
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants';

const jobTypes = ['Full-time', 'Part-time', 'Contracted-time','Internship','Work from home']

const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router = useRouter();
  const [activeJobTitle, setActiveJobTitle] = useState(jobTypes[0])
  return (

    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello! Sumit</Text>
        <Text style={styles.welcomeMessage} >Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper} >
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            placeholder='What are you looking for?'
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={handleClick}
        >
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
           
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobTitle, item)}
              onPress={()=>{
                setActiveJobTitle(item);
                router.push(`/search/${item}`)
              }}
              
            >
              <Text style={styles.tabText(activeJobTitle,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item =>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>

    </View>
  )
}

export default Welcome