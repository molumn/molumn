

type MobileMenuProps = {
    children?: JSX.Element | JSX.Element[]
}

const MobileMenu = ({ children } : MobileMenuProps) => {
    return (
        <>
            <div className="MN__FIXED_UNDERLINE">
                {children || <></>}
            </div>
        </>
    )
}

export default MobileMenu
