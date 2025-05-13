import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import useSuperheroApi from '../hooks/SuperHeroApi';
import styles from './style/BatStyles';
import Menu from '../components/Menu';
import BatmanLoading from '../components/LoadingOver';

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
      <Menu navigation={navigation} />
      <Text style={styles.title}>Bem-vindo ao BatDataBase!</Text>
      <TextInput
        placeholder="Digite o nome do herói"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        style={styles.input}
      />
      {loading && <BatmanLoading />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
