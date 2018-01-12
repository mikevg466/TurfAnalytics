import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const UserHome = props => {
  const { email } = props;

  return (
    <div className="container-fluid">
      <p>{this.props.email}</p>
    </div>
  );
};

const mapState = ({ user }) => ({
  email: user.email,
});

export default connect(mapState)(UserHome);

UserHome.propTypes = {
  email: PropTypes.string
};
