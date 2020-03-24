import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);
    return (
      <Fragment>
        <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
          {({ loading, error, data }) => {
            if (loading) return <h4>Loading...</h4>;
            if (error) console.log(error);

            const {
              mission_name,
              flight_number,
              launch_year,
              launch_success,
              details,
              rocket: { rocket_id, rocket_name, rocket_type }
            } = data.launch;
            return (
              <div>
                <h1 className='display-4 my-3'>
                  <span className='text-warning'>Mission:</span> {mission_name}
                </h1>
                <h4 className='mb-3'>Launch details</h4>
                <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    Flight Number: <strong>{flight_number}</strong>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Launch Year: <strong>{launch_year}</strong>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Launch Success:{' '}
                    <span
                      className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success
                      })}
                    >
                      {launch_success ? (
                        <strong>Yes</strong>
                      ) : (
                        <strong>No</strong>
                      )}
                    </span>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Launch Description:{' '}
                    {details ? (
                      <strong className='text-info'>{details}</strong>
                    ) : (
                      'N/A'
                    )}
                  </li>
                </ul>
                <h4 className='my-3'>Rocket Details</h4>
                <ul className='list-group'>
                  <li className='list-group-item list-group-item-action'>
                    Rocket ID: <strong>{rocket_id}</strong>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Rocket Name: <strong>{rocket_name}</strong>
                  </li>
                  <li className='list-group-item list-group-item-action'>
                    Rocket Type: <strong>{rocket_type}</strong>
                  </li>
                </ul>
                <hr />
                <Link to='/' className='btn btn-secondary'>
                  Back
                </Link>
              </div>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default Launch;
