//import { StatusBar } from 'expo-status-bar';
//import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Background } from "./src/components/Background";
import { StatusBar } from "react-native";
import {
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_900Black,
} from "@expo-google-fonts/inter";

import {Home} from './src/screens/Home'
import { Loading } from "./src/components/Loading";
//interface ButtonProps {
//  title: string
//}

//function Button(props: ButtonProps) {
//  return (
//    <TouchableOpacity>
//      <Text>
//      {props.title}
//      </Text>
//    </TouchableOpacity>
//  )
//}

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_900Black,
	});

	return (
		// a view é o equivalente a uma div no react/html
		<Background>
			{/* barra de status transparente */}
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			{fontsLoaded ? <Home/> : <Loading/>}
			{/*style={styles.container}*/}
			{/*<Text>
        Hello React Native
      </Text>

      <Button title="send 1" />
      <Button title="send 2" />
      <Button title="Hello World" />*/}

			{/* Status bar manipula a cor da barra de status */}
			{/*<StatusBar style="auto" backgroundColor="green"/>*/}
		</Background>
	);
}

//const styles = StyleSheet.create({
//  container: {
//    //aqui o flexbox já é ativo por padrão
//    flex: 1,
//    // os nomes das propriedades são escritos em camelCase
//    // e os valores são escritos com aspas
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
