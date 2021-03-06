import React, {Component} from 'react'
import {withRouter} from "react-router";

import {Icon, IconButton} from "@material-ui/core";
import Badge from "@material-ui/core/Badge/Badge";
import {GlobalState} from "../context/GlobalState";


class ShoppingCartButton extends Component {
    render = () => {
        return (
            <GlobalState.Consumer>
                {globalState => (
                    <IconButton
                        onClick={this.onClick}
                        onMouseOver={this.onMouseOver}
                        onMouseOut={this.onMouseOut}
                        role="button"
                        type="submit"
                        value="shopping cart"
                    >
                        <Badge
                            badgeContent={globalState.totalAmount()}
                            color={"secondary"}
                        >
                            <Icon>
                                {"shopping_cart"}
                            </Icon>
                        </Badge>
                    </IconButton>
                )}
            </GlobalState.Consumer>
        )
    };

    onClick = () => {
        this.props.history.push("/declaration-list");
    };
}

export default withRouter(ShoppingCartButton);