import logo from "../assets/chef-claude-icon.png";

export default function Header() {
    return (
        <header>
            <img src={logo} className="logo" alt="chef-claude-icon" />
            <h1>Chef Claude</h1>
        </header>
    )
}