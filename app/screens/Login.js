
// Components
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { LoginForm, RegisterForm } from '../shared/components/login/FormContainer';
import { Register2 } from './Registro/Register2';
import { Register3 } from './Registro/Register3';
import { Validation } from './Registro/Validation';
import { ValidationWaiting } from './Registro/ValidationWaiting';
import { ValidationComplete } from './Registro/ValidationComplete';
import { DocumentValidation } from './Registro/DocumentValidation';
import { FaceValidation } from './Registro/FaceValidation';

const Stack = createNativeStackNavigator();

export default function Login() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                gestureEnabled: true,
                headerShown: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontFamily: 'Nunito-Regular',
                    fontSize: 18,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    letterSpacing: 0,
                    color: '#000000',
                },
                headerStyle: {
                    width: '75%',
                    backgroundColor: '#ffffff',
                    borderBottomWidth: 0,
                    elevation: 0,
                },
                headerTintColor: '#000000',
            }}
        >
            <Stack.Screen name="LoginForm" component={LoginForm} />
            <Stack.Screen name="RegisterForm" component={RegisterForm}
                options={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal-inverted"
                }}
            />
            <Stack.Screen name="Register2" component={Register2} />
            <Stack.Screen name="Register3" component={Register3} />
            <Stack.Screen name="Validation" component={Validation} />
            <Stack.Screen name="ValidationWaiting" component={ValidationWaiting} />
            <Stack.Screen name="DocumentValidation" component={DocumentValidation} />
            <Stack.Screen name="FaceValidation" component={FaceValidation} />
            <Stack.Screen name="ValidationComplete" component={ValidationComplete} />
        </Stack.Navigator>
    )
}
