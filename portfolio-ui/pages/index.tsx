import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	color: ${(props) => props.theme.MAIN_BLUE}; // theme.js에서 가져온것
`;

export default function Home() {
  const [text, setText] = useState<string>("자바스크립트");

  setTimeout(() => {
    setText("타입스크립트")
  }, 1000)

  return (
    <div className="container">
      <div>
        <Main><span>{text} 적용 완료</span></Main>
      </div>
    </div>
  );
}