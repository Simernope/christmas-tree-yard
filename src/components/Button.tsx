import {FC, ReactNode} from "react";

type ButtonProps = {
    buttonType: 'default' | 'primary' | 'secondary' | 'gradient'
    children: ReactNode
}

enum ButtonColors {
    'default' = 'bg-green-600 hover:bg-green-700 active:bg-green-800',
    'primary' = 'bg-red-400 hover:bg-red-500 active:bg-red-600',
    'secondary' = 'bg-slate-400 hover:bg-slate-500 active:bg-slate-600',
    'gradient' = 'bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 active:from-green-800 active:to-green-700'
}

const Button: FC<ButtonProps> = ({buttonType, children}: ButtonProps) => {

    return (
        <button className={`${ButtonColors[buttonType]} rounded px-4 py-1 text-white text-xl sm:w-fit`}>
            {children}
        </button>
    )
}

export {Button}