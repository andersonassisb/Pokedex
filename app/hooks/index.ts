import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import {
  fetchPokemonByName,
  selectStatusByName,
  selectDataByName,
  selectAllPokemons,
  fetchAll
} from "../services/middlewares";
import { IOptionalConfig } from "../services/types";

export function useGetAllPokemons(options: IOptionalConfig) {
  const dispatch = useDispatch<AppDispatch>();

  const { data, status } = useSelector((state: RootState) =>
    selectAllPokemons(state)
  );

  useEffect(() => {
    if (!status) {
      dispatch(fetchAll(options));
    }
  }, [status, dispatch, options]);

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return { data, isUninitialized, isLoading, isError, isSuccess };
}

export function useGetPokemonByNameQuery(name: string) {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector((state: RootState) =>
    selectStatusByName(state, name)
  );

  const data = useSelector((state: RootState) => selectDataByName(state, name));
  useEffect(() => {

    if (!status) {
      dispatch(fetchPokemonByName(name));
    }
  }, [status, name, dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === "pending" || status === undefined;
  const isError = status === "rejected";
  const isSuccess = status === "fulfilled";

  return { data, isUninitialized, isLoading, isError, isSuccess };
}
