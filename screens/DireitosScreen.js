import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DireitosScreen({ route }) {
    // Pegando a categoria enviada pela HomeScreen
    const { categoria } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{categoria}</Text>
            <Text style={styles.texto}>
                Aqui você poderá ver informações sobre os seus direitos relacionados a <Text style={styles.destaque}>{categoria}</Text>.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff' },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#2563EB' },
    texto: { fontSize: 18, textAlign: 'center', color: '#333' },
    destaque: { fontWeight: 'bold', color: '#111' },
});
