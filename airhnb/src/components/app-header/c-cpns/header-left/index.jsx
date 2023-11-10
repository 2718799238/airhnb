import React, { memo } from "react";
import { LeftWrapper } from "./style";
import AiLogo from "@/assets/images/svg/ai_logo";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  return (
    <LeftWrapper>
      <div className="logo" onClick={() => navigate("/")}>
        <AiLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
