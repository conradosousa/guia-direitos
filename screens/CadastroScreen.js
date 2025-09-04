// screens/CadastroScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^([0-9])\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[10])) return false;
    return true;
}

function calcularIdade(dataNascimento) {
    const partes = dataNascimento.split("/");
    if (partes.length !== 3) return null;
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);
    const hoje = new Date();
    const nascimento = new Date(ano, mes, dia);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    if (hoje < new Date(hoje.getFullYear(), mes, dia)) idade--;
    return idade;
}

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [mae, setMae] = useState("");
    const [erros, setErros] = useState({});

    const handleAvancar = () => {
        let novosErros = {};
        if (!nome.trim()) novosErros.nome = "O nome é obrigatório.";
        if (!mae.trim()) novosErros.mae = "O nome da mãe é obrigatório.";
        if (!validarCPF(cpf)) novosErros.cpf = "CPF inválido.";
        const idade = calcularIdade(dataNascimento);
        if (!idade || idade < 0) novosErros.dataNascimento = "Data de nascimento inválida.";
        if (idade < 65) novosErros.idade = "Idade insuficiente para BPC (mínimo 65 anos).";
        setErros(novosErros);
        if (Object.keys(novosErros).length === 0) {
            navigation.navigate("Direitos", {
                usuario: { nome, dataNascimento, cpf, mae, idade },
            });
        }
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
            {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Data de nascimento (dd/mm/aaaa)"
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />
            {erros.dataNascimento && <Text style={styles.erro}>{erros.dataNascimento}</Text>}
            {erros.idade && <Text style={styles.erro}>{erros.idade}</Text>}

            <TextInput
                style={styles.input}
                placeholder="CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
            />
            {erros.cpf && <Text style={styles.erro}>{erros.cpf}</Text>}

            <TextInput
                style={styles.input}
                placeholder="Nome completo da mãe"
                value={mae}
                onChangeText={setMae}
            />
            {erros.mae && <Text style={styles.erro}>{erros.mae}</Text>}

            <TouchableOpacity
                style={styles.botao}
                onPress={handleAvancar}
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
    erro: {
        color: "#d32f2f",
        fontSize: 14,
        marginBottom: 8,
    },

});

