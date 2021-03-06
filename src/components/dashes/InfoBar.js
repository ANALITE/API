import React, { Component } from "react";
import { Layout, List, Icon } from "antd";

const { Footer } = Layout;

class InfoBar extends Component {
    render() {
        return (
            <Footer style={{ textAlign: "center", backgroundColor: "#343A40" }}>
                <List grid={{ gutter: 16, column: 4 }}>
                    <a href="https://github.com/ANALITE/API.git">
                        <Icon type="github" theme="outlined" style={{ fontSize: "30px" }} />
                    </a>
                    <Icon type="facebook" theme="outlined" style={{ fontSize: "30px" }} />
                    <Icon
                        type="instagram"
                        theme="outlined"
                        style={{ fontSize: "30px" }}
                    />
                    <Icon type="twitter" theme="outlined" style={{ fontSize: "30px" }} />
                </List>
                <div>ANALITE &copy;</div>
            </Footer>
        );
    }
}

export default InfoBar;