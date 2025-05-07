// screens/DashboardScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import useSuperheroApi from '../hooks/SuperHeroApi';

export default function BatDataBase({ navigation }) {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const { data, loading, error } = useSuperheroApi(query);

  const handleSearch = () => {
    if (search.trim()) {
      setQuery(search.trim());
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { hero: item })}
      style={styles.card}
    >
      <Image source={{ uri: item.image.url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite o nome do herói"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
      {loading && <ActivityIndicator size="large" color="blue" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 8,
  },
  image: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { fontSize: 18 },
});
