import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="decks" options={{ title: 'Decks' }} />
      {/* <Tabs.Screen name="newDeck" options={{ title: 'newDecks' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} /> */}
    </Tabs>
  );
}