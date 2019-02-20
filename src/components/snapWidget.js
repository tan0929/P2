import * as React from 'react';

class SnapWidget extends React.Component{

    script = null;

    componentDidMount(){
        this.script = document.createElement("script");
        this.script.src = "https://snapwidget.com/js/snapwidget.js";
        document.body.appendChild(this.script);
    }

    componentWillUnmount(){
        document.body.removeChild(this.script);
    }

    render(){
        
        return(
            <iframe 
                title='snapWidget'
                src="https://snapwidget.com/embed/623237" 
                className="snapwidget-widget" 
                allowtransparency="true" 
                frameBorder="0" 
                scrolling="no" 
                style={{border: 'none', overflow: 'hidden', width: '100%'}}
            >
            </iframe>
        );
    }
}

export default SnapWidget;

