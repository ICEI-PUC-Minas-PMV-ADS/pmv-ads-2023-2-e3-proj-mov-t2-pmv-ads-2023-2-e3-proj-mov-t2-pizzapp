import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeAdmin } from '@screens/Admin/Home';
import { MenuAdmin } from '@screens/Admin/Menu';
import { HomeClient } from '@screens/Client/Home';
import { Home } from '@screens/Home';
import { Login } from '@screens/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="home" component={Home}/>
            <Screen name="homeClient" component={HomeClient}/>
            <Screen name="homeAdmin" component={HomeAdmin}/>
            <Screen name="login" component={Login}/>

            <Screen name="menuAdmin" component={MenuAdmin}/>
            
            <Screen name="chart" component={Home}/>
            <Screen name="order" component={Home}/>
            </Navigator>
    )
}