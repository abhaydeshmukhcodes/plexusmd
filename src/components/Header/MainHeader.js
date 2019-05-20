import { Menu} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';


export default class MainHeader extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
                <Menu.Item key="mail">
                    MY SUBSCRIPTION
                </Menu.Item>
                <Menu.Item key="app" >
                    NO BOOKMARKS
                </Menu.Item>
                <Menu.Item key="TAP" >
                    YOUR EVENT ON MEDCAST
                </Menu.Item>

            </Menu>
        );
    }
}

