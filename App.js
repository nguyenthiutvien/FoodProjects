import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import  { CartProvider } from './cartContext';


import Filter from './screens/filter';


import { Home, Location, Header,Search,Detailrestaurant, Chat,PopularMenu, PopularRestaurant, ChatDetail, Calling, EndCalling, 
  ConfirmOrder, Payment, Shipping, Orderdetail, MapScreen, DetailItem , Profile_Detail,Profile, Onboarding, OnboardingFood, 
  OnboardingDidfood, PaymentMethod, Upload_Photo, Upload_Preview, SetLocation, Congrats, Finish_Order, Rate_Food, Rate_Restaurant, Vourcher_Promo, Phone, Login, Signup, Signupnext,Resetpw, Forgotpw } from '../FoodProject/screens/index';
import ChatItem from './screens/chatItem';




const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
                                                               
function SlashScreen(){
  <Stack.Navigator initialRouteName='Onboarding'>
  
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{
        headerShown: false,
      }}
    />
  
  <Stack.Screen
    name="PopularMenu"
    component={PopularMenu}
    options={{
      headerShown: false,
    }}
  />
   <Stack.Screen
    name="PopularRestaurant"
    component={PopularRestaurant}
    options={{
      headerShown: false,
    }}
  />
  
 
</Stack.Navigator>
}
function HomeStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Header"
        component={Header}
        options={{
          headerShown: false,
        }}
      />
      
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnboardingFood"
          component={OnboardingFood}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OnboardingDidfood"
          component={OnboardingDidfood}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PaymentMethod"
          component={PaymentMethod}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Upload_Photo"
          component={Upload_Photo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Upload_Preview"
          component={Upload_Preview}
          options={{
            headerShown: false,
          }}
        />
        
      
      <Stack.Screen
        name="PopularMenu"
        component={PopularMenu}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="PopularRestaurant"
        component={PopularRestaurant}
        options={{
          headerShown: false,
        }}
      />
      
      <Stack.Screen
    name="Login"
    component={Login}
    options={{
      headerShown: false,
    }}
  />
        <Stack.Screen
    name="Signup"
    component={Signup}
    options={{
      headerShown: false,
    }}
  />
  <Stack.Screen
    name="Signupnext"
    component={Signupnext}
    options={{
      headerShown: false,
    }}
  />
 
       <Stack.Screen
        name="Filter"
        component={Filter}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarVisible: false, 

        }}
      />
        <Stack.Screen
        name="DetailItem"
        component={DetailItem}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Detailrestaurant"
        component={Detailrestaurant}
        options={{
          headerShown: false,
        }}
      />
    
  

    </Stack.Navigator>
  );
}

function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderDetail"
        component={Orderdetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmOrder"
        component={ConfirmOrder}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
          name="Finish_Order"
          component={Finish_Order}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rate_Food"
          component={Rate_Food}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Rate_Restaurant"
          component={Rate_Restaurant}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Vourcher_Promo"
          component={Vourcher_Promo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
        }}
      />
       

    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile_Detail"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  );
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
       name="ChatDetail"
       component={ChatItem}
       options={{
         headerShown: false,
       }}
     />
       {/* <Stack.Screen
       name="ChatItem"
       component={ChatItem}
       options={{
         headerShown: false,
       }}
     /> */}
      {/* <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
      */}
       <Stack.Screen
        name="EndCalling"
        component={EndCalling}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Calling"
        component={Calling}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none" initialRouteName='Onboarding'>
      <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{
        headerShown: false,
      }}
    />
      <Stack.Screen
      name="OnboardingFood"
      component={OnboardingFood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="OnboardingDidfood"
      component={OnboardingDidfood}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="PaymentMethod"
      component={PaymentMethod}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Upload_Photo"
      component={Upload_Photo}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Upload_Preview"
      component={Upload_Preview}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
name="Login"
component={Login}
options={{
  headerShown: false,
}}
/>
    <Stack.Screen
name="Signup"
component={Signup}
options={{
  headerShown: false,
}}
/>
<Stack.Screen
name="Signupnext"
component={Signupnext}
options={{
  headerShown: false,
}}
/>
<Stack.Screen
    name="SetLocation"
    component={SetLocation}
    options={{
      headerShown: false,
    }}
  />
  <Stack.Screen
    name="Congrats"
    component={Congrats}
    options={{
      headerShown: false,
    }}
  />
   <Stack.Screen
    name="Phone"
    component={Phone}
    options={{
      headerShown: false,
    }}
  />
   <Stack.Screen
    name="Forgotpw"
    component={Forgotpw}
    options={{
      headerShown: false,
    }}
  />
   <Stack.Screen
    name="Resetpw"
    component={Resetpw}
    options={{
      headerShown: false,
    }}
  />
      <Stack.Screen name='Slashscreen' component={SlashScreen}></Stack.Screen>
       <Stack.Screen name='MyTab' component={MyTab}></Stack.Screen>
        <Stack.Screen name='ChatDetail' component={ChatStack}></Stack.Screen>
      
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

function MyTab() {
  return(

    <Tab.Navigator
          initialRouteName="Onboarding"
          barStyle={{ backgroundColor: 'white' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="home"
                  color="#6B50F6"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderStack}
            options={{
              tabBarLabel: 'Orderdetail',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="cart"
                  color="#6B50F6"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color="#6B50F6"
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={{
              tabBarLabel: 'Restaurant',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="chat"
                  color="#6B50F6"
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
    )
}