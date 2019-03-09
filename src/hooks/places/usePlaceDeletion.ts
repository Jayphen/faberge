import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import useReactRouter from "use-react-router";
import { deletePlace, deletePlaceVariables } from "./__generated__/deletePlace";

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
