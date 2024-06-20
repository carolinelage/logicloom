import React from 'react'
import { View, Text } from 'react-native';
import { themeColors } from '../../theme';
import { List } from 'react-native-paper';
import { BookmarkIcon } from 'react-native-heroicons/solid';

function Legenda() {
  return (
        <View style={{borderWidth: 2, 
            borderColor: themeColors.primary, 
            marginTop: 30, 
            marginLeft: 20, 
            marginRight: 20}}>
              <View style={{color: themeColors.bg, backgroundColor: themeColors.primary}}>
                <Text 
                  className="font-semibold" style={{alignSelf: 'center', color: 'white', paddingTop: 3, paddingBottom: 3}} 
                >
                 Legenda
                </Text>
              </View>
    
              <View style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingLeft: 30,
                paddingRight: 10
            }}>
                  <View>
                  <List.Section>
                  <List.Item title="FGB" left={() => <BookmarkIcon size="24" style={{color: '#ffe99e', marginRight: -10}} />} />
                  
                </List.Section>
              </View>
              <View>
              <List.Item
                    title="ILH"
                    left={() => <BookmarkIcon size="24" style={{color: '#096481', marginRight: -10}} />}
                  />
              </View>
              <View>
              <List.Item
                    title="IMN"
                    left={() => <BookmarkIcon size="24" style={{color: '#f3acb8', marginRight: -10}} />}
                  />
              </View>
              <View>
              <List.Item
                    title="ITS"
                    left={() => <BookmarkIcon size="24" style={{color: '#c1c7cb', marginRight: -10}} />}
                  />
              </View>
              <View>
              <List.Item
                    title="TEC"
                    left={() => <BookmarkIcon size="24" style={{color: '#9cddc6', marginRight: -10}} />}
                  />
              </View>
                  </View>
                </View>
  )
}

export default Legenda