import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }

    render() {
      let currentlyVisibleState;
      let addKegButtonText;
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm />
        addKegButtonText = "Return Keg's list"
      } else {
        currentlyVisibleState = <KegList />
        addKegButtonText = "Add Keg"
      }
        return (
            <React.Fragment>
              {currentlyVisibleState}
              <button onClick={this.handleClick}>{addKegButtonText}</button>
            </React.Fragment>
        );
    }

}

export default KegControl;

