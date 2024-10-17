import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
  onPlusPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlusPress }) => {
  return (
    <View style={styles.headBar}>
      <TouchableOpacity onPress={() => console.log('Modifier')}>
        <Text style={styles.headText}>Modifier</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Échanges</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => console.log('Ajouter un groupe')}>
          <Ionicons name="person-add-outline" size={24} color="#007aff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlusPress} style={{ marginLeft: 15 }}>
          <Ionicons name="create-outline" size={24} color="#007aff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  headText: {
    color: '#007aff',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
