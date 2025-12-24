import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type AdminUserCardProps = {
    name: string;
    email: string;
    badgeText: string;
    avatar: string;
}

const AdminUserCard = ({ name, email, badgeText, avatar }: AdminUserCardProps) => {
    return(
        <View style={styles.card}>
         <Image source={{ uri: avatar }} style={styles.avatar} />
         <View style={styles.info}>
         <Text style={styles.name}>{name}</Text>
         <Text>{email}</Text>
         <Text style={styles.badge}>{badgeText}</Text>
         </View>
        </View>
    )
}

export default AdminUserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1
  },
  info: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
   badge: {
    marginTop: 8,
    color: 'red',
    fontWeight: 'bold',
  },
});