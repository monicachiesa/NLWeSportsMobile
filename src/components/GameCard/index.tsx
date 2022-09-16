import { Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface GameCardProps {
    id: string,
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

export interface Props extends TouchableOpacityProps {
    data: GameCardProps
}
export function GameCard({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground style={styles.cover} source={data.cover}>

                <LinearGradient style={styles.footer} colors={THEME.COLORS.FOOTER}>
                    <Text style={styles.name}>
                        {data.name}
                    </Text>

                    <Text style={styles.ads}>
                        {data.ads} anúncios
                    </Text>

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}