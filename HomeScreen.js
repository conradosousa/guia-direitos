import React from 'react';import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';export default function HomeScreen({ navigation }) {	return (		<View style={styles.container}>			<Text style={styles.titulo}>Guia de Direitos</Text>			<TouchableOpacity				style={styles.botao}				onPress={() => navigation.navigate('Direitos')}			>				<Text style={styles.textoBotao}>Ver Direitos</Text>			</TouchableOpacity>			<TouchableOpacity				style={styles.botao}				onPress={() => navigation.navigate('Sobre')}			>				<Text style={styles.textoBotao}>Sobre</Text>			</TouchableOpacity>		</View>	);}const styles = StyleSheet.create({	container: {		flex: 1,		backgroundColor: '#e3f2fd',		alignItems: 'center',		justifyContent: 'center',		padding: 24,	},	titulo: {		fontSize: 28,		fontWeight: 'bold',		color: '#1565c0',		marginBottom: 40,	},	botao: {
		backgroundColor: '#1976d2',
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginBottom: 20,
		elevation: 2,
	},
	textoBotao: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
});
