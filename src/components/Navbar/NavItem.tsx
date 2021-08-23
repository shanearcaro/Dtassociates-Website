const NavItem = (props: {text: string}) => {
    return (
        <span className="navbar-item">
            {props.text}
        </span>
    );
}

export default NavItem;