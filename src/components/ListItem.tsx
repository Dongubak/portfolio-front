import { DivWrapper } from "../common/Wrapper";
import styled from "styled-components";

const ListItemWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  p {
    margin: 0;
    font-size: 1rem;
  }

  .date {
    width: 6rem;
    margin: 0.5rem;
    border: 1px solid black;
  }

  .title {
    /* width: 10rem; */
    margin: 0.5rem;
    border: 1px solid black;
  }

  .content {
    margin: 0.5rem;
  }
`

type ListItemPropsType = {
  date: string,
  title: string,
  content: string,
}

const ListItem = ({date, title, content}: ListItemPropsType) => {
  return (
    <ListItemWrapper>
      <p className="date">{date}</p>
      <DivWrapper style={{
        border: "1px solid black"
      }}>
        <p className="title">{title}</p>
        <p className="content">{content}</p> 
      </DivWrapper>
    </ListItemWrapper>
  )
}

export default ListItem;