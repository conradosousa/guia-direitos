import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-paper";

export default function Resultados() {
    // Mock de benefícios fixos (vamos deixar dinâmico depois)
    const beneficios = [
        {
            id: 1,
            titulo: "Bolsa Família",
            descricao: "Auxílio financeiro para famílias em situação de vulnerabilidade.",
        },
        {
            id: 2,
            titulo: "Tarifa Social de Energia Elétrica",
            descricao: "Desconto na conta de luz para famílias de baixa renda.",
        },
        {
            id: 3,
            titulo: "Minha Casa Minha Vida",
            descricao: "Programa habitacional com subsídios para aquisição da casa própria.",
        },
    ];

    return (
        <ScrollView style={{ flex: 1, padding: 16, backgroundColor: "#f2f2f2" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
                Benefícios disponíveis
            </Text>

            {beneficios.map((item) => (
                <Card key={item.id} style={{ marginBottom: 16, borderRadius: 12, elevation: 4 }}>
                    <Card.Content>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
                            {item.titulo}
                        </Text>
                        <Text style={{ fontSize: 16, color: "#555" }}>{item.descricao}</Text>
                    </Card.Content>
                </Card>
            ))}
        </ScrollView>
    );
}
