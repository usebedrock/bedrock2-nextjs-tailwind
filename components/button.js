import React, { Component, useState } from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        type="button"
        className={` ${ this.props.skin == 'primary' ? 'bg-blue-700' : 'bg-white' }
                     ${ this.props.skin == 'primary' ? 'border-blue-700' : 'border-gray-300' }
                     ${ this.props.skin == 'primary' ? 'text-white' : 'text-gray-700' }
                     ${ this.props.skin == 'primary' ? 'hover:bg-blue-800' : 'hover:bg-gray-50' }
                      items-center px-4 py-2 border text-base font-medium
                      rounded-md  focus:outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     `}
      >
        {this.props.children}
      </button>
    );
  }
}
