import React from 'react';
import {Menu, Icon, Image} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'

const LOGO_URI = 'assets/3c53b720fe97bddc31889c2ef9f0af5e.png'

class MenuComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log("This is props ", props);
    }

    render() {

        return (
            <Menu secondary className={"centerAll"}>
                {/*<Menu.Item name='sidebar' active={true}>
                    <Icon name={"sidebar"} size='large'/>
                </Menu.Item>*/}
                <Menu.Item name='logo' className={"logoOuterStyles"}  active={true}>
                    Fourth<span className={"logoStyles"}><b>/Standard</b></span>
                </Menu.Item>

                <Menu.Item position='right'>
                    <Menu.Item
                        name='HOME'
                        activeClassName={"activeItem"}
                        as={NavLink} exact to={"/"}

                    />
                    <Menu.Item
                        name='INTRODUCTION'
                        activeClassName={"activeItem"}
                        as={NavLink} to={"/introduction"}

                    />
                    <Menu.Item
                        name='LOGIN'
                        activeClassName={"activeItem"}
                        as={NavLink} to={"/signup"}

                    />

                </Menu.Item>
            </Menu>
        )

    }
}

export default withRouter(MenuComponent);

