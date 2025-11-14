import styled from "@emotion/styled";

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: 20px 0;

  @media (max-width: 768px) {
    margin: 12px 0;
  }
`;

export const Loading = styled.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;

  @media (max-width: 768px) {
    padding: 30px;
    font-size: 14px;
  }
`;
