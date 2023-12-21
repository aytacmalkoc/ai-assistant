import {Tabs} from 'expo-router';
import {useColorScheme} from 'react-native';

import HomeIcon from '../../assets/images/icons/home.svg';
import ChatIcon from '../../assets/images/icons/chat.svg';
import ArchiveIcon from '../../assets/images/icons/archive.svg';
import UserIcon from '../../assets/images/icons/user.svg';

import Colors from '../../constants/Colors';

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                tabBarShowLabel: false,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({color}) => <HomeIcon width={28} height={28} stroke={color} />,
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    tabBarIcon: ({color}) => <ChatIcon width={28} height={28} stroke={color} fill={color} />,
                }}
            />
            <Tabs.Screen
                name="archive"
                options={{
                    tabBarIcon: ({color}) => <ArchiveIcon width={28} height={28} stroke={color} />,
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    tabBarIcon: ({color}) => <UserIcon width={28} height={28} stroke={color} />,
                }}
            />
        </Tabs>
    );
}
