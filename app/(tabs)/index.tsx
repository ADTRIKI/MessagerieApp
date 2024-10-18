import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SortModal from '../../components/Contact/SortModal';
import AddContactModal from '../../components/Contact/AddContactModal';  // Import de la modal

const contactsData = [
  { id: '1', name: 'John Doe', phoneNumber: '+1 555-123-456', status: 'Online' },
  { id: '2', name: 'Jane Smith', phoneNumber: '+1 555-987-654', status: 'Offline' },
  { id: '3', name: 'Alice Johnson', phoneNumber: '+1 555-321-987', status: 'Online' },
  { id: '4', name: 'Bob Brown', phoneNumber: '+1 555-654-321', status: 'Offline' },
  { id: '5', name: 'Charlie Davis', phoneNumber: '+1 555-789-123', status: 'Online' },
];

const ContactsScreen: React.FC = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [modalVisible, setModalVisible] = useState(false);
  const [addContactModalVisible, setAddContactModalVisible] = useState(false);  // Pour la modal d'ajout de contact

  const handleSort = (criteria: string) => {
    let sortedContacts = [...contacts];
    
    switch (criteria) {
      case 'alphabetical-asc':
        sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'status-online':
        sortedContacts = sortedContacts.filter(contact => contact.status === 'Online');
        break;
    }

    setContacts(sortedContacts);
  };

  return (
    <View style={styles.container}>
      {/* Barre d'en-tête */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.headerText}>Trier</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Contacts</Text>
        <TouchableOpacity onPress={() => setAddContactModalVisible(true)}>
          <Ionicons name="add-outline" size={24} color="#007aff" />
        </TouchableOpacity>
      </View>

      {/* Barre de recherche */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#8e8e93" />
        <TextInput
          placeholder="Rechercher"
          placeholderTextColor="#8e8e93"
          style={styles.searchInput}
        />
      </View>

      {/* Invite friends */}
      <TouchableOpacity style={styles.inviteFriends} onPress={() => console.log('Invite Friends')}>
        <Ionicons name="person-add-outline" size={20} color="#007aff" />
        <Text style={styles.inviteText}>Invite Friends</Text>
      </TouchableOpacity>

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
              <Text style={styles.contactStatus}>{item.phoneNumber}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal de tri */}
      <SortModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSort={handleSort} selectedCriteria={''}      />

      {/* Modal d'ajout de contact */}
      <AddContactModal
        visible={addContactModalVisible}
        onClose={() => setAddContactModalVisible(false)} onSave={function (contact: any): void {
          throw new Error('Function not implemented.');
        } }      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Fond blanc
    paddingTop: 20, // Ajoute une marge en haut
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerText: {
    color: '#007aff',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    marginTop: 10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  inviteFriends: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inviteText: {
    marginLeft: 10,
    color: '#007aff',
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
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

export default ContactsScreen;
