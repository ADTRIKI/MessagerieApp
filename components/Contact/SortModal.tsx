import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SortModalProps {
  visible: boolean;
  onClose: () => void;
  onSort: (criteria: string) => void;
  selectedCriteria: string;
}

const SortModal: React.FC<SortModalProps> = ({ visible, onClose, onSort, selectedCriteria }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalContent}>
          
          {/* Option 1: Par heure de connexion */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              onSort('status-online');
              onClose();
            }}
          >
            <Text style={styles.optionText}>par heure de connexion</Text>
            {selectedCriteria === 'status-online' && (
              <Ionicons name="checkmark" size={20} color="#007aff" style={styles.checkIcon} />
            )}
          </TouchableOpacity>

          {/* Option 2: Par nom */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              onSort('alphabetical-asc');
              onClose();
            }}
          >
            <Text style={styles.optionText}>par nom</Text>
            {selectedCriteria === 'alphabetical-asc' && (
              <Ionicons name="checkmark" size={20} color="#007aff" style={styles.checkIcon} />
            )}
          </TouchableOpacity>
          
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 15,
    marginTop: 115,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8, 
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligne l'icône et le texte
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  checkIcon: {
    marginLeft: 10,
  },
});

export default SortModal;
