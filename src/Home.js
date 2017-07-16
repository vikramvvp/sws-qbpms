var React = require('react');
var Link = require('react-router-dom').Link

let userName = "someuser";
let templinksMatrix = [
  { classTitle: "6th", subjects: ["English", "Maths", "History", "Geography"] },
  { classTitle: "7th", subjects: ["English", "Maths", "History", "Geography"] },
  { classTitle: "8th", subjects: ["English", "Maths", "History", "Geography"] },
  { classTitle: "9th", subjects: ["English", "History", "Geography"] },
  { classTitle: "10th", subjects: ["History", "Geography"] }
];

class Home extends React.Component {
  state = {
    linksMatrix:  [] 
  }
  componentDidMount() {
    // UserAPI.getLinksMatrix().then((linksMatrix) => {
    //   this.setState({linksMatrix})
    // })
    this.setState({linksMatrix: templinksMatrix});
  }
  render() {
    let subjects = [];
    for (let i=0;i<this.state.linksMatrix.length;i++) {
      for (let j=0;j<this.state.linksMatrix[i].subjects.length;j++) {
        if(subjects.indexOf(this.state.linksMatrix[i].subjects[j]) === -1) {
          subjects.push(this.state.linksMatrix[i].subjects[j])
        } 
      }
    }

    return (
      <div className='home-container' >
        <h1>Welcome home! Select action from the matrix.</h1>
        <table>
        <thead>
        <tr key='header'>
          <td key='classTitle'>Class</td>
          {subjects.map((subject) => (
            <td key={subject}><span>{subject}</span></td>
          ))}
        </tr>
        </thead>
        <tbody>
        {this.state.linksMatrix.map((classRow) => (
          <tr key={classRow.classTitle}>
            <td key={classRow.classTitle}><span>{classRow.classTitle}</span></td>
            {subjects.map((subject) => (
              (classRow.subjects.indexOf(subject) !== -1) ?
                <td key={subject}>
                  <span>
                    <Link
                      className='button'
                      to={{
                        pathname: '/qbank',
                        search: '?username=' + userName + '&classtitle=' + classRow.classTitle + '&subject=' + subject
                      }}>
                      QBank
                    </Link>
                  </span>
                  <br/>
                  <span>
                    <Link
                      className='button'
                      to={{
                        pathname: '/qpaper',
                        search: '?username=' + userName + '&classtitle=' + classRow.classTitle + '&subject=' + subject
                      }}>
                      QPaper
                    </Link>
                  </span>
                </td>
                : 
                <td key={subject}><span></span></td>
              )
            )}
          </tr>
        ))}
        </tbody>
        </table>
      </div>
    )
  }
}

module.exports = Home;