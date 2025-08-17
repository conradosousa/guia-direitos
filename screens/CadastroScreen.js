// screens/CadastroScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [mae, setMae] = useState("");

    const handleAvancar = () => {
        // Aqui futuramente você pode validar ou buscar os benefícios do usuário
        navigation.navigate("Direitos", {
            dadosUsuario: { nome, dataNascimento, cpf, mae },
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Preencha seus dados</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
                style={styles.input}
                placeholder="Data de nascimento (dd/mm/aaaa)"
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />

            <TextInput
                style={styles.input}
                placeholder="CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
            />

            <TextInput
                style={styles.input}
                placeholder="Nome completo da mãe"
                value={mae}
                onChangeText={setMae}
            />

         // CadastroScreen.js
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Direitos', { usuario: { nome, dataNascimento, cpf, mae } })}
            >
                <Text style={styles.textoBotao}>Avançar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#f0f4f7",
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
        color: "#111827",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        fontSize: 16,
    },
    botao: {
        backgroundColor: "#2563EB",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 16,
    },
    textoBotao: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

