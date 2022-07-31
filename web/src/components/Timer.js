import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const StyledTimerContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;
const StyledTimer = styled.section`
  border: 10px solid #b50004;
  border-radius: 100px;
  width: 100%;
`;
const Clock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 50px 10px 50px;
`;

const CountdownNumber = styled.p`
  width: 140px;
  font-family: "Orbitron";
  font-style: normal;
  font-size: 62px;
  font-weight: 700;
  color: #b50004;
  margin: 0px;
  text-align: center;
`;

const StyledColon = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-size: 32px;
  font-weight: 700;
  color: grey;
`;

const StyledSmallText = styled.small`
  font-family: "Poppins";
  font-style: normal;
  font-size: 12px;
  font-weight: 500;
  color: grey;
  text-align: center;
`;

const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  justifty-content: center;
  align-items: center;
`;

function Timer({ timerDays, timerHours, timerMinutes, timerSeconds }) {
  return (
    <>
      <StyledTimerContainer>
        <StyledTimer>
          <Clock>
            <NumberSection>
              <CountdownNumber>{timerDays}</CountdownNumber>
              <StyledSmallText>Days</StyledSmallText>
            </NumberSection>
            <StyledColon>:</StyledColon>
            <NumberSection>
              <CountdownNumber>{timerHours}</CountdownNumber>
              <StyledSmallText>Hours</StyledSmallText>
            </NumberSection>
            <StyledColon>:</StyledColon>
            <NumberSection>
              <CountdownNumber>{timerMinutes}</CountdownNumber>
              <StyledSmallText>Minutes</StyledSmallText>
            </NumberSection>
            <StyledColon>:</StyledColon>
            <NumberSection>
              <CountdownNumber>{timerSeconds}</CountdownNumber>
              <StyledSmallText>Seconds</StyledSmallText>
            </NumberSection>
          </Clock>
        </StyledTimer>
      </StyledTimerContainer>
    </>
  );
}

export default Timer;
