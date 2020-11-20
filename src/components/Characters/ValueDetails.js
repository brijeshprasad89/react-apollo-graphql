import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Button } from "@material-ui/core";

const ValueDetails = (props) => {
  const GET_CHARACTER = gql`
      query {
        character(id: ${props.id}) {
          name
          origin {
            name
            type
            dimension
          }
          location {
            name
            type
            dimension
          }
          episode {
            name
          }
        }
      }
    `;

  return (
    <Query query={GET_CHARACTER}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching Details</div>;
        if (error) return <div>{error.message}</div>;
        if (!data.character) return <div>No character found</div>;
        return (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#303f9f",
              }}
            >
              <h3>Details:</h3>
            </div>
            <div style={{ left: 10, position: "fixed", top: 0, width: "100%" }}>
              <Button>X</Button>
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",
              }}
            >
              <div
                style={{
                  paddingTop: 16,
                  paddingLeft: 48,
                  width: "70%",
                  color: "#303f9f",
                }}
              >
                <div>Name : </div>
                <hr color="blue" />
                <div>{data.character.name}</div>
              </div>
              <div
                style={{
                  paddingTop: 24,
                  paddingLeft: 48,
                  width: "70%",
                  color: "#303f9f",
                }}
              >
                <div>Origin : </div>
                <hr color="blue" />
                <div>{data.character.origin.name}</div>
              </div>
              <div
                style={{
                  paddingTop: 24,
                  paddingLeft: 48,
                  width: "70%",
                  color: "#303f9f",
                }}
              >
                <div>Location : </div>
                <hr color="blue" />
                <div>{data.character.location.name}</div>
              </div>
              <div
                style={{
                  paddingTop: 24,
                  paddingLeft: 48,
                  width: "70%",
                  paddingBottom: 24,
                  color: "#303f9f",
                }}
              >
                <div>Episodes : </div>
                <hr color="blue" />
                <div>
                  {data.character.episode.map((ep) => {
                    return <li>{ep.name}</li>;
                  })}
                </div>
              </div>
            </div>
          </>
        );
      }}
    </Query>
  );
};

export default ValueDetails;
