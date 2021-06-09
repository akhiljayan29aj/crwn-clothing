import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    div:nth-child(1) {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: block;
    }
  }
`

export const CollectionItemImage = styled.div`
width: 100%;
height: 95%;
background-size: cover;
background-position: center;
margin-bottom: 5px;
`

export const CollectionFooterContainer = styled.div`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;

span:nth-child(1) {
    width: 90%;
    margin-bottom: 15px;
}

span:nth-child(2) {
    width: 10%;
}
`

export const CustomButtonForCollectionItem = styled(CustomButton)`
width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
`