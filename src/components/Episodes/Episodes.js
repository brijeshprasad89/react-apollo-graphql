import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import ValueContainer from "./ValueContainer";

const GET_LOCATIONS = gql`
  query {
    locations(page: 1, filter: {}) {
      info {
        count
      }
      results {
        id
        name
        type
        dimension
        created
      }
    }
  }
`;

const Episodes = () => {
  return (
    <Query query={GET_LOCATIONS}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>{error.message}</div>;
        if (!data.locations) return <div>No Locations</div>;
        return <ValueContainer {...data.locations} />;
      }}
    </Query>
  );
};

export default Episodes;
