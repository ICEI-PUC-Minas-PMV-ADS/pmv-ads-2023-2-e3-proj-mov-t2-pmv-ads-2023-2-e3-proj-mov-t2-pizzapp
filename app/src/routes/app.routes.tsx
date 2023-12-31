import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeAdmin } from '@screens/Admin/Home';
import { MenuAdmin } from '@screens/Admin/Menu';
import { OrderAdmin } from '@screens/Admin/Order';
import { ProductAdmin } from '@screens/Admin/Product';
import { Chart } from '@screens/Client/Chart';
import { HomeClient } from '@screens/Client/Home';
import { MenuClient } from '@screens/Client/Menu';
import { OrderClient } from '@screens/Client/Order';
import { ProductClient } from '@screens/Client/Product';
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

            <Screen name="menuClient" component={MenuClient}/>
            <Screen name="menuAdmin" component={MenuAdmin}/>

            <Screen name="productClient" component={ProductClient}/> 
            <Screen name="productAdmin" component={ProductAdmin}/>

            
            <Screen name="chart" component={Chart}/>

            <Screen name="orderClient" component={OrderClient}/>
            <Screen name="orderAdmin" component={OrderAdmin}/>
            </Navigator>
    )
}