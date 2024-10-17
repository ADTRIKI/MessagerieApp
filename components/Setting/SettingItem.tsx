import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

interface SettingItemProps {
  title: string;
  iconName: string;
  onPress: () => void;
  iconBackgroundColor?: string; // Option pour définir la couleur de fond
}

const SettingItem: React.FC<SettingItemProps> = ({ title, iconName, onPress, iconBackgroundColor = '#f0f0f5' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconBackground, { backgroundColor: iconBackgroundColor }]}>
        <Ionicons name={iconName} size={20} color="#fff" style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#c7c7cc" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  iconBackground: {
    width: 25,
    height: 25,
    borderRadius: 5, // Arrondi complet
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    color: '#fff',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default SettingItem;
