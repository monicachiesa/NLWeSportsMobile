import { Background } from './src/components/Background';
import { StatusBar } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({  //carrega as fontes na aplicação
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ?
        <Home />
        : <Loading /> //se as fontes tiverem carregando, mostra o loading
      }
    </Background>
  );
}
