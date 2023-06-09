import { styled } from "@mui/material";
import Button, { buttonClasses } from "@mui/base/Button";
import { orange } from "@mui/material/colors";

export const DefaultButton = styled(Button)`
    font-family: "Abril Fatface";
    letter-spacing: 3px;
    font-size: 1rem;
    background-color: ${orange[700]};
    padding: 12px 24px;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    border-radius: 0;

    &:hover {
        background-color: ${orange[800]};
    }

    &.${buttonClasses.active} {
        background-color: ${orange[900]};
    }

    &.${buttonClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
    }

    &.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

// Nicolas
