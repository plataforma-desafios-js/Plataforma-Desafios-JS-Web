import React, { Fragment } from 'react';
import BottomNavbar from '../BottomNavbar';

class LayoutHome extends React.Component<any, any> {
  
  render() {
    return (
      <Fragment>

        <main className="view">
          {this.props.children}
        </main>
        <BottomNavbar />
      </Fragment>
    );
  }
}

export default LayoutHome;
