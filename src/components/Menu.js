import React, { useState, useLayoutEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import UserMenu from './UserMenu';

export default function Menu({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 20 }}>☰</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const handleNavigate = (route) => {
    setMenuVisible(false);
    navigation.navigate(route);
  };

  return (
    <UserMenu
      visible={menuVisible}
      onClose={() => setMenuVisible(false)}
      onNavigate={handleNavigate}
    />
  );
}
