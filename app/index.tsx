import { Text, View, Image } from "react-native";
import * as React from 'react'
import { useGetPokemonByNameQuery } from "@/src/services/pokemon";

export default function Index() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // console.log(data)
  return (
    <View style={{ flex: 1 }}>
      {error ? <Text> there is an error </Text> : isLoading ? <Text> loading </Text> :
      
        <View>
          <Text style={{}}>{data.species.name}</Text>
          <Image style={{ height: 100, width: 200 }} src={data.sprites?.front_shiny} alt={data.species.name} />
        </View>
      }
    </View>

  );
}
