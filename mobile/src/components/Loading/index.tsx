import { View, ActivityIndicator } from 'react-native';
import { THEME } from "../../theme";

import { styles } from './styles';
//rnbc + tab
export function Loading() {
  return (
    <View style={styles.container}>
      {/* loading */}
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
