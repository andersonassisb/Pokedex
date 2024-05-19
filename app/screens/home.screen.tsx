import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, View, Text, ListRenderItem } from 'react-native';
import { useGetAllPokemons } from '../hooks';
import { RESULT_LIMIT } from '../constants';
import { MinimalLink } from '../services/types';

interface Props {
  testID?: string;
}

const HomeScreen: React.FC<Props> = ({ testID = 'HomeScreen' }) => {
  const [offset, setOffset] = React.useState(0);

  const { data, isError, isLoading } = useGetAllPokemons({
    limit: RESULT_LIMIT,
    offset,
  });

  const renderItem = useCallback<ListRenderItem<MinimalLink>>(
    ({ item, index }) => (
      <View testID={`${testID}-pokemon-${index}`}>
        <Text>{item.name}</Text>
      </View>
    ),
    []
  );

  const ListEmptyComponent = () => {
    if (isLoading) {
      return <ActivityIndicator />;
    }
    if (isError) {
      return <Text>Something went wrong</Text>;
    }
    return null;
  }

  return (
    <View testID={testID}>
      <FlatList
        data={data}
        renderItem={renderItem}
        testID={`${testID}-list-pokemons`}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={(_, index) => String(index)}
      />
    </View>
  );
};

export default HomeScreen;
