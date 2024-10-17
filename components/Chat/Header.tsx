import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface HeaderProps {
  onPlusPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlusPress }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headBar}>
        {/* Bouton Modifier à gauche */}
        <TouchableOpacity onPress={() => console.log('Modifier')}>
          <Text style={styles.headText}>Modifier</Text>
        </TouchableOpacity>

        {/* Titre centré */}
        <Text style={styles.title}>Échanges</Text>

        {/* Icônes à droite */}
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => console.log('Ajouter un groupe')}>
            <Ionicons name="person-add-outline" size={24} color="#007aff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPlusPress} style={{ marginLeft: 15 }}>
            <Ionicons name="create-outline" size={24} color="#007aff" />
          </TouchableOpacity>
        </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff', // Fond blanc pour la navbar
    
  },
  headBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: '#fff', // Fond blanc
  },
  headText: {
    color: '#007aff',
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Titre noir pour qu'il ressorte bien
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f5', // Couleur claire pour la barre de recherche
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15, // Espacement sur les côtés
    marginTop: 10, // Espace au-dessus de la barre de recherche
    marginBottom: 10, // Espace en dessous de la barre de recherche
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000', // Texte noir
    flex: 1,
  },
});

export default Header;
