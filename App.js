import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecoilRoot } from 'recoil';
const Stack = createNativeStackNavigator();

import WebinarList from './components/WebinarList';
import WebinarDetail from './components/WebinarDetail';

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='WebinarList' component={WebinarList} />
          <Stack.Screen name='WebinarDetail' component={WebinarDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
