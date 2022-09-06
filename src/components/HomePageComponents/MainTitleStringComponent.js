import React from "react";
import FancyLetter from "../FancyLetter";

/*
class in order to reduce redundnant code in adding the title string characters
*/

export default class MainTitleStringComponent extends React.Component {
    render() {
        const letterArray = (this.props.stringInput).split("");
        const rows = [];

        for (var i = 0; i < letterArray.length; i++) {
            rows.push(<FancyLetter text={letterArray[i]} className={this.props.className} fontSize={this.props.fontSize}></FancyLetter>)
        }

        return (
            <>{rows}</>
        );
    }
}
