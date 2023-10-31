"use client";

import { NextPage } from "next";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Main: NextPage = () => {
  const router = useRouter();
  return (
    <MainStyle>
      메인
      <ItemBtn
        onClick={() => {
          router.push("/item");
        }}
      >
        아이템으로 가기
      </ItemBtn>
    </MainStyle>
  );
};
export default Main;

const MainStyle = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
`;

const ItemBtn = styled.div`
  padding: 15px;
  margin-top: 10px;
  background-color: #7752fe;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
`;
