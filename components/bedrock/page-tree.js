import React, { Component, useState } from 'react';
import { GlobalHotKeys } from "react-hotkeys";

export default class PageTree extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isActive: false};

    this.keyMap = {
      ACTIVATE: "ctrl+m"
    };

    this.handlers = {
       ACTIVATE: (e) => {
         this.setIsActive();
       }
     };
  }

  setIsActive = () => {
     this.setState({
       isActive: !this.state.isActive
     })
   }

  render() {

    const renderTree = () => {

      if (this.state.isActive) {
        return <div className="br-page-tree">
            <p className="pb-3">Press Ctrl+M to show or hide the page tree. {this.state.isActive.toString()}</p>
            {this.props.children}
          </div>
      } else {
        return false
      }
    }

    return (
      <>
        <GlobalHotKeys keyMap={this.keyMap} handlers={this.handlers} />
        {renderTree()}
      </>
    );
  }
}

