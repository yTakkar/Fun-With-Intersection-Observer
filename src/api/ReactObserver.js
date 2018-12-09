// REACT WRAPPER OVER PUR OBSERVER CLASS

import React from "react";
import PropTypes from "prop-types";
import Observer from "./Observer";

class ReactObserver extends React.Component {
  constructor(props) {
    super(props);
    this.observer = new Observer({
      options: props.options,
      observeOnce: props.observeOnce
    });
  }

  componentDidMount() {
    this.observer.observe(this.self, this.props.onIntersect);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.self);
  }

  handleRef = target => {
    this.self = target;
  };

  render() {
    return <div ref={this.handleRef}>{this.props.children}</div>;
  }
}

ReactObserver.propTypes = {
  options: PropTypes.object,
  observeOnce: PropTypes.bool,
  onIntersect: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default ReactObserver;
