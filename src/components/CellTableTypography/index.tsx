import React, { ElementType } from "react";

import { Typography, TypographyProps } from "@mui/material";

export interface TypographyBaseProps extends TypographyProps {
    component?: ElementType;
}
const CellTableTypography = React.forwardRef<HTMLElement, TypographyBaseProps>(
    (props: TypographyProps, ref) => {
        return <Typography fontSize="14px !important" ref={ref} {...props} />;
    }
);
export default CellTableTypography;
