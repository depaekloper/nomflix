import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contailner = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.img``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;


const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
    <Link to={isMovie? `/move/${id}` : `/show/${id}`}>
        <Contailner>
            <ImageContainer>
                <Image bgUrl={imageUrl}  />
                <Rating><span role="img" aria-label="rating">⭐️</span>{" "}{rating}/10</Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Contailner>
    </Link>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;