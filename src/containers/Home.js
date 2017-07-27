import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, ButtonGroup,ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from "react-redux";
import { fetchClassSubjectsList } from "../actions";

let userName = "someuser";
// let tempclassSubjectsList = [
//   { classTitle: "6th", subjects: ["English", "Maths", "History", "Geography", ] },
//   { classTitle: "7th", subjects: ["English", "Maths", "History", "Geography"] },
//   { classTitle: "8th", subjects: ["English", "Maths", "History", "Geography"] },
//   { classTitle: "9th", subjects: ["English", "History", "Geography"] },
//   { classTitle: "10th", subjects: ["History", "Geography"] }
// ];

class Home extends React.Component {
  // state = {
  //   classSubjectsList:  [] 
  // }
  componentDidMount() {
    // UserAPI.getclassSubjectsList().then((classSubjectsList) => {
    //   this.setState({classSubjectsList})
    // })
    //this.setState({classSubjectsList: tempclassSubjectsList});
    this.props.fetchClassSubjectsList();
    console.log(this.props.classSubjectsList);
  }
  render() {
    if (this.props.classSubjectsList === null) {
      return <div>Loading...</div>
    }

    let subjects = [];
    for (let i=0;i<this.props.classSubjectsList.length;i++) {
      for (let j=0;j<this.props.classSubjectsList[i].subjects.length;j++) {
        if(subjects.indexOf(this.props.classSubjectsList[i].subjects[j]) === -1) {
          subjects.push(this.props.classSubjectsList[i].subjects[j])
        } 
      }
    }

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
            {subjects.map((subject) => (
              (classRow.subjects.indexOf(subject) !== -1) ?
                <td key={subject}>
                  <ButtonToolbar>
                  <ButtonGroup bsSize="small">
                    <LinkContainer to={{
                      pathname: '/qbank',
                      search: '?username=' + userName + '&classtitle=' + classRow.classTitle + '&subject=' + subject
                    }}>
                    <Button>QBank</Button>
                    </LinkContainer>
                    <LinkContainer 
                      to={{
                        pathname: '/qpaper',
                        search: '?username=' + userName + '&classtitle=' + classRow.classTitle + '&subject=' + subject
                      }}>
                      <Button>QPaper</Button>
                    </LinkContainer>
                  </ButtonGroup>
                  </ButtonToolbar>
                </td>
                : 
                <td key={subject}><span></span></td>
              )
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
  return { classSubjectsList: state.classSubjectsList };
}

export default connect(mapStateToProps, { fetchClassSubjectsList })(Home);