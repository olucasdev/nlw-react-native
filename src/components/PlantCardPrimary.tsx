import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles} from './styles';
import { SvgFromUri} from 'react-native-svg';

interface PlantProps extends RectButtonProps {
   data: {
      name: string;
      photo: string;
   }
}

export const PlantCardPrimary = ({data, ...rest}: PlantProps) => {
   return(
      <RectButton
         style={styles.primaryContainer}
         {...rest}
      >
         <SvgFromUri 
            uri={data.photo} 
            width={70} 
            height={70}
         />
         <Text style={styles.primaryText}>
            {data.name}
         </Text>
      </RectButton>
   )
}