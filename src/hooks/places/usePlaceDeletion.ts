import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import useReactRouter from "use-react-router";
import { deletePlace, deletePlaceVariables } from "./__generated__/deletePlace";
import { getAllPlaces } from "../../components/Places/__generated__/getAllPlaces";
import { GET_PLACES } from "../../components/Places";

const DELETE_PLACE = gql`
  mutation deletePlace($id: ID) {
    deletePlace(where: { id: $id }) {
      id
    }
  }
`;

export default function usePlaceDeletion(id: string) {
  const { history } = useReactRouter();

  const deletePlace = useMutation<deletePlace, deletePlaceVariables>(
    DELETE_PLACE,
    {
      variables: {
        id,
      },
      update: (proxy, { data }) => {
        const current = proxy.readQuery<getAllPlaces>({
          query: GET_PLACES,
        });

        if (!current || !data) return;

        const newData = current.places.filter(place => {
          return place && place.id !== data.deletePlace!.id;
        });

        proxy.writeQuery({
          query: GET_PLACES,
          data: newData,
        });
      },
    },
  );

  return {
    deletePlace: (e: any) => {
      deletePlace()
        .then(
          resp => {
            console.log(resp);
            history.push("/places");
            return;
          },
          err => console.log(err),
        )
        .catch(error => console.log(error));
      console.log(e);
      console.log(`deleted ${id}`);
    },
  };
}
