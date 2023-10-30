"use client";

import styled from "styled-components";

function Home() {
  return (
    <HomeStyle>
      <HomeTitle>피드</HomeTitle>
      {FEED_DATA.map((data) => {
        return (
          <FeedBox key={data.id}>
            <Title>{data.title}</Title>
            <Nickname>{data.nickname}</Nickname>
          </FeedBox>
        );
      })}
      <UserChoiceBox>
        <Prev>이전글</Prev>
        <Write>글쓰기</Write>
        <Next>다음글</Next>
      </UserChoiceBox>
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HomeTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const FeedBox = styled.div`
  width: 500px;
  height: 100px;
  border-radius: 5px;
  background-color: #7752fe;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const Nickname = styled.div`
  font-weight: 500;
`;

const UserChoiceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Prev = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: #8e8ffa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

const Write = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: #8e8ffa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

const Next = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: #8e8ffa;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
`;

interface feedDataType {
  id: number;
  title: string;
  nickname: string;
}

const FEED_DATA: feedDataType[] = [
  { id: 1, title: "아산병원 어떤가요?", nickname: "간호사살려" },
  { id: 2, title: "물리치료 교육 어디서 받나요?", nickname: "신의손" },
  { id: 3, title: "진상 환자 어떻게 해결하냐..", nickname: "딸기바나나" },
  { id: 4, title: "점심 메뉴 추천받아요~", nickname: "밥시간만기다려" },
  { id: 5, title: "연봉 10% 올린썰 푼다.", nickname: "커피한잔" },
];
