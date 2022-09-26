import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 214,
    height: 120,
    marginTop: 74,
    marginBottom: 48,
  },
  contentList: {
    //criando um estilo para que mostre um espaço maior no último card da lista pra que o usuário entenda que não tem mais itens pra scrollar
    paddingLeft: 32,
    paddingRight: 64,
  }
});
