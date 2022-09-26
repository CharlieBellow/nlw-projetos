import { useEffect, useState } from "react";
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
//import { useNavigation } from "@react-navigation/native";

import logoImg from '../../assets/logo-nlw-esports.png';

import { GameCard, GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
//import {GAMES} from '../../utils/games'

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  //const navigation = useNavigation();

  function handleOpenGaming({ id, title, bannerUrl }: GameCardProps) {
    //navigation.navigate('game', { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch('http://192.168.0.100:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, []);

  return (
		<Background>
			<SafeAreaView style={styles.container}>
				<Image source={logoImg} style={styles.logo} />

				<Heading
					title="Encontre seu duo!"
					subtitle="Selecione o game que deseja jogar..."
				/>

				<FlatList
					data={games}
					//key para o Id
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<GameCard data={item} onPress={() => handleOpenGaming(item)} />
					)}
					showsHorizontalScrollIndicator={
						false
					} /* desativa o scroll horizontal */
					horizontal
					//criando um estilo para que mostre um espaço maior no último card da lista pra que o usuário entenda que não tem mais itens pra scrollar
					contentContainerStyle={styles.contentList}
				/>
			</SafeAreaView>
		</Background>
	);
}