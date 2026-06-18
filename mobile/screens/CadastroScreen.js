import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import api from '../services/api';

export default function CadastroScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '', material: '', cor: '', quantidadePortas: '', preco: '', descricao: ''
  });

  const set = (campo, valor) => setForm(prev => ({ ...prev, [campo]: valor }));

  const salvar = async () => {
    if (!form.nome || !form.preco) return Alert.alert('Erro', 'Nome e preço são obrigatórios.');
    await api.post('/armarios', {
      ...form,
      quantidadePortas: Number(form.quantidadePortas),
      preco: Number(form.preco)
    });
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={s.container}>
      {[
        { label: 'Nome', campo: 'nome' },
        { label: 'Material', campo: 'material' },
        { label: 'Cor', campo: 'cor' },
        { label: 'Quantidade de Portas', campo: 'quantidadePortas', keyboard: 'numeric' },
        { label: 'Preço', campo: 'preco', keyboard: 'numeric' },
        { label: 'Descrição', campo: 'descricao', multi: true },
      ].map(({ label, campo, keyboard, multi }) => (
        <View key={campo}>
          <Text style={s.label}>{label}</Text>
          <TextInput
            style={[s.input, multi && s.multi]}
            value={form[campo]}
            onChangeText={v => set(campo, v)}
            keyboardType={keyboard || 'default'}
            multiline={!!multi}
          />
        </View>
      ))}
      <TouchableOpacity style={s.btn} onPress={salvar}>
        <Text style={s.btnTxt}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#f5f5f5' },
  label: { marginTop: 12, marginBottom: 4, fontWeight: 'bold', color: '#333' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, borderWidth: 1, borderColor: '#ddd' },
  multi: { height: 80, textAlignVertical: 'top' },
  btn: { backgroundColor: '#2e86de', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 24 },
  btnTxt: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});