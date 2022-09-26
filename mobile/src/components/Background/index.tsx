// componentes que se repetem em todas as telas

import { ImageBackground } from 'react-native';

import backgroundImg from '../../assets/background-galaxy.png';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

//pra gerar a estrutura com a extensão 'R components' é só digitar: rnso e apertar tab. Ele já cria a estrutura colocando o nome do componente igual ao da pasta wm que ele está;

export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {/* tudo que tiver aqui dentro vai ser renderizado como background em todas as telas */}
      {children}
    </ImageBackground>
  );
}
