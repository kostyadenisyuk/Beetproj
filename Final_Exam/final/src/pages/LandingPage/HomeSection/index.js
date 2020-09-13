import React, { Component } from 'react';

//Modules

import types from 'prop-types';
import iphone_home from '../../../assets/images/header_iphone.png';
import { BsPlayFill } from 'react-icons/bs';

//Components

import { ReactIcon } from '../../../components/ReactIcon';
import { EditModal } from '../../../components/EditModal';

//Styles

import './styles.scss';

// -----

export default class HomeSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModalOpen: false,
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isEditModalOpen: !prevState.isEditModalOpen,
    }));
  };

  onShowEditModal = todo => {
    this.setState({
      modalData: todo,
    });

    this.toggleModal();
  };

  render() {
    const { isEditModalOpen } = this.state;

    return (
      <div className="home-section">
        <div className="home-section__title animatedFadeInUp fadeInUp">
          <h1>What happens tomorrow?</h1>
          <p>
            The sight of the tumblers restored Bob Sawyer to a degree of
            equanimity which he had not possessed since his interview with his
            landlady. His face brightened up, and he began to feel quite
            convivial.
          </p>
        </div>

        <div className="home-section__btn-wrapper">
          <ReactIcon size="xl">
            <BsPlayFill />
          </ReactIcon>
          <a
            className="home-section__link "
            onClick={() => this.onShowEditModal()}
          >
            Watch video
          </a>
        </div>
        <div className="home-section__wrapper">
          <img src={iphone_home} alt="" />
        </div>
        {isEditModalOpen && (
          <EditModal
            onClose={this.toggleModal}
            title="Edit todo modal"
            open={isEditModalOpen}
          />
        )}
      </div>
    );
  }
}

// Type of props

HomeSection.propTypes = {
  isEditModalOpen: types.bool,
  isModalOpen: types.bool,
  onShowEditModal: types.func,
};
