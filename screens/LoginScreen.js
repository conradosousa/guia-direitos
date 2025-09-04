import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleLogin = async () => {
        if (email === "" || senha === "") {
            setErro("Preencha todos os campos.");
            return;
        }
        try {
            await signInWithEmailAndPassword(auth, email, senha);
            navigation.replace("Cadastro");
        } catch (error) {
            setErro("E-mail ou senha inválidos.");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Entrar</Text>
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
            <TouchableOpacity style={styles.botao} onPress={handleLogin}>
                <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CadastroUsuario")}> 
                <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
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
        backgroundColor: "#1976d2",
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
        color: "#1976d2",
        marginTop: 15,
        textDecorationLine: "underline",
    },
    erro: {
        color: "red",
        marginBottom: 10,
    },
});
            
