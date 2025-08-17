// DireitosScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DireitosScreen({ route }) {
    const { usuario } = route.params || {};

    return (
        <View style={styles.container}>
            {usuario ? (
                <>
                    <Text style={styles.titulo}>Olá, {usuario.nome}!</Text>
                    <Text style={styles.texto}>
                        Aqui você poderá ver informações sobre os seus direitos e benefícios sociais.
                    </Text>
                    <Text style={styles.info}>📅 Nascimento: {usuario.nascimento}</Text>
                    <Text style={styles.info}>🪪 CPF: {usuario.cpf}</Text>
                    <Text style={styles.info}>👩 Mãe: {usuario.mae}</Text>
                </>
            ) : (
                <View>
                    <Text>Olá, usuário!</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, backgroundColor: '#fff' },
    titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    texto: { fontSize: 16, marginBottom: 12 },
    info: { fontSize: 15, color: '#333', marginBottom: 6 },
});
