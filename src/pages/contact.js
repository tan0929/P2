

// I want to change a new form!!!!!!


import React, { useState } from "react"
import styled from 'styled-components';
import SEO from "../components/seo"
import Img from "gatsby-image";
import { graphql, StaticQuery } from 'gatsby';
import breakpoint from 'styled-components-breakpoint';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const Contact =()=>(
    <Wrapper>
        <SEO title="Contact" keywords={[`petalimn`, `cake`, `design`]} />
        <StaticQuery
            query={query}
            render={data=>(<Content data={data}/>)}
        />
    </Wrapper>
);

const Wrapper = styled.div`
    background-color: #232529;
    padding: 60px 0;
`;

const StyledImg = styled(Img)`
    display: inline-block;
    width: 100%;
    height: 100px;
    ${breakpoint('tablet')`
        margin: 0 0 0 10vw;
        width: 40%;
        height: 600px;
    `}
`;

const fontColor = '#DDD';
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette:{
        primary: {
            main: fontColor,
            light: fontColor,
            dark: fontColor,
            contrastText : fontColor,
        }
    },
    overrides:{
        MuiInput:{
            underline:{
                "&:before" : {
                    "border-bottom": `1px solid ${fontColor}`
                },
                "&:hover" :{
                    "border-bottom": `1px solid ${fontColor}`
                }
            },
            input:{
                color: fontColor,
            },
        },
        MuiFormLabel:{
            root:{
                color: "#DDD",
            }
        },
    }
});

const Hidden = styled.p`
    display: none;
`;


const isEmail = email=> (
    /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email )
);
const emailErrorMessage = 'Please enter a valid email address.';
const changeEmailErrorMessage = (event)=>{
    event.target.setCustomValidity(isEmail(event.target.value) ? '' : emailErrorMessage);
}



const Form = ()=>{
    const initState = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };
    const [values, setValues] = useState(initState);
    const onChange = (name, value) => {
        setValues({ ...values, [name]: value });
      };
    const noOutline = {outline: 'none'};
    const nameProps = {maxLength:50, style:noOutline};
    const emailProps = {maxLength:50, style:noOutline};
    const subjectProps={maxLength:50, style:noOutline};
    const messageProps={maxLength:500, style:noOutline};
    return(
        <StyledForm name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <Hidden>
                <input name="bot-field" />
            </Hidden>
            <MuiThemeProvider theme={theme}>
                <TextField
                    inputProps={nameProps}
                    required
                    label="Name"
                    margin='normal'
                    onChange={e=>onChange('name', e.target.value)}
                    value={values.name}
                />
                <TextField
                    inputProps={emailProps}
                    required
                    label="Email"
                    type='email'
                    autoComplete="email"
                    margin='normal'
                    onChange={e=>{
                        changeEmailErrorMessage(e);
                        onChange('email',e.target.value);
                    }}
                    value={values.email}
                />
                <TextField
                    inputProps={subjectProps}
                    required
                    label="Subject"
                    fullWidth
                    margin='normal'
                    onChange={e=>onChange('subject', e.target.value)}
                    value={values.subject}
                />
                <TextField
                    inputProps={messageProps}
                    required
                    label="Message"
                    fullWidth
                    multiline
                    rows="5"
                    margin='normal'
                    onChange={e=>onChange('message', e.target.value)}
                    value={values.message}
                />
            </MuiThemeProvider>
            <p>
                <button type='submit'>Send</button>
            </p>
        </StyledForm>
    )
};

const StyledForm = styled.form`
    width: 300px;
    margin: auto;
    ${breakpoint('tablet')`
        position: absolute;
        right: 20vw;
        top: 20vw;
    `}
`;

const Content=({data})=>(
    <div>
        <StyledImg fluid={data.image.childImageSharp.fluid} />
        <Form />
    </div>
);


export default Contact;

const query = graphql`
  query {
    image : file(relativePath: { eq: "06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site{
        siteMetadata{
            title
            slogan
        }
    }
  }
`;