import { DataProxy } from "apollo-cache";
import get from "lodash.get";
import placeQuery from "../components/placeQuery.gql";
import placesQuery from "../components/Places/placesQuery.gql";
import { createSubPlace } from "../queryTypes/createSubPlace";
import { getAllPlaces } from "../queryTypes/getAllPlaces";
import { getPlace, getPlaceVariables } from "../queryTypes/getPlace";

export function updateStoreWithNewPlace<T>(proxy: DataProxy, data: T) {
  const current = proxy.readQuery<getAllPlaces>({
    query: placesQuery,
  });

  const newPlace = get(data, `createPlace`);

  if (!current || !newPlace) return data;

  const currentPlaces = current.places || [];

  proxy.writeQuery({
    query: placesQuery,
    data: {
      places: currentPlaces.concat(newPlace),
    },
  });
}

export function updateStoreWithNewSubPlace(
  proxy: DataProxy,
  data: createSubPlace,
  variables: getPlaceVariables,
) {
  const current = proxy.readQuery<getPlace, getPlaceVariables>({
    query: placeQuery,
    variables,
  });

  if (!data.createSubplace) return;
  if (!current) return data;

  const currentSubPlaces = get(current, "place.subPlaces", []);

  proxy.writeQuery({
    query: placeQuery,
    variables,
    data: {
      place: {
        ...current.place,
        subPlaces: currentSubPlaces.concat(data.createSubplace),
      },
    },
  });
}
