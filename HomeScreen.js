import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const categorias = [
	'Saúde',
	'Educação',
	'Trabalho',
	'Direitos do Consumidor',
];

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Guia de Direitos e Benefícios</Text>
			<Text style={styles.subtitulo}>Escolha uma categoria:</Text>
			{categorias.map(cat => (
				<View key={cat} style={styles.btnBox}>
					<Button
						title={cat}
						color="#2563EB"
						onPress={() => navigation.navigate('Direitos', { categoria: cat })}
					/>
				</View>
			))}
			<View style={{ marginTop: 32 }}>
				<Button title="Sobre" onPress={() => navigation.navigate('Sobre')} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 24 },
	titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 16, color: '#2563EB', textAlign: 'center' },
	subtitulo: { fontSize: 18, marginBottom: 24, color: '#333', textAlign: 'center' },
	btnBox: { width: '100%', marginBottom: 12 },
});
