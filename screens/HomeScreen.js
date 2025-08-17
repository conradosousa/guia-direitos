import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CATEGORIAS = [
    { id: '1', nome: 'Saúde' },
    { id: '2', nome: 'Educação' },
    { id: '3', nome: 'Trabalho' },
    { id: '4', nome: 'Direitos do Consumidor' },
];

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList  
                data={CATEGORIAS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate('Direitos', { categoria: item.nome })}
                    >
                        <Text style={styles.textoBotao}>{item.nome}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#f0f4f7' },
    botao: { backgroundColor: '#2563EB', padding: 15, borderRadius: 8, marginBottom: 12 },
    textoBotao: { color: 'white', fontSize: 18, textAlign: 'center' },
});
