import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import api from '../services/api';

export default function HomeScreen({ navigation }) {
  const [armarios, setArmarios] = useState([]);

  const carregar = async () => {
    const { data } = await api.get('/armarios');
    setArmarios(data);
  };

  useEffect(() => {
    const unsub = navigation.addListener('focus', carregar);
    return unsub;
  }, [navigation]);

  const excluir = (id) => {
    Alert.alert('Confirmar', 'Excluir este armário?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: async () => {
        await api.delete(`/armarios/${id}`);
        carregar();
      }}
    ]);
  };

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.btnNovo} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={s.btnNovoTxt}>+ Novo Armário</Text>
      </TouchableOpacity>
      <FlatList
        data={armarios}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Text style={s.nome}>{item.nome}</Text>
            <Text>{item.material} • {item.cor} • {item.quantidadePortas} portas</Text>
            <Text>R$ {Number(item.preco).toFixed(2)}</Text>
            <View style={s.acoes}>
              <TouchableOpacity style={s.btnEditar} onPress={() => navigation.navigate('Editar', { id: item.id })}>
                <Text style={s.btnTxt}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={s.btnExcluir} onPress={() => excluir(item.id)}>
                <Text style={s.btnTxt}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  btnNovo: { backgroundColor: '#2e86de', padding: 12, borderRadius: 8, marginBottom: 16, alignItems: 'center' },
  btnNovoTxt: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: '#fff', padding: 14, borderRadius: 8, marginBottom: 12, elevation: 2 },
  nome: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  acoes: { flexDirection: 'row', marginTop: 10, gap: 8 },
  btnEditar: { flex: 1, backgroundColor: '#f39c12', padding: 8, borderRadius: 6, alignItems: 'center' },
  btnExcluir: { flex: 1, backgroundColor: '#e74c3c', padding: 8, borderRadius: 6, alignItems: 'center' },
  btnTxt: { color: '#fff', fontWeight: 'bold' },
});