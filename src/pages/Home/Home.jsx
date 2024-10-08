import React from 'react';
import styled from 'styled-components';
import Banner from "../../components/Home/Banner/Banner";
import Intro from "../../components/Home/Intro/Intro";
import Goal from "../../components/Home/Goal/Goal";
import Stage from "../../components/Home/Stage/Stage";
import If from "../../components/Home/If/If";
import Apply from "../../components/Home/Apply/Apply"; 

const HomeContainer = styled.div`
    min-height: calc(100vh - 22rem);
    margin-top: 0;

    @media screen and (max-width: 768px) {
        min-height: calc(100vh - 17.659rem);
    }
`;

const Home = () => {
    return (
        <HomeContainer>
            <Banner />
            <Intro />
            <Goal />
            <Stage />
            <If />
            <Apply /> 
        </HomeContainer>
    )
}

export default Home;
