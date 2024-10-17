import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface SortModalProps {
  visible: boolean;
  onClose: () => void;
  onSort: (criteria: string) => void;
}

const SortModal: React.FC<SortModalProps> = ({ visible, onClose, onSort }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Trier par</Text>

          {/* Tri par ordre alphabétique */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              onSort('alphabetical-asc');
              onClose();
            }}
          >
            <Text style={styles.optionText}>Ordre alphabétique A-Z</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              onSort('alphabetical-desc');
              onClose();
            }}
          >
            <Text style={styles.optionText}>Ordre alphabétique Z-A</Text>
          </TouchableOpacity>

          {/* Tri par statut (online/offline) */}
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              onSort('status-online');
              onClose();
            }}
          >
            <Text style={styles.optionText}>Statut : En ligne</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => {
              onSort('status-offline');
              onClose();
            }}
          >
            <Text style={styles.optionText}>Statut : Hors ligne</Text>
          </TouchableOpacity>

          {/* Bouton Annuler */}
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>Annuler</Text>
          </TouchableOpacity>
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
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f5',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#007aff',
  },
  cancelButton: {
    marginTop: 20,
  },
  cancelText: {
    fontSize: 16,
    color: '#ff3b30',
  },
});

export default SortModal;
