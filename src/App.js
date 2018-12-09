// USING REACT OBSERVER COMPONENT

import React from "react";
import ReactDOM from "react-dom";
import ReactObserer from "./api/ReactObserver";

class App extends React.Component {
  onIntersect = num => entry => {
    console.log(
      `Observer with React #${num} intersected with ratio ${
        entry.intersectionRatio
      }`
    );
  };

  render() {
    return (
      <div className="App">
        <div id="first">
          SCROLL DOWN <br />
          [open console]
        </div>

        <ReactObserer
          options={{ threshold: 1 }}
          onIntersect={this.onIntersect(1)}
        >
          <div id="second">
            DIV FOR USING OBSERVER WRAPPER WITH REACT [[ 1 ]] <br />
          </div>
        </ReactObserer>

        <ReactObserer onIntersect={this.onIntersect(2)}>
          <div id="second" style={{ background: "pink" }}>
            DIV FOR USING OBSERVER WRAPPER WITH REACT [[ 2 ]]
          </div>
        </ReactObserer>

        <ReactObserer
          options={{ threshold: [0.5, 1] }}
          onIntersect={this.onIntersect(3)}
        >
          <div id="second" style={{ background: "grey" }}>
            DIV FOR USING OBSERVER WRAPPER WITH REACT [[ 3 ]]
          </div>
        </ReactObserer>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
