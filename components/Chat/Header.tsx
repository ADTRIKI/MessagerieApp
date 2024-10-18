import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  onPlusPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPlusPress }) => {
  return (
    <>
      {/* Le conteneur principal qui prend tout l'espace */}
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
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
              <Ionicons name="person-add-outline" size={22} color="#007aff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlusPress} style={{ marginLeft: 12 }}>
              <Ionicons name="create-outline" size={22} color="#007aff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Barre de recherche */}
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={18} color="#8e8e93" />
          <TextInput
            placeholder="Rechercher"
            placeholderTextColor="#8e8e93"
            style={styles.searchInput}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f9f9f9', // Fond légèrement plus doux que blanc pur
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5', // Ligne de séparation subtile
  },
  headBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, // Espacement réduit
    paddingTop: 10, 
    paddingBottom: 5, // Moins d'espace en bas pour un style compact
    backgroundColor: '#f9f9f9', // Fond blanc subtil
  },
  headText: {
    color: '#007aff',
    fontSize: 17, // Légèrement plus petit pour un effet Apple épuré
    fontWeight: '500', // Moins gras pour une apparence plus fine
  },
  title: {
    fontSize: 18, // Taille plus sobre pour le titre
    fontWeight: '600',
    color: '#000', 
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ebebf0', // Couleur plus douce pour la barre de recherche
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 10, // Espacement plus étroit sur les côtés
    marginTop: 8,
    marginBottom: 8, 
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    color: '#000', // Texte noir
    flex: 1,
  },
});

export default Header;
