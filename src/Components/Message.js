import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Contailner = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const Text = styled.span`
    color: ${props => props.color};
`;


const Message = ({text, color}) => <Contailner><Text color={color}>{text}</Text></Contailner>

Message.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Message;