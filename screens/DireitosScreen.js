import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DIREITOS = {
    Saúde: [
        { id: '1', texto: 'Atendimento gratuito pelo SUS' },
        { id: '2', texto: 'Vacinação obrigatória para crianças' },
    ],
    Educação: [
        { id: '1', texto: 'Educação básica gratuita e obrigatória' },
        { id: '2', texto: 'Transporte escolar para alunos de baixa renda' },
    ],
    Trabalho: [
        { id: '1', texto: 'Carteira assinada é obrigatória' },
        { id: '2', texto: 'Direito a férias e 13º salário' },
    ],
    'Direitos do Consumidor': [
        { id: '1', texto: 'Produto com garantia mínima de 90 dias' },
        { id: '2', texto: 'Direito a troca ou devolução em até 7 dias' },
    ],
};

export default function TelaDireitos({ route }) {
    const { categoria } = route.params;
    const lista = DIREITOS[categoria] || [];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{categoria}</Text>
            <FlatList
                data={lista}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.texto}>{item.texto}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#fff' },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: '#2563EB' },
    item: { backgroundColor: '#f0f4f7', padding: 15, borderRadius: 8, marginBottom: 10 },
    texto: { fontSize: 16, color: '#333' },
});
