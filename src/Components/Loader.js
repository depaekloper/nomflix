import React from "react";
import styled from "styled-components";

const Contailner = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 28px;
    margin-top: 20px;
`;

export default () => <Contailner><span role="img" aria-label="Loading">⏰</span></Contailner>;