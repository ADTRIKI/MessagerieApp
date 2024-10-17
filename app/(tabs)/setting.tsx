import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SettingItem from '@/components/Setting/SettingItem';
import UserProfileHeader from '@/components/Setting/UserProfileHeader'; 

const Settings: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* User Profile Header */}
      <UserProfileHeader />  
        

            <View style={styles.section}>
              <SettingItem
                title="Changer la photo de profil"
                iconName="person-outline"
                iconBackgroundColor="#007aff"
                onPress={() => console.log('Changer la photo de profil')}
              />
              <SettingItem
                title="Définir un nom d'utilisateur"
                iconName="at-outline"
                iconBackgroundColor="#007aff"
                onPress={() => console.log('Bleu Apple')}
              />
            </View>


      {/* Section 1 */}
      <View style={styles.section}>
        <SettingItem
          title="Mon profil"
          iconName="person-circle-outline"
          iconBackgroundColor="#f55353"
          onPress={() => console.log('Mon profil')}
        />
      </View>

      {/* Section 2 */}
      <View style={styles.section}>
        <SettingItem
          title="Messages enregistrés"
          iconName="bookmark-outline"
          iconBackgroundColor="#007aff"
          onPress={() => console.log('Messages enregistrés')}
        />
        <SettingItem
          title="Appels récents"
          iconName="call-outline"
          iconBackgroundColor="#34c759"
          onPress={() => console.log('Appels récents')}
        />
        <SettingItem
          title="Appareils"
          iconName="tablet-landscape-outline"
          iconBackgroundColor="#ff9500"
          onPress={() => console.log('Appareils')}
        />
        <SettingItem
          title="Dossiers d'échanges"
          iconName="folder-outline"
          iconBackgroundColor="#5ac8fa"
          onPress={() => console.log('Dossiers d\'échanges')}
        />
      </View>

      {/* Section 3 */}
      <View style={styles.section}>
        <SettingItem
          title="Notifications et sons"
          iconName="notifications-outline"
          iconBackgroundColor="#ff3b30"
          onPress={() => console.log('Notifications et sons')}
        />
        <SettingItem
          title="Confidentialité et sécurité"
          iconName="lock-closed-outline"
          iconBackgroundColor="#8e8e93"
          onPress={() => console.log('Confidentialité et sécurité')}
        />
        <SettingItem
          title="Données et stockage"
          iconName="cloud-outline"
          iconBackgroundColor="#4cd964"
          onPress={() => console.log('Données et stockage')}
        />
        <SettingItem
          title="Apparence"
          iconName="color-palette-outline"
          iconBackgroundColor="#5856d6"
          onPress={() => console.log('Apparence')}
        />
        <SettingItem
          title="Économie d'énergie"
          iconName="battery-half-outline"
          iconBackgroundColor="#ffcc00"
          onPress={() => console.log('Économie d\'énergie')}
        />
        <SettingItem
          title="Langue"
          iconName="globe-outline"
          iconBackgroundColor="#ff2d55"
          onPress={() => console.log('Langue')}
        />
      </View>

      {/* Section 4 */}
      <View style={styles.section}>
        <SettingItem
          title="Telegram Premium"
          iconName="star-outline"
          iconBackgroundColor="#af52de"
          onPress={() => console.log('Telegram Premium')}
        />
        <SettingItem
          title="Mes étoiles"
          iconName="star-half-outline"
          iconBackgroundColor="#af52de"
          onPress={() => console.log('Mes étoiles')}
        />
        <SettingItem
          title="Telegram Professionnel"
          iconName="pricetag-outline"
          iconBackgroundColor="#ff9500"
          onPress={() => console.log('Telegram Professionnel')}
        />
        <SettingItem
          title="Envoyer un cadeau"
          iconName="gift-outline"
          iconBackgroundColor="#ff3b30"
          onPress={() => console.log('Envoyer un cadeau')}
        />
      </View>

      {/* Section 5 */}
      <View style={styles.section}>
        <SettingItem
          title="Poser une question"
          iconName="chatbubble-ellipses-outline"
          iconBackgroundColor="#007aff"
          onPress={() => console.log('Poser une question')}
        />
        <SettingItem
          title="FAQ"
          iconName="help-outline"
          iconBackgroundColor="#34c759"
          onPress={() => console.log('FAQ')}
        />
        <SettingItem
          title="Fonctionnalités"
          iconName="newspaper-outline"
          iconBackgroundColor="#ffcc00"
          onPress={() => console.log('Fonctionnalités')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5', // Couleur de fond
    paddingHorizontal: 10,
  },
  section: {
    backgroundColor: '#fff', // Blanc pour les sections
    borderRadius: 10,
    marginBottom: 15, // Espacement entre les sections
    paddingVertical: 10, // Espacement interne vertical
    paddingHorizontal: 15, // Espacement interne horizontal
  },
});

export default Settings;
