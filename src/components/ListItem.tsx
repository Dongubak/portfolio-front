import styled from "styled-components";

type ListItemPropsType = {
  date: string;
  title: string;
  content: string;
  link?: string;
};

const ListItemWrapper = styled.article`
  position: relative;
  padding-left: 38px;
  margin-left: 12px;

  &::before {
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #6a6bff;
    border: 4px solid #ffffff;
    position: absolute;
    top: 28px;
    left: 0;
    box-shadow: 0 0 0 2px rgba(98, 105, 255, 0.4);
  }

  &::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 36px;
    width: 2px;
    height: calc(100% + 26px);
    background: linear-gradient(180deg, rgba(133, 140, 255, 0.45), rgba(133, 140, 255, 0));
  }

  &:last-child::after {
    display: none;
  }
`;

const CardBase = `
  background: #ffffff;
  border-radius: 22px;
  padding: 18px 24px;
  border: 1px solid #e1e7f6;
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.07);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Card = styled.div`
  ${CardBase}
`;

const CardLink = styled.a`
  ${CardBase}
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  border-color: #cdd5f3;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 32px rgba(79, 100, 244, 0.22);
  }
`;

const DateBadge = styled.span`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #5e6bb0;
  background: rgba(94, 107, 176, 0.14);
  border-radius: 999px;
  padding: 6px 12px;
  width: fit-content;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #141b35;
  letter-spacing: -0.01em;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkArrow = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(90, 108, 255, 0.12);
  color: #4e5cff;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  margin: 0;
  color: #4a5370;
  font-size: 0.98rem;
  line-height: 1.6;
`;

const ListItem = ({ date, title, content, link }: ListItemPropsType) => {
  const CardContent = () => (
    <>
      <DateBadge>{date}</DateBadge>
      {link ? (
        <TitleRow>
          <Title>{title}</Title>
          <LinkArrow>↗</LinkArrow>
        </TitleRow>
      ) : (
        <Title>{title}</Title>
      )}
      <Description>{content}</Description>
    </>
  );

  return (
    <ListItemWrapper>
      {link ? (
        <CardLink href={link} target="_blank" rel="noreferrer">
          <CardContent />
        </CardLink>
      ) : (
        <Card>
          <CardContent />
        </Card>
      )}
    </ListItemWrapper>
  )
}

export default ListItem;
