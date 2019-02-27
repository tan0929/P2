import React from 'react';
import { ClassTemplate } from '../../templates/class';

const ClassPreview = ({ entry, widgetFor })=>{

    return(
        <ClassTemplate
            preview
            title={entry.getIn(['data','title'])}
            subtitle={entry.getIn(['data','subtitle'])}
            image={entry.getIn(['data','image'])}
            description={entry.getIn(['data', 'description'])}
            bookingUrl={entry.getIn(['data','bookingUrl'])}
            body={widgetFor('body')} 
        />
    );
}

export default ClassPreview;