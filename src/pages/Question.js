import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { QuestionData } from "../assets/data/questiondata";
import { firebase_db } from "../config";

const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [gender, setGender] = React.useState("");
  const [totalScore, setTotalScore] = React.useState([
    { id: "BA", score: 0 },
    { id: "CB", score: 0 },
    { id: "DC", score: 0 },
  ]);
  const [data, sendingData] = React.useState([
    { idx: 0, score: 0, answer: "" },
    { idx: 1, score: 0, answer: "" },
    { idx: 2, score: 0, answer: "" },
    { idx: 3, score: 0, answer: "" },
    { idx: 4, score: 0, answer: "" },
    { idx: 5, score: 0, answer: "" },
    { idx: 6, score: 0, answer: "" },
    { idx: 7, score: 0, answer: "" },
    { idx: 8, score: 0, answer: "" },
    { idx: 9, score: 0, answer: "" },
  ]);
  const [totalType, setTotalType] = React.useState();

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const names = searchParams.get("names");

  const handleClick = (d, id) => {
    const sending = data.map((s) => {
      console.log("a");
      return s.idx === id
        ? { id: s.idx, score: s.score + d, answer: s.answer }
        : s;
    });
    sendingData(sending);
    const c = [...sending];
    if (QuestionData.length !== questionNo + 1) {
      //다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // console.log(data);
      // console.log(sending);
      // console.log(sending[9]);
      // console.log(sending[9].score);
      // console.log(c);
      // console.log(c[0].score);
      firebase_db.ref("user").push({
        name: names,
        question1: c[0].answer,
        question2: c[1].answer,
        question3: c[2].answer,
        question4: c[3].answer,
        question5: c[4].answer,
        question6: c[5].answer,
        question7: c[6].answer,
        question8: c[7].answer,
        question9: c[8].answer,
        성별: c[9].answer,
      });
      console.log(data);
    }
  };
  console.log(data);
  const c = [...data];
  const goResult = () => {
    navigate("/result");
    navigate({
      pathname: "/result",
      search: `?${createSearchParams({
        names: names,
      })}`,
    });
  };
  const handleClickBtn = (d, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + d } : s
    );
    setTotalScore(newScore);
    if (QuestionData.length !== questionNo + 1) {
      //다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      //type 도출!
      // console.log(quest);
      const mbti = newScore.reduce(
        (acc, current) =>
          acc +
          (current.score >= 2
            ? current.id.substring(0, 1)
            : current.id.substring(1, 2)),
        ""
      );
      const genders = newScore.reduce(
        (acc, current) =>
          acc +
          (current.score === 1
            ? current.id.substring(0, 1)
            : current.id.substring(1, 2)),
        ""
      );
      const exercise = [
        mbti.substring(0, 1),
        mbti.substring(1, 2),
        mbti.substring(2, 3),
      ];
      const exercise1 = [genders.substring(3, 4)];
      // console.log(mbti);
      // console.log(exercise);
      console.log(totalType);
      if (exercise.includes("A")) {
        setTotalType(exercise[0]);
      } else if (
        exercise[0] === "B" &&
        exercise[1] === "B" &&
        exercise[2] === "C"
      ) {
        setTotalType(exercise[0]);
      } else if (
        exercise[0] === "B" &&
        exercise[1] === "C" &&
        exercise[2] === "C"
      ) {
        setTotalType(exercise[1]);
      } else {
        setTotalType(exercise[2]);
      }
      const a = [...totalType];
      // console.log(a);
      setGender(exercise1[3]);
      const b = [...gender];
      //결과페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          names: names,
          types: a,
          gender: b,
        })}`,
      });
    }
  };
  return (
    <Wrapper>
      <Bar>
        <ProgressBar striped now={(questionNo / QuestionData.length) * 100} />
      </Bar>
      <QuestionNo> Question.{QuestionData[questionNo].id} </QuestionNo>
      <Title>{QuestionData[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => {
            handleClickBtn(1, QuestionData[questionNo].type);
            handleClick(1, QuestionData[questionNo].id - 1);
          }}
          style={{
            width: "80%",
            minHeight: "20vh",
            fontSize: "15px",
            margin: "10px 10px 10px 10px",
          }}
        >
          {QuestionData[questionNo].answerA}
        </Button>
        <Button
          onClick={() => {
            handleClickBtn(0, QuestionData[questionNo].type);
            handleClick(0, QuestionData[questionNo].id - 1);
          }}
          style={{
            width: "80%",
            minHeight: "20vh",
            fontSize: "15px",
            margin: "10px 10px 10px 10px",
          }}
        >
          {QuestionData[questionNo].answerB}
        </Button>
        <Button
          style={{
            width: "70%",
            minHeight: "20vh",
            fontSize: "15px",
            margin: "10px 10px 10px 10px",
          }}
          type="button"
          onClick={() => {
            goResult();
          }}
        >
          결과보러가기
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  font-family: "EF_Diary";
  background: linear-gradient(to bottom, #9bc5f7 20%, #ddecff 80%);
`;
const Bar = styled.div`
  padding-top: 2rem;
`;
const QuestionNo = styled.div`
  margin: 2rem 1rem 1rem 1rem;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`;
const Title = styled.div`
  padding: 1rem 1rem 1rem 1rem;
  font-size: 20px;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;