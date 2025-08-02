import { Tabs } from "expo-router";
import HouseSvg from "../../components/assets/HouseSvg";
import TicketSvg from "../../components/assets/TicketSvg";
import UserSvg from "../../components/assets/UserSvg";
import { Colors } from "../../styles/Colors";

import NavigationHeader from "../../components/NavigationHeader";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.orange500Alt,
        headerTitleAlign: "center",
        header: (props) => <NavigationHeader {...props} />,
        sceneStyle: { backgroundColor: Colors.white },
      }}
    >
      <Tabs.Screen
        name="reports"
        options={{
          title: "Relátorios",
          tabBarIcon: ({ color }) => <TicketSvg color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Visão Geral",
          tabBarIcon: ({ color }) => <HouseSvg color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <UserSvg color={color} />,
        }}
      />
    </Tabs>
  );
}
