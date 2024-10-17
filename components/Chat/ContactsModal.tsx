import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '@/components/Chat/Header';
import EmptyChatPage from '@/components/Chat/EmptyChatPage';
import ContactsModal from '@/components/Chat/ContactsModal';

const ChatScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Barre d'en-tête */}
      <Header onPlusPress={() => setModalVisible(true)} />

      {/* Page vide (pour l'instant) */}
      <EmptyChatPage />

      {/* Modal des contacts */}
      <ContactsModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
});

export default ChatScreen;
