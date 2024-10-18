import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Header from '@/components/Chat/Header';
import EmptyChatPage from '@/components/Chat/EmptyChatPage';
import ContactsModal from '@/components/Chat/ContactsModal';

const ChatScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Barre d'en-tête */}
      <Header onPlusPress={() => setModalVisible(true)} />

      {/* Page vide (pour l'instant) */}
      <EmptyChatPage />

      {/* Modal des contacts */}
      <ContactsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    paddingTop: Platform.OS === 'android' ? 0 : 0,  // Ajout de padding si nécessaire
  },
});

export default ChatScreen;
