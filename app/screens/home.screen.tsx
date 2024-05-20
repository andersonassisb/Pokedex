import React, { useCallback } from 'react';
import { StyleSheet, FlatList, View, Text, ListRenderItem, TouchableOpacity } from 'react-native';
import { useGetAllPokemons } from '../hooks';
import { RESULT_LIMIT } from '../constants';
import { MinimalLink } from '../services/types';
import { Loading } from '../components/loading';
import { dispatch } from '../store/store';
import { fetchAll, incrementOffset } from '../services/middlewares';

interface Props {
  testID?: string;
}

const HomeScreen: React.FC<Props> = ({ testID = 'HomeScreen' }) => {
  const { data, isError, isLoading } = useGetAllPokemons();

  const renderItem = useCallback<ListRenderItem<MinimalLink>>(
    ({ item, index }) => (
      <TouchableOpacity style={styles.pokemonCard} testID={`${testID}-pokemon-${index}`}>
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    ),
    []
  );

  console.log(data);

  const loadMore = () => {
    dispatch(incrementOffset());
  };

  const renderFooter = () => {
    if (isLoading) {
      return (
        <Loading />
      );
    } 
    return null;
  };

  const ListEmptyComponent = () => {
    if (isLoading) {
      return <Loading />;
    }
    if (isError) {
      return <Text>Something went wrong</Text>;
    }
    return null;
  }

  return (
    <View style={styles.container} testID={testID}>
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        testID={`${testID}-list-pokemons`}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pokemonCard: {
    padding: 24,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
  },
  text: {
    textTransform: 'capitalize',
  },
});
