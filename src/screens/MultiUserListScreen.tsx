import React from 'react'
import {View, StyleSheet, FlatList } from 'react-native'
import RegularUserCard from '../screens/RegularUserCard'
import PremiumUserCard from '../screens/PremiumUserCard'
import AdminUserCard from '../screens/AdminUserCard';


const MultiUserListScreen = () => {
const users = [
        {
            id: '1',
            name: 'Asad',
            email: 'asad-iqbal@gmail.com',
            type: 'regular',
            avatar: 'https://reactnative.dev/img/tiny_logo.png' 
        },
        {
            id: '2',
            name: 'Hamza',
            email: 'hamza-khan@gmail.com',
            type: 'premium',
            avatar: 'https://i.pravatar.cc/150?img=2'
        },
        {
            id: '3',
            name: 'Maria',
            email: 'maria@gmail.com',
            type: 'admin',
            avatar: 'https://i.pravatar.cc/150?img=3' 
        },
        {
            id: '4',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '5',
            name: 'Ali',
            email: 'Ali@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '6',
            name: 'Muneeb',
            email: 'muneeb@gmail.com',
            type: 'premium',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '7',
            name: 'Faizan',
            email: 'faizan@gmail.com',
            type: 'admin',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '8',
            name: 'Tanveer',
            email: 'tanveer@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '9',
            name: 'Awais',
            email: 'awais@gmail.com',
            type: 'premium',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '10',
            name: 'Zarrak',
            email: 'zarrak@gmail.com',
            type: 'admin',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '11',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '12',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '13',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '14',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '15',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '16',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
         {
            id: '17',
            name: 'Maryam',
            email: 'maryam@gmail.com',
            type: 'regular',
            avatar: 'https://i.pravatar.cc/150?img=4' 
        },
    ];

      const renderItem = ({item}: {item:any}) => {
        if (item.type === 'regular') {
            return <RegularUserCard name={item.name} email={item.email} avatar={item.avatar} />;
        } else if (item.type === 'premium') {
            return <PremiumUserCard name={item.name} email={item.email} badgeText='Premium' avatar={item.avatar} />
        } else if (item.type === 'admin') {
            return <AdminUserCard name={item.name} email={item.email} badgeText='Admin' avatar={item.avatar} />
        } else return null;
    }
    

    return (
        <View style={styles.container}>
            <FlatList
                data={users} // Our array of users
                keyExtractor={(item) => item.id} // Unique key for each user
                renderItem= {renderItem}
                
            /> 
        </View>
    );
};

export default MultiUserListScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    card: { padding: 16, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 },
    name: { fontWeight: 'bold', fontSize: 18 },
});