import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const REGRAS_BENEFICIOS = [
    {
        id: "1",
        nome: "Bolsa Família",
        descricao: "Auxílio mensal para famílias em situação de vulnerabilidade social.",
        criterio: usuario => usuario.renda && usuario.renda <= 218,
        motivo: "Renda familiar igual ou inferior a R$218 por pessoa."
    },
    {
        id: "2",
        nome: "Auxílio Gás",
        descricao: "Benefício para ajudar na compra do botijão de gás de cozinha.",
        criterio: usuario => usuario.renda && usuario.renda <= 218,
        motivo: "Renda familiar igual ou inferior a R$218 por pessoa."
    },
    {
        id: "3",
        nome: "Minha Casa Minha Vida",
        descricao: "Programa habitacional para facilitar a aquisição da casa própria.",
        criterio: usuario => true,
        motivo: "Disponível para famílias de baixa renda."
    },
    {
        id: "4",
        nome: "BPC/LOAS",
        descricao: "Benefício assistencial para idosos e pessoas com deficiência de baixa renda.",
        criterio: usuario => usuario.idade && usuario.idade >= 65,
        motivo: "Idade igual ou superior a 65 anos."
    },
];

export default function DireitosScreen({ route }) {
    const usuario = route.params || {};
    // Mock de renda e idade se não vier do cadastro
    usuario.renda = usuario.renda || 200;
    usuario.idade = usuario.idade || 66;

    const beneficiosElegiveis = REGRAS_BENEFICIOS.filter(b => b.criterio(usuario));

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Olá, {usuario.nome}!</Text>
            <Text style={styles.subtitulo}>Aqui você poderá ver informações sobre os seus direitos e benefícios sociais.</Text>

            <Text style={styles.dado}>📅 Nascimento: {usuario.nascimento || usuario.dataNascimento}</Text>
            <Text style={styles.dado}>🪪 CPF: {usuario.cpf}</Text>
            <Text style={styles.dado}>👩‍🦱 Mãe: {usuario.mae}</Text>

            <Text style={styles.tituloSecao}>Benefícios elegíveis:</Text>
            {beneficiosElegiveis.length > 0 ? (
                <FlatList
                    data={beneficiosElegiveis}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.nomeBeneficio}>{item.nome} <Text style={{color:'#388e3c'}}>Elegível</Text></Text>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                            <Text style={styles.motivo}>Motivo: {item.motivo}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.dado}>Nenhum benefício encontrado para seu perfil.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
    titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
    subtitulo: { fontSize: 16, marginBottom: 15 },
    dado: { fontSize: 16, marginBottom: 5 },
    tituloSecao: { fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
    card: { backgroundColor: "#fff", padding: 15, borderRadius: 8, marginBottom: 12, elevation: 2 },
    nomeBeneficio: { fontSize: 16, fontWeight: "bold" },
    descricao: { fontSize: 14, color: "#555" },
    motivo: { fontSize: 13, color: "#1976d2", marginTop: 4 },
});
