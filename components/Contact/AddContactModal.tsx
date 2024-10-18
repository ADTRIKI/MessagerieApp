import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface AddContactModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddContactModal: React.FC<AddContactModalProps> = ({ visible, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.cancelText}>Annuler</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Nouveau contact</Text>
            <TouchableOpacity onPress={() => console.log('Créer')}>
              <Text style={styles.createText}>Créer</Text>
            </TouchableOpacity>
          </View>

          {/* Photo et champs prénom/nom */}
          <View style={styles.contactInfoContainer}>
            <View style={styles.avatarContainer}>
              <Ionicons name="person-circle" size={80} color="#d1d1d6" />
            </View>
            <View style={styles.textFields}>
              <TextInput
                style={styles.textInput}
                placeholder="Prénom"
                value={firstName}
                onChangeText={setFirstName}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Nom"
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          {/* Numéro de téléphone */}
          <View style={styles.phoneNumberContainer}>
            <View style={styles.phoneRow}>
              <TouchableOpacity>
                <Ionicons name="remove-circle-outline" size={24} color="#ff3b30" />
              </TouchableOpacity>
              <Text style={styles.phoneLabel}>portable</Text>
              <TextInput
                style={styles.phoneInput}
                placeholder="Numéro de téléphone"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>

            {/* Ajouter un autre numéro */}
            <TouchableOpacity style={styles.addPhoneButton}>
              <Ionicons name="add-circle-outline" size={24} color="#007aff" />
              <Text style={styles.addPhoneText}>ajouter un téléphone</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop: 90,
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelText: {
    color: '#007aff',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  createText: {
    color: '#c7c7cc',
    fontSize: 16,
  },
  contactInfoContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 20,
  },
  textFields: {
    flex: 1,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginBottom: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  phoneNumberContainer: {
    marginTop: 20,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  phoneLabel: {
    marginLeft: 10,
    color: '#007aff',
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 5,
    fontSize: 16,
  },
  addPhoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addPhoneText: {
    marginLeft: 10,
    color: '#007aff',
    fontSize: 16,
  },
});

export default AddContactModal;
