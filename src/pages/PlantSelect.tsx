import React, { useEffect, useState } from 'react';
import { View, Text, FlatList} from 'react-native';

import { styles } from '../styles/PlantSelectStyle';

import { Header } from '../components/Header';
import { EnviromentButton } from '../components/EnviromentButton';
import { PlantCardPrimary } from '../components/PlantCardPrimary';

import api from '../services/api';

interface EnviromentProps{
   key: string;
   title: string;
}

interface PlantProps{
id: string;
name: string;
about: string;
water_tips: string;
photo: string;
environments: [string];
frequency: {
   times: string;
   repeat_every: string;
   }
}

export function PlantSelect(){
   const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
   const [plants, setPlants] = useState<PlantProps[]>([]);
   const [ enviromentSelected, setEnviromentSelected] = useState('all');
   const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

   function handleEnviromentSelected( enviroment: string){
      setEnviromentSelected(enviroment);

      if(enviroment == 'all'){
         return setFilteredPlants(plants);
         const filtered = plants.filter( plant => 
            plant.environments.includes(enviroment)
            );
         setFilteredPlants(filtered);
      }
   }

   useEffect(() => {
      async function fetchEnviroment() {
         const { data } = await api
         .get('plants_environments?_sort=title&order=asc');
         setEnviroments([
            {
            key: 'all',
            title: 'Todos'
            },
            ...data
      ]);
      }
      fetchEnviroment();

   },[])

   useEffect(() => {
      async function fetchPlants() {
        const { data } = await api
        .get('plants?_sort=name&order=asc');
        setPlants(data);   
      }
      fetchPlants();
    }, [])

   return(
      <View style={styles.container} >
         <View style={styles.container}>
         <Header />
         
         
         <Text style={styles.title}>
         Em qual ambiente
         </Text>
         <Text style={styles.subtitle}>
         você quer colocar sua planta?
         </Text>
         </View>
         <View style={styles.enviromentList}>
            <FlatList  data={enviroments} 
            renderItem={({item}) => (
               <EnviromentButton 
               title={item.title}
               active={item.key === enviromentSelected}
               onPress={() => handleEnviromentSelected(item.key)}
               />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
            />
         </View>
         <View style={styles.plants}>
            <FlatList
               data={filteredPlants}
               keyExtractor={item => String(item.id)}
               renderItem={({ item }) => (
               <PlantCardPrimary data={item} />
               )}
               showsVerticalScrollIndicator={false}
               numColumns={2}
            />
         </View>
      </View>
   )
}