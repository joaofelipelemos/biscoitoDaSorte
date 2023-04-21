import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./assets/biscoito.png"));
  const [textoFrase, setTextoFrase] = useState("");

  let frases = [
    "É em meio a dificuldade que se encontra a oportunidade",
    "O êxito é ir de frustração a frustração sem perder a animação",
    "Mesmo que algo pareça difícil, nunca desista antes de tentar",
    "Você é o único que entende as suas dificuldades, por isso motive se a prosseguir",
    "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso",
    "A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis",
    "Que os dias bons se tornem rotina, e os ruins se tornem raros",
    "É genial celebrar a vitória, contudo é mais significativo aprender com as lições da derrota",
    "Qualquer dificuldade pode ser ultrapassada, já que para todo problema há uma solução",
    "Já pensou que você já superou muitas dificuldades até aqui?",
    "Suas pequenas vitórias são todas as dificuldades superadas durante sua vida, tenha orgulho delas",
    "Cada dificuldade ultrapassada te faz mais forte",
    "Desistir não deve ser considerado, mesmo que as coisas não sejam fáceis",
    "O êxito é a somatória dos pequenos esforços repetidos diariamente",
    "Para quem está iluminado, os dias de luz sempre retornam",
    "Conheci o pior das pessoas e o melhor de mim, passando por tempos difíceis",
    "Você não vai encontrar ninguém para sorrir por ti, então não deixe de sorrir",
    "Mesmo que nem todo dia seja bom, há algo de bom todo dia",
    "Em dias difíceis, lembre-se do que Deus já fez por ti. Recorde o que pode te oferecer esperança",
    "Da mesma forma que a felicidade não dura para sempre, a tristeza também não",
    "As dores não são eternas, se permita, o seu melhor é o suficiente",
    "Mesmo que a jornada seja lenta, abrir mão não acelera",
    "Que a expectativa por dias melhores nunca nos falte",
    "Você é maior do que toda essa tormenta, seja resiliente",
    "A vida é um eterno recomeço",
    "O fruto do que você escolher hoje, é o que você viverá amanhã",
    "Ser uma pessoa melhor é o objetivo do dia",
    "Se nada der certo hoje, acorde mais cedo amanhã e tente novamente",
    "Você nunca irá fazer nada, se ficar esperando pelas situações perfeitas",
    "O futuro ainda não chegou, seja grato pelo agora.",
    "Para chegar em lugares maravilhosos, é necessário passar por caminhos difíceis",
    "As estrelas mais brilhantes são produzidas nas noites mais escuras.",
    "A diferença entre os dias ruins e bons, é que um ensina e o outro marca",
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require("./assets/biscoitoAberto.png"));
  }

  function reiniciar() {
    setImg(require("./assets/biscoito.png"));
    setTextoFrase("");
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={img} />

      <Text style={styles.textoFrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.botao,
          {
            marginTop: 15,
            borderColor: "#121212",
          },
        ]}
        onPress={reiniciar}
      >
        <View style={styles.btnArea}>
          <Text
            style={[
              styles.btnTexto,
              {
                color: "#121212",
              },
            ]}
          >
            Reiniciar biscoito
          </Text>
        </View>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 230,
    height: 230,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
