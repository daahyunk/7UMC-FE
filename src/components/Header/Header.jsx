import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

import HeaderLogo1 from "../../assets/images/Header/headerLogo1.png";
import HeaderLogo2 from "../../assets/images/Header/headerLogo2.png";
import HeaderBar1 from "../../assets/images/Header/headerBar1.png";
import HeaderBar2 from "../../assets/images/Header/headerBar2.png";
import HeaderMenu1 from "../../assets/images/Header/headerMenu1.png";
import HeaderMenu2 from "../../assets/images/Header/headerMenu2.png";

import Menu from "./Menu/Menu";

const HeaderContainer = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 430px) {
        height: 7.659rem;
    }
`;

const HeaderInnerContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 92%;
    }
`;

const HeaderLeft = styled.div`
    display: flex;
    gap: 0.8rem;
    align-items: center;
    cursor: pointer;
`;

const HeaderLeftLogoImg = styled.img`
    width: 2.8rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderLogo2});
    }
`;

const HeaderLeftP = styled.p`
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.909rem;
    color: ${colors.white};
`;

const RightContainer = styled.div`
    display: flex;
    gap: 3.822rem;
    align-items: center;

    @media screen and (max-width: 430px) {
        gap: 2.04rem;
    }
`;

const LogoutP = styled.p`
    cursor: pointer;
    color: ${colors.white};
    font-size: 1.6rem;
    line-height: 1.909rem;
    font-weight: 600;

    @media screen and (max-width: 430px) {
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: 400;
    }
`;

const HeaderRightImg = styled.img`
    cursor: pointer;
    width: 4rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderBar2});
    }
`;

const HeaderRightImg2 = styled.img`
    cursor: pointer;
    width: 4rem;

    @media screen and (max-width: 430px) {
        width: 3.6rem;
        content: url(${HeaderMenu2});
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false); 
    const navigate = useNavigate();
    const isLogin = localStorage.getItem('isLogin') === 'true';

    const handleHomeClick = () => {
        navigate("/");
        if (menuOpen) 
            closeMenu();
    };

    const toggleMenu = () => {
        if (menuOpen) {
            closeMenu();
        } else {
            setMenuOpen(true);
        }
    };

    const closeMenu = () => {
        setClosing(true);
        setTimeout(() => {
            setMenuOpen(false);
            setClosing(false);
        }, 500);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        alert("로그아웃 되었습니다.");
        navigate('/');
    };

    return (
        <>
            <HeaderContainer>
                <HeaderInnerContainer>
                    <HeaderLeft onClick={handleHomeClick}>
                        <HeaderLeftLogoImg src={HeaderLogo1} alt="logo" />
                        <HeaderLeftP>HSU UMC</HeaderLeftP>
                    </HeaderLeft>
                    <RightContainer>
                        {isLogin && (
                            <LogoutP onClick={handleLogout}>로그아웃</LogoutP>
                        )}
                        {menuOpen ? (
                            <HeaderRightImg2 src={HeaderMenu1} alt="headerMenu" onClick={toggleMenu} />
                        ) : (
                            <HeaderRightImg src={HeaderBar1} alt="headerBar" onClick={toggleMenu} />
                        )}
                    </RightContainer>
                </HeaderInnerContainer>
            </HeaderContainer>

            {menuOpen && <Menu onClose={closeMenu} closing={closing}/>}
        </>
    );
};

export default Header;
