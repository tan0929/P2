import CMS from 'netlify-cms'
import React from 'react';
import ClassPreview from './preview-templates/classPreview'
import { StyleSheetManager } from 'styled-components'

const StyleInjection = ({children}) =>{
    const iframe = document.getElementsByTagName('iframe')[0];
    const head = iframe.contentDocument.head;
    return(
        <StyleSheetManager target={head}>
            {children}
        </StyleSheetManager>
    )
}

CMS.registerPreviewTemplate('class', props=>(
    <StyleInjection>
        <ClassPreview {...props}/>
    </StyleInjection>
));