import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmptyChatPage: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.emptyPage}>
        <Text style={styles.emptyText}>Pas de conversations pour le moment.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
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
