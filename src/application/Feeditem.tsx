"use client";

import styled from "styled-components";
import React from "react";

const FeedItem: React.FC<{ data: feedDataType[] }> = ({ data }) => {
  return (
    <FeedItemStyle>
      {data.map((data) => {
        return (
          <FeedBox key={data.id}>
            <Title>{data.title}</Title>
            <Nickname>{data.nickname}</Nickname>
          </FeedBox>
        );
      })}
    </FeedItemStyle>
  );
};

export default FeedItem;

const FeedItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
interface feedDataType {
  id: number;
  title: string;
  nickname: string;
}
