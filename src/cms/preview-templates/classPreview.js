import React from 'react';
import { ClassTemplate } from '../templates/class';

const ClassPreview = ({ entry, widgetFor, widgetsFor, getAsset })=>{
    const data = entry.getIn('data');
    console.log(data);
    return(
        <div
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