import React from 'react';
class Todos extends React.Component {
    constructor(props){
        super(props);
        let content = []
        for (let i=0; i< 30;i++) {
            if (props.items[i]!==undefined){
            content.push(props.items[i].title);}
            else {
                content.push("Idk why props changes to undefined after reloading the page but works immediately after editing & saving my code");
                break;
            }
        }
        this.state=({content});
    }
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
        };
    };
    render() {
        return (<div>
            <ul>{this.state.content.map(title => <ul style={this.getStyle()}>{title}</ul>)}</ul>
        </div>);
    }
}
export default Todos  
