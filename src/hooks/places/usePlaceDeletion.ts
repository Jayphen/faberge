import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import useReactRouter from "use-react-router";

const DELETE_PLACE = gql`
  mutation deletePlace($id: Int!) {
    delete_places(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;

export default function usePlaceDeletion(id: number) {
  const { history } = useReactRouter();

  const deletePlace = useMutation(DELETE_PLACE, {
    variables: {
      id,
    },
  });

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
