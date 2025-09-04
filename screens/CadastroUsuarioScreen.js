import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function CadastroUsuarioScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleCadastro = async () => {
        if (email === "" || senha === "") {
            setErro("Preencha todos os campos.");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, senha);
            navigation.replace("Login");
        } catch (error) {
            setErro("Erro ao cadastrar. Tente outro e-mail ou senha.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastro de Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />
            {erro ? <Text style={styles.erro}>{erro}</Text> : null}
            <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
                <Text style={styles.botaoTexto}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.link}>Já tem conta? Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "#fff",
    },
    botao: {
        backgroundColor: "#388e3c",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "100%",
        alignItems: "center",
    },
    botaoTexto: {
        color: "#fff",
        fontWeight: "bold",
    },
    link: {
        color: "#388e3c",
        marginTop: 15,
        textDecorationLine: "underline",
    },
    erro: {
        color: "red",
        marginBottom: 10,
    },
});
