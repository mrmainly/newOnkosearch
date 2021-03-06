import React from 'react'

import { Button } from '@mui/material'

import { ButtonProps } from '../../../interface'

const MyButton: React.FC<ButtonProps> = ({ children, ...props }) => <Button {...props} variant="contained" type="submit">{children}</Button>

export default MyButton