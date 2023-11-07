import React, { memo } from "react";
import { LeftWrapper } from "./style";
import AiLogo from "@/assets/images/svg/ai_logo";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <AiLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
