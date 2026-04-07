import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

type Color = 'primary' | 'secondary' | 'success' | 'error'
type Variant = 'text' | 'contained' | 'outlined'
type Size = 'sm' | 'md' | 'lg'

interface Props {
    type?: 'reset' | 'button' | 'submit'
    children: React.ReactNode
    className?: string
    variant?: Variant
    size?: Size
    color?: Color
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    loading?: boolean
    onClick?: () => void
    disableElevation?: boolean
    disabled?: boolean
}

/**
 *
 * Button
 *
 */
const Button: NextPage<Props> = ({
    type = 'button',
    children,
    className,
    endIcon,
    startIcon,
    color = 'primary',
    loading = false,
    variant = 'contained',
    size = 'md',
    onClick,
    disabled = false,
    disableElevation = false,
}) => {
    const sizes: Record<Size, string> = {
        sm: 'text-sm px-3',
        lg: 'text-lg px-3 py-2',
        md: 'text-md px-3 py-1',
    }
    const variants: Record<Variant, string> = {
        text: 'bg-none',
        contained: 'text-white',
        outlined: 'bg-none border',
    }
    const colors: Record<Color, string> = {
        primary: `text-primary bg-primary/90 border-primary/40 hover:border-primary ${
            variant === 'contained'
                ? 'hover:bg-primary/100'
                : 'hover:bg-primary/5'
        }`,
        secondary: `text-secondary bg-secondary/90 border-secondary/40 hover:border-secondary ${
            variant === 'contained'
                ? 'hover:bg-secondary/100'
                : 'hover:bg-secondary/5'
        }`,
        success: `text-success bg-success/90 border-success/40 hover:border-success ${
            variant === 'contained'
                ? 'hover:bg-success/100'
                : 'hover:bg-success/5'
        }`,
        error: `text-error bg-error/90 border-error/40 hover:border-error ${
            variant === 'contained' ? 'hover:bg-error/100' : 'hover:bg-error/5'
        }`,
    }

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={cn(
                'shadow-xs flex h-fit w-full items-center justify-center gap-3 whitespace-nowrap rounded-md transition-colors hover:shadow-md',
                sizes[size],
                colors[color],
                variants[variant],
                className,
                {
                    'shadow-none hover:shadow-none': disableElevation,
                },
                {
                    'pointer-events-none border-gray-400/50 bg-gray-300/60 text-gray-400':
                        disabled,
                }
            )}
            onClick={onClick}
        >
            {loading && (
                <div
                    id="spinner"
                    data-testid={'spinner-id'}
                    className="size-6 animate-spin rounded-full border-4 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                />
            )}
            <div>{startIcon && startIcon}</div>
            {children}
            <div>{endIcon && endIcon}</div>
        </button>
    )
}

export default Button
