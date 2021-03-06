import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { fakeKegService } from './FakeKegService';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      masterKegList: fakeKegService(),
       selectedKeg: null,
       editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  // There is no handle buy reducer
  //
  // handleBuyAPint = () => {
  //   const haveAdrink = this.state.masterKegList.map((keg) => {
  //     if (keg.id === this.state.selectedKeg.id){
  //       if(keg.pints <= 1 ){
  //         return {...keg,
  //         pints: "0"
  //         }
  //       }
  //     return {
  //       ...keg,
  //         pints: keg.pints - 1, 
  //     }
  //   }
  //     else{
  //       return keg;
  //     }
  //   });
  //   this.setState({ masterKegList: haveAdrink, selectedKeg: null});
  //   }
    
    handleAddingNewKegToList = (newKeg) => {
      const { dispatch } = this.props;
      const action = a.addKeg(newKeg);
      dispatch(action);
      const action2 = a.toggleForm();
      dispatch(action2);
    }

    handleChangingSelectedKeg = (id) => {
      const selectedKeg = this.props.masterKegList[id];
      this.setState({selectedKeg: selectedKeg});
    }



    handleDeletingKeg = (id) => {
      const { dispatch } = this.props;
      const action = a.deleteKeg(id);
      dispatch(action);
      this.setState({selectedKeg: null});
    }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedkeg: null
    });
  }

  render() {
    let currentlyVisibleState;
    let buttonText;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm onEditKeg = {this.handleEditingKegInList}keg = {this.state.selectedKeg}  />
      buttonText = "Return to Keg List";
    }  
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail  keg = {this.state.selectedKeg} 
      onClickingDelete = {this.handleDeletingKeg} 
      onClickingEdit = {this.handleEditClick}
      onClickingBuy = {this.handleBuyAPint}
      />
      buttonText = "Return to Keg's list";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg's list"
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;


