import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Mock data des contacts
const contacts = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
  name: `Contact ${i + 1}`,
  status: i % 2 === 0 ? 'En ligne' : 'Hors ligne', // Statut en ligne/hors ligne
}));

interface ContactsModalProps {
  visible: boolean;
  onClose: () => void;
}

const ContactsModal: React.FC<ContactsModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <SafeAreaView style={styles.modalContent}>
          {/* Barre d'annulation */}
          <View style={styles.topBar}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Annuler</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Nouveau message</Text>
          </View>

          {/* Barre de recherche */}
          <View style={styles.searchBar}>
            <Ionicons name="search-outline" size={20} color="#8e8e93" />
            <TextInput
              placeholder="Rechercher"
              style={styles.searchInput}
            />
          </View>

          {/* Options principales */}
          <View style={styles.mainOptions}>
            <TouchableOpacity style={styles.optionItem}>
              <Ionicons name="people-outline" size={20} color="#007aff" />
              <Text style={styles.optionText}>Nouveau groupe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <Ionicons name="person-add-outline" size={20} color="#007aff" />
              <Text style={styles.optionText}>Nouveau contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionItem}>
              <Ionicons name="megaphone-outline" size={20} color="#007aff" />
              <Text style={styles.optionText}>Nouveau canal</Text>
            </TouchableOpacity>
          </View>

          {/* Liste des contacts */}
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.contactItem}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{item.name[0]}</Text>
                </View>
                <View>
                  <Text style={styles.contactName}>{item.name}</Text>
                  <Text style={styles.contactStatus}>{item.status}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent
  },
  modalContent: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  cancelText: {
    color: '#007aff',
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#8e8e93',
    flex: 1,
  },
  mainOptions: {
    marginBottom: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#007aff',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f5',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 18,
    color: '#fff',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactStatus: {
    fontSize: 14,
    color: '#8e8e93',
  },
});

export default ContactsModal;
