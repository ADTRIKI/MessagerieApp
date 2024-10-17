import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SortModal from '../../components/Contact/SortModal'; // Assure-toi que ce chemin est correct

// Mock data pour la liste des contacts
const contactsData = Array.from({ length: 30 }, (_, i) => ({
  id: i.toString(),
  name: `Contact ${i + 1}`,
  status: i % 2 === 0 ? 'Online' : 'Offline',
}));

const ContactsScreen: React.FC = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [modalVisible, setModalVisible] = useState(false);

  // Fonction pour trier les contacts
  const handleSort = (criteria: string) => {
    let sortedContacts = [...contacts];
    
    switch (criteria) {
      case 'alphabetical-asc':
        sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alphabetical-desc':
        sortedContacts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'status-online':
        sortedContacts = sortedContacts.filter(contact => contact.status === 'Online');
        break;
      case 'status-offline':
        sortedContacts = sortedContacts.filter(contact => contact.status === 'Offline');
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
        <TouchableOpacity onPress={() => console.log('Ajouter un contact')}>
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
              <Text style={styles.contactStatus}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Modal de tri */}
      <SortModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSort={handleSort}
      />
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
