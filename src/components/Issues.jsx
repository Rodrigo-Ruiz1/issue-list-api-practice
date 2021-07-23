import React from 'react';

function Issues(props) {
    //Need to have return statement in the function
    //props being passed is essentially the same as the data(api) we pass into the state in the IssuesList class
    //Need to pass in a key for some reason, so I use index
    //This is what decides how to render the information, but it must be called in the class render method, which is itself called in the App.js file, in order to show on the page.
    return (
    <>
    <div key={props.index}>
    <h3><a href={props.url}  rel="noreferrer" target="_blank">{props.title}</a></h3>
    <p><a href={props.userURL} rel="noreferrer" target="_blank">{props.user}</a></p>
    <p>{props.body}</p>
    </div>
    <br/>
    <br/>
    <br/>
    </>
    )
}

export default Issues;