interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    mode: 'primary' | 'secondary' | 'submit'
    background: string
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export default Button;