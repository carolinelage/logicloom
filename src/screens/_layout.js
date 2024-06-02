import { Drawer } from "expo-router/drawer"

export default function Layout(){
    return (
      <Drawer>
        <Drawer.Screen name="MainScreen" 
        options={{ title: "Home",
            drawerLabel: "Home",
        }}
         />
      </Drawer>
    )
}