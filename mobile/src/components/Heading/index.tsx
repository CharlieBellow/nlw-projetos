import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle, ...rest}: Props) {
  return (
    // {..rest = significa que eu estou passando todas as props do componente.. (no caso, eu especifiquei algumas e depois disse todo o resto passa pra cá também)}
    <View style={styles.container} {...rest}>
      {/* aqui é onde uso as propriedades que fora criadas lá no estilo */}
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}
