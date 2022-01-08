interface Popup {
    show: boolean
    proceed: (value: any) => void
    dismiss: () => void
    header: string | React.ReactNode
    confirmation: string | React.ReactNode
    isMessage: boolean
}

export default Popup;