import React from 'react';
import Issues from './Issues';

class IssuesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        }
    }

    componentDidMount() {
        this._fetchIssues();
    }

    _fetchIssues = async () => {
        const response = await fetch(
            'https://api.github.com/repos/facebook/create-react-app/issues'
        ).then(response => response.json());
        this.setState({
            issues: response
        })
    }

    render() {
        const { issues } = this.state
        return (
            <>
                <h1>Facebook Issues | Practice</h1>
                {issues.map((issues, index) => (
                    <Issues
                        key={index}
                        title={issues.title}
                        body={issues.body}
                        url={issues.html_url}
                        user={issues.user.login}
                        userURL={issues.user.html_url}
                    />
                ))}
            </>
        )
    }
}

export default IssuesList;