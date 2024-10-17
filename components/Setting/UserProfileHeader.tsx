import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const UserProfileHeader: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          {/* Icone QR à gauche */}
          <TouchableOpacity onPress={() => console.log('QR Code')}>
            <Ionicons name="qr-code-outline" size={30} color="#007aff" />
          </TouchableOpacity>

          {/* Bouton Modifier à droite */}
          <TouchableOpacity onPress={() => console.log('Modifier profil')}>
            <Text style={styles.modifyText}>Modifier</Text>
          </TouchableOpacity>
        </View>

        {/* Image de profil */}
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} 
          style={styles.profileImage} 
        />

        {/* Emoji et numéro de téléphone */}
        <Text style={styles.emoji}>😊</Text>
        <Text style={styles.phoneNumber}>+33 6 59 99 50 47</Text>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f5',  // Assurez-vous que le fond est cohérent
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f5',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  modifyText: {
    fontSize: 18,
    color: '#007aff',
    fontWeight: '500',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#8e8e93',
  },
});

export default UserProfileHeader;
