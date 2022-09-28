import React from "react";
// css-in-js
import styled from "styled-components";
// import PageImage from '../assets/img1.jpg';
import Button from "react-bootstrap/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from "../assets/data/resultdata";
import KakaoShareBtn from "../component/KakaoShareBtn";
import { firebase_db } from "../config";
const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("types");
  const name = searchParams.get("names");
  const data = searchParams.get("datas");
  // console.log(data);
  const data1 = JSON.parse(data);
  var data2 = data1[data1.length - 1];
  if (data2.score === 1) {
    data2.answer = "남";
  } else {
    data2.answer = "여";
  }
  var data3 = data1[data1.length - 2];
  if (data3.score === 1) {
    data3.answer = "YES";
  } else {
    data3.answer = "NO";
  }
  var data4 = data1[data1.length - 3];
  if (data4.score === 1) {
    data4.answer = "YES";
  } else {
    data4.answer = "NO";
  }
  var data5 = data1[data1.length - 4];
  if (data5.score === 1) {
    data5.answer = "YES";
  } else {
    data5.answer = "NO";
  }
  var data6 = data1[data1.length - 5];
  if (data6.score === 1) {
    data6.answer = "YES";
  } else {
    data6.answer = "NO";
  }
  var data7 = data1[data1.length - 6];
  if (data7.score === 1) {
    data7.answer = "YES";
  } else {
    data7.answer = "NO";
  }
  var data8 = data1[data1.length - 7];
  if (data8.score === 1) {
    data8.answer = "YES";
  } else {
    data8.answer = "NO";
  }
  var data9 = data1[data1.length - 8];
  if (data9.score === 1) {
    data9.answer = "YES";
  } else {
    data9.answer = "NO";
  }
  var data10 = data1[data1.length - 9];
  if (data10.score === 1) {
    data10.answer = "YES";
  } else {
    data10.answer = "NO";
  }
  var data11 = data1[data1.length - 10];
  if (data11.score === 1) {
    data11.answer = "YES";
  } else {
    data11.answer = "NO";
  }

  console.log(data1);

  //최종적으로 도출한 결과 객체
  const [resultData, setResultData] = React.useState({});
  React.useEffect(() => {
    // firebase_db.ref("user").push({
    //   name: name,
    //   question1: data11.answer,
    //   question2: data10.answer,
    //   question3: data9.answer,
    //   question4: data8.answer,
    //   question5: data7.answer,
    //   question6: data6.answer,
    //   question7: data5.answer,
    //   question8: data4.answer,
    //   question9: data3.answer,
    //   성별: data2.answer,
    // });
    const result = ResultData.find((s) => s.type === type);
    setResultData(result);
  }, []);
  return (
    <Wrapper>
      <Header>향수 취향 테스트</Header>

      <Contents>
        <Title>결과 보기</Title>
        <LogoImage>
          <img src={resultData.image} width={300} height={300} />
        </LogoImage>
        <Desc>{name}님의 TYPE은 바로...!</Desc>
        <DescName>'{resultData.type}' Type 입니다!</DescName>
        <DescSub>{resultData.desc}</DescSub>
        <PerfumeImage>
          {data2.answer === "남" ? (
            <img src={resultData.image2} width={"100%"} height={300} />
          ) : (
            <img src={resultData.image3} width={"100%"} height={300} />
          )}
        </PerfumeImage>
        <ButtonGroup>
          <Button style={{ marginRight: "10px" }} onClick={() => navigate("/")}>
            REPLAY
          </Button>
          <KakaoShareBtn style={{ marginLeft: "10px" }} data={resultData} />
        </ButtonGroup>
      </Contents>
    </Wrapper>
  );
};

export default Result;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  font-family: "EF_Diary";
  background: linear-gradient(to bottom, #9bc5f7 20%, #ddecff 80%);
`;
const Header = styled.div`
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
const LogoImage = styled.div`
  margin-top: 20px;
`;
const PerfumeImage = styled.div`
  margin-top: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  white-space: pre-line;
`;
const DescName = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: bold;
`;
const DescSub = styled.div`
  font-size: 15px;
  margin-bottom: 20px;
  padding-top: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 5px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;
