import styled from "styled-components";

const CenterCol=styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0 20px 0 20px;
    top:${props=>props.$top|| 0};

`
const LeftCol=styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px 0 20px;
    top:${props=>props.$top|| 0};


`
const RightCol=styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 20px 0 20px;
    position: absolute;
    top:${props=>props.$top|| 0};

`

export {CenterCol, LeftCol, RightCol} 