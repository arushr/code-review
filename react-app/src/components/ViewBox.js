import React, { Component } from "react";
import ComponentA from "../components/ComponentA";
import ComponentB from "../components/ComponentB";
import { connect } from "react-redux";
import styled from "styled-components";
import * as UniverseActionCreators from "../actions/Universe";
import { bindActionCreators } from "redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-content: center;
`;

class ViewBox extends Component {
  render() {
    const { dispatch, Universe } = this.props;
    const CollapseClickedA = bindActionCreators(
      UniverseActionCreators.collapseA,
      dispatch
    );
    const CollapseClickedB = bindActionCreators(
      UniverseActionCreators.collapseB,
      dispatch
    );
    return (
      <Container>
        <ComponentA
          showA={Universe.showA}
          showB={Universe.showB}
          CollapseClicked={CollapseClickedA}
        />

        <ComponentB
          showB={Universe.showB}
          showA={Universe.showA}
          CollapseClicked={CollapseClickedB}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  Universe: state
});
export default connect(mapStateToProps)(ViewBox);
