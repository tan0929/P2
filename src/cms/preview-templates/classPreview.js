import React from 'react';
import { ClassTemplate } from '../templates/class';

const ClassPreview = ({ entry, widgetFor, widgetsFor, getAsset })=>{
    
    return(
        <ClassTemplate
            title={entry.getIn(['data','title'])}
        />
    );
}

export default ClassPreview;

    // title,
    // subtitle,
    // fluid,
    // description,
    // bookingUrl,
    // keywords,
    // html