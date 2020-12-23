import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fsthsw%2F&tabs=timeline&width=340&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=476539253326520"
            width="340"
            height="100%"
            style={{border:"none",overflow:"hidden"}}
            scrolling="no"
            frameborder="0" 
            allowTransparency="true"
            allow="encrypted-media">
            </iframe>
        </div>
    )
}

export default Widgets;