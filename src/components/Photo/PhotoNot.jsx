import styled from "styled-components";
import colors from "../../styles/colors";

const NotQnaP = styled.p`
    width: 100%;
    text-align: center;
    font-size: 3.6rem;
    font-weight: 700;
    line-height: 4.296rem;
    color: ${colors.white};
    margin-top: 29.4rem;

    @media screen and (max-width: 430px) {
        font-size: 1.8rem;
        line-height: 2.148rem;
        margin-top: 16rem;
    }
`

const NotPhoto = () => {
    return (
            <NotQnaP>UMC 부스에서 체험할 수 있습니다!</NotQnaP>
    )
}

export default NotPhoto;