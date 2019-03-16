import get from "lodash.get";
import { useMutation } from "react-apollo-hooks";
import useReactRouter from "use-react-router";
import placesQuery from "../../components/Places/placesQuery.gql";
import deletePlaceMutation from "./deletePlaceMutation.gql";
import {
  deletePlace,
  deletePlaceVariables,
} from "../../queryTypes/deletePlace";
import { getAllPlaces } from "../../queryTypes/getAllPlaces";

export default function usePlaceDeletion(id: string) {
  const { history } = useReactRouter();

  const doDeletePlace = useMutation<deletePlace, deletePlaceVariables>(
    deletePlaceMutation,
    {
      variables: {
        id,
      },
      update: (proxy, { data }) => {
        if (!data || !data.deletePlace)
          throw new Error("Could not delete place");

        const current = proxy.readQuery<getAllPlaces>({
          query: placesQuery,
        });

        const currentPlaces = get(current, "places", []);
        const deletedPlaceId = get(data, "deletePlace.id");

        const places = currentPlaces.filter(place => {
          return place.id !== deletedPlaceId;
        });

        proxy.writeQuery({
          query: placesQuery,
          data: { places },
        });
      },
    },
  );

  return {
    deletePlace: (e: any) => {
      doDeletePlace()
        .then(
          resp => {
            history.push("/places");
            return;
          },
          err => console.log(err),
        )
        .catch(error => console.log(error));
    },
  };
}
