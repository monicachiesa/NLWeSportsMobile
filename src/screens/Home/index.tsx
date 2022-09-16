import { View, Image, FlatList } from 'react-native';
import React from 'react';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { GAMES } from '../../utils/games';

import { styles } from './styles';
import { Heading } from '../../components/Heading';

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={LogoImg} style={styles.logo} />

            <Heading
                title="Encontre seu duo"
                subtitle='Selecione o game que deseja jogar'
            />

            <FlatList
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <GameCard
                        data={item}
                    />
                )}
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false} //desabilita scroll na horizontal
                horizontal //por padrão vem true
                data={GAMES} />

        </View>
    );
}