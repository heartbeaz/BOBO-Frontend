import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/welcom';
import Login from '../screens/login';
import Register from '../screens/register';
import Setting from '../screens/usersetting';
// Import Navigation
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

export const InitialStack = ()=>{
    const navigation = useNavigation();
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}>
            <Stack.Screen name = "Welcome" component ={Welcome}/>
            <Stack.Screen name = "Login" component = {Login}/>
            <Stack.Screen name = "Register" component = {Register}/>
            <Stack.Screen name='Setting' component={Setting}/>
        </Stack.Navigator>
    )
}
