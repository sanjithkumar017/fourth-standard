import React from 'react';
import {Menu, Grid} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'


class MenuComponent extends React.Component {
    constructor(props) {
        super(props)
        console.log("This is props ", props);
    }

    render() {

        return (

            <Menu secondary className={"centerAll"}>

                <Menu.Item name='logo' className={"logoOuterStyles"} active={true}>
                    Fourth<span className={"logoStyles"}><b>/Standard</b></span>
                </Menu.Item>


                <Menu.Item position='right'>
                    <Grid>
                        <Grid.Row only='computer'>
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
                        </Grid.Row>
                    </Grid>
                </Menu.Item>

            </Menu>

        )

    }
}

export default withRouter(MenuComponent);

