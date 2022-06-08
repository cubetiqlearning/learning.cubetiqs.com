import { Button as NButton, ButtonProps as NButtonProps } from '@nextui-org/react';
import React from 'react';

export interface ButtonProps extends NButtonProps {
}

const Button: React.FC<ButtonProps> = (props) => {
    return <NButton {...props} />;
}

export default Button;