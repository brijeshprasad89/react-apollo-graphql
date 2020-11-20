import React, { useContext, useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import ValueContainer from "./ValueContainer";
import CharacterContext from "./CharacterContext";

const Characters = () => {
  const page = useState(1);

  const GET_CHARACTERS = gql`
    query {
      characters(page: ${page[0]}, filter: {}) {
        info {
          count
        }
        results {
          id
          name
          species
          origin {
            name
          }
          location {
            name
          }
        }
      }
    }
  `;

  return (
    <Query query={GET_CHARACTERS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>{error.message}</div>;
        if (!data.characters) return <div>No characters</div>;
        return (
          <CharacterContext.Provider value={page}>
            <ValueContainer {...data.characters} />
          </CharacterContext.Provider>
        );
      }}
    </Query>
  );
};

export default Characters;
