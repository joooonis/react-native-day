# react-native-day

## set up

[10월 22일 React Native One Day](https://www.notion.so/10-22-React-Native-One-Day-6e19436d8b934f578b14859bbd02b406)

- react native expo
- expo go app 설치하고 QR 마크 찍으면 내 핸드폰과 연동됩니다.
- *Setups*
    - [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
    - [https://expo.dev/](https://expo.dev/)

## expo go


- 모바일 기기를 잡고 shaking하면 메뉴가 뜨는데 여기에서 js debugging을 누르면 브라우저에서 콘솔창을 확인 할 수 있습니다.

## react-native navigation


```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

- *React Navigation*

    [https://reactnavigation.org/docs/navigating](https://reactnavigation.org/docs/navigating)
    
- React Native에서 page 이동을 위해 사용하고 React Router랑 같은 기능입니다.

```jsx
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

Stack.Screen는 React의 Router 처럼 개별 page를 나타내고 안에 component를 넣어줍니다.

```jsx
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) { // 여기에서 navigation을 가져옵니다. 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
```

page 이동을 하기 위해서는 `<Stack.Navigator>` 가 자식 `component`에게 주는 `navigation`을 받아와서 사용합니다.

## axios


[https://github.com/axios/axios](https://github.com/axios/axios)

## Componens


- Image
    
    [https://reactnative.dev/docs/image](https://reactnative.dev/docs/image)
    
- FlatList
    
    [https://reactnative.dev/docs/flatlist](https://reactnative.dev/docs/flatlist)
    
- map 함수 대신 FlatList component를 사용하면 rendring performance를 높일 수 있습니다.
- renderItem 함수에서는 item을 인자로 받아와서 사용할 수 있습니다.
- 기본 사용 예시
    
    ```jsx
    // flatlist-simple
    import React from 'react';
    import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
    
    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];
    
    const Item = ({ title }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
    
    const App = () => {
      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    });
    
    export default App;
    ```
    

## Recoil


- global state를 간편하게 다뤄볼 수 있는 라이브러리
- RecoilRoot, atom, useRecoilState. useRecoilValue을
- *Recoil*
    
    [https://recoiljs.org/ko/docs/introduction/getting-started](https://recoiljs.org/ko/docs/introduction/getting-started)
    

```jsx
// App.js

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
```

- recoil 상태를 사용하는 컴포넌트는 부모 트리 어딘가에 나타나는 `RecoilRoot` 를 제공해줍니다.

```jsx
// recoilStates.js

import { atom } from 'recoil';

export const appliedAtom = atom({
  key: 'appliedAtom',
  default: {},
});
```

- `recoilState`를 정의 해줍니다. `atom`함수를 사용합니다.

```jsx

import { appliedAtom } from '../recoilStates';

import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';

const applied = useRecoilValue(appliedAtom);
const [applied, setApplied] = useRecoilState(appliedAtom);
```

- 값을 읽기만 할때는 `useRecoilValue` 를 읽고 수정까지 하려면 `useRecoilState` 를 사용합니다.
