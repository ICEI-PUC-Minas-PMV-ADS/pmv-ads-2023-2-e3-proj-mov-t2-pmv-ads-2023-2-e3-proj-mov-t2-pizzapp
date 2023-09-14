import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { HomeAdmin } from '@screens/HomeAdmin';
import { HomeClient } from '@screens/HomeClient';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="home" component={Home}/>
            <Screen name="homeClient" component={HomeClient}/>
            <Screen name="homeAdmin" component={HomeAdmin}/>
        </Navigator>
    )
}