import React from 'react';
import _ from 'lodash';
import { Table, Button, ButtonGroup,ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from "react-redux";
import { fetchClassSubjectsList } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchClassSubjectsList();
  }
  render() {
    if (this.props.classSubjectsList === null) {
      return <div>Loading...</div>
    }

    const subjects = _.union(_.flattenDeep(this.props.classSubjectsList.map((cs)=>{return cs.subjects})))

    return (
      <div className='home-container' >
        <h3>Welcome! Select action from the matrix.</h3>
        <Table responsive>
        <thead>
        <tr key='header'>
          <td key='classTitle'>Class</td>
          {subjects.map((subject) => (
            <td key={subject}><span>{subject}</span></td>
          ))}
        </tr>
        </thead>
        <tbody>
        {this.props.classSubjectsList.map((classRow) => (
          <tr key={classRow.classTitle}>
            <td key={classRow.classTitle}><span>{classRow.classTitle}</span></td>
            {subjects.map((subject) => {
              const searchTerm = `?username=${this.props.user.name}&classtitle=${classRow.classTitle}&subject=${subject}`;
              return (classRow.subjects.indexOf(subject) !== -1) ?
                (<td key={subject}>
                  <ButtonToolbar>
                  <ButtonGroup bsSize="small">
                    <LinkContainer to={{
                      pathname: '/qbank',
                      search: searchTerm
                    }}>
                    <Button>QBank</Button>
                    </LinkContainer>
                    <LinkContainer 
                      to={{
                        pathname: '/qpaper',
                        search: searchTerm
                      }}>
                      <Button>QPaper</Button>
                    </LinkContainer>
                  </ButtonGroup>
                  </ButtonToolbar>
                </td>)
                : 
                // subject not being taught for that class
                (<td key={subject}><span></span></td>)
            }
            )}
          </tr>
        ))}
        </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    classSubjectsList: state.classSubjectsList,
    user: state.user
   };
}

export default connect(mapStateToProps, { fetchClassSubjectsList })(Home);