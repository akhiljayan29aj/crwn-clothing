import styled, {css} from 'styled-components';

const InvertButtonStyles = css`
background-color: white;
color: black;
border: 1px solid black;
&:hover {
  background-color: black;
  color: white;
}
`

const GoogleSignInButtonStyles = css`
color: #fff;
background-color: #4285f4;

&:hover {
    background-color: #357ae8;
    border: none;
}
`

const CustomButtonStyles = css`
background-color: black;
color: white;
&:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
}
`

const getButtonStyles = ({isGoogleSignIn, inverted}) => {
    if(isGoogleSignIn){
        return GoogleSignInButtonStyles;
    }
    return inverted ? InvertButtonStyles : CustomButtonStyles;
}

export const CustomButtonContainer = styled.button`
min-width: 165px;
width: auto;
height: 50px;
border: none;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
font-family: "Open Sans Condensed";
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
${getButtonStyles}
`