import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';

class KegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          formVisibleOnPage: false,
          masterKegList:  [           {
            name:"Light Beer",
            price:"5.00",
            content:"6.0",
            description:"This light beer is soothing and refreshing",
      },
      {
            name:"IPA",
            price:"6.50",
            content:"8.0",
            description:"This IPA is little hoppy and a bit bitter"
    }]
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }

    handleAddingNewKegToList = (newKeg) => {
      const newMasterKegList = this.state.masterKegList.concat(newKeg);
      this.setState({masterKegList: newMasterKegList,
                    formVisibleOnPage: false });
    }
    

    render() {
      let currentlyVisibleState;
      let addKegButtonText;
      if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}  />
        addKegButtonText = "Return Keg's list"
      } else {
        currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
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

