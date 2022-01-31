import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledLoginRegister = styled(Content)`
  min-width: 500px;
  width: 35%;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(188, 211, 233, 0.8);
  .gx-mb-3{
    b{
      font-size: 14px;
      top: 43px;
    }
  }
  .row-logo {
    padding-bottom: 30px;
    position: relative;
    text-align: center;
    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      height: 400px;
      width: 100%;
      max-width: 700px;
    }
  }
  .ant-input{
    height:40px;
  }
  .row-content {
    position: relative;
    bottom: 0px;
    padding-bottom: 10px;
    margin:0 !important;
  }
  h1 {
    padding-bottom: 10px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #4b91ff;
  }
`;
