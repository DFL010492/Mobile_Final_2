import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UserMenu({ visible, onClose, onNavigate }) {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => onNavigate('Perfil')} style={styles.option}>
            <Text style={styles.text}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('Config')} style={styles.option}>
            <Text style={styles.text}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNavigate('Login')} style={styles.option}>
            <Text style={[styles.text, { color: 'red' }]}>Sair</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#00000044',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingLeft: 10,
  },
  menu: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    elevation: 5,
    width: 180,
  },
  option: {
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
  },
});
