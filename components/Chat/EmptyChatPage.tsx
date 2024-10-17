import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyChatPage: React.FC = () => {
  return (
    <View style={styles.emptyPage}>
      <Text style={styles.emptyText}>Pas de conversations pour le moment.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f5',
  },
  emptyText: {
    fontSize: 16,
    color: '#8e8e93',
  },
});

export default EmptyChatPage;
