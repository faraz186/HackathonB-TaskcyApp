import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/style';

export default function HMIcon(props: any) {
    const { name, size, color } = props
    return <Icon name={name} size={size ?? 20} color={color ?? styles._dark} />
}
{/* <HMIcon size={35} name='photo-camera' /> */ }