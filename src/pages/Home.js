import React, { useState } from "react";
// css-in-js
import styled from "styled-components";
import PageImage from "../assets/img5.jpeg";
import Button from "react-bootstrap/Button";
import { useNavigate, createSearchParams } from "react-router-dom";

const Home = () => {
  const [nick, setNick] = useState();
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
    navigate({
      pathname: "/question",
      search: `?${createSearchParams({
        names: names,
      })}`,
    });
  };
  const [disable, setDisable] = useState(false);
  const [names, setNames] = React.useState("");
  // const isValidLogin = !names.name;
  const onChange = (e) => {
    setNames(e.target.value);
  };
  const isValidLogin = () => {
    if (!names.value) {
      setDisable(true);
    }
  };
  return (
    <Wrapper>
      <Header>향수 TYPE 테스트</Header>

      <Contents>
        <Title>나와 딱 맞는 향수 TYPE은?</Title>
        <LogoImage>
          <img alt="home_img" src={PageImage} width={300} height={300} />
        </LogoImage>
        <Desc>나와 딱 맞는 향수 TYPE 찾기</Desc>
        <InputBox>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            onChange={onChange}
            value={names}
            autoFocus
          />
        </InputBox>
        <Button
          style={{ marginBottom: "2rem" }}
          type="button"
          onClick={() => {
            handleClickButton();
          }}
        >
          START
        </Button>
      </Contents>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "EF_Diary";
  background: linear-gradient(to bottom, #9bc5f7 20%, #ddecff 80%);
`;
const Header = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 2rem;
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "EF_Diary";
  font-weight: 900;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const InputBox = styled.div`
  margin-bottom: 20px;
`;
const LogoImage = styled.div`
  margin-top: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
