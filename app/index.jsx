import { StyleSheet, Text, View ,Image, Pressable} from "react-native";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Image style = {styles.image} source={require("./foco.png")}/>
      <View style={styles.actions}>
       
        {/* Botoes como se fosse uma NAV */}
        <View style={styles.context}>
          
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Foco</Text>
          </Pressable>
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Pausa Curta</Text>
          </Pressable>
          <Pressable style={styles.contextButton}>
            <Text style={styles.contextButtonText}>Pausa Longa</Text>
          </Pressable>

        </View>

        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Projeto fictício e sem fins comerciais.
          </Text>
                    <Text style={styles.footerText}>
            Desenvolvido por Aluno. 
          </Text>
        </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap:40, 
    },
    actions: {
      padding: 24,
      backgroundColor: '#14448080',
      borderRadius: 32,
      borderColor: '#144480',
      borderWidth: 2,
      gap: 32,
      alignItems: "center",
      width: '80%',
    },
    timer: {
      color: '#FFFFFF',
      fontSize: 54,
      fontWeight: "bold",
      textAlign: "center",
    },
    button: {
      backgroundColor: '#B872FF',
      padding: 8,
      borderRadius:32,
      gap: 10,

    },
    buttonText: {
      fontSize: 18,
      fontWeight: 600,
    },
    footer: {
      width:'80%',
      alignItems: "center",
      gap: 8,
    },

    footerText: {
      color: '#98A0A8',
      textAlign: "center",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing:0,


    },
    context: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap:8,
    },
    contextButton: {

    },
    contextButtonText:{},
    contextButtonActive:{},
 
  }
);

  