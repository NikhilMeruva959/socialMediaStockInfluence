import React from "react";
import "./stock.css";

const Stock = (props) => {
  console.log(props.location.state);
  return (
    <div className="stock" id="stock">
      <div className="left">
        <div className="stock-info">
          <center>
            <div className="stock-name">
              <h1 className="stock-info2">{props.location.state.name}</h1>
              <img
                className="stock-info2"
                src={props.location.state.image}
                alt=""
              ></img>
              <h3>Current CEO : {props.location.state.info.CEO}</h3>
              <div className="desc">
                <p>{props.location.state.info.description}</p>
              </div>
            </div>
          </center>
        </div>
      </div>

      <div className="right">
        <div className="tweets">
          <h2>Insert tweets right here</h2>
        </div>
      </div>
    </div>
  );
};

export default Stock;