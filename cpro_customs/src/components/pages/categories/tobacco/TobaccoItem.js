import React, {Component} from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import TextField from "@material-ui/core/TextField/TextField";

import ImgBadge from "../../../ImgBadge";
import PlusMinusButtons from "../PlusMinusButtons";


class TobaccoItem extends Component {
    state = {
        amount: 0,
    };

    render = () => {
        const {amount, icon, otherAmount, unit} = this.props;
        return (
            <Grid item xs={12} sm={12} md={12} style={{paddingBottom: "32px"}}>
                <Grid container justify={"center"} alignItems={"center"}>
                    <Grid item xs={11} className={"cdp_sub_selection_max_width_grid_item"}>
                        <Paper className={"cdp_paper_category_sub_selection"}>
                            <Grid container spacing={8} justify={"center"} alignItems={"center"}>
                                {
                                    otherAmount
                                        ?
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item xs={0} sm={1} md={1}/>
                                                <Grid item xs={12} sm={6} md={6}>
                                                    <Grid container>
                                                        <p className={"cdp_dark_grey"}>Other amount</p>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        :
                                        ""
                                }
                                <Grid item xs={3} sm={5} md={5}>
                                    <Grid container justify={"center"} alignItems={"center"}>
                                        {
                                            otherAmount
                                                ?
                                                [
                                                    <Grid item xs={12} sm={3} md={2} key={0}>
                                                        <Grid container justify={"center"} alignItems={"center"}>
                                                            <ImgBadge
                                                                icon={icon}
                                                                key={1}
                                                                badgeContent={this.state.amount}
                                                                color={"secondary"}
                                                                style={{
                                                                    marginBottom: "-5px",
                                                                    marginTop: "-5px"
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>,
                                                    <Grid item xs={12} sm={6} md={4} key={1}>
                                                        <Grid container justify={"center"} alignItems={"center"}>
                                                            <TextField
                                                                id={"good_name"}
                                                                key={2}
                                                                className={"cdp_input_field"}
                                                                label={unit}
                                                            />
                                                        </Grid>
                                                    </Grid>,
                                                ]
                                                :
                                                [
                                                    <Grid item xs={12} sm={4} md={3} key={2}>
                                                        <Grid container justify={"center"} alignItems={"center"}>
                                                            <ImgBadge
                                                                icon={icon}
                                                                key={0}
                                                                badgeContent={this.state.amount}
                                                                color={"secondary"}
                                                                style={{paddingBottom: "-10px"}}
                                                            />
                                                        </Grid>
                                                    </Grid>,
                                                    <Grid item xs={12} sm={6} md={4} key={2}>
                                                        <Grid container justify={"center"} alignItems={"center"}>
                                                            <h3 className="cdp_dark_grey" key={1}
                                                                style={{paddingTop: "10px", textAlign: "center"}}>
                                                                <span>{amount} {unit}</span>
                                                            </h3>
                                                        </Grid>
                                                    </Grid>,
                                                ]
                                        }
                                    </Grid>
                                </Grid>
                                <Grid item xs={9} sm={7} md={7}>
                                    <PlusMinusButtons
                                        handleDecrement={this.handleDecrement.bind(this)}
                                        handleIncrement={this.handleIncrement.bind(this)}
                                        handlePlusFive={this.handlePlusFive.bind(this)}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        );
    };

    handleDecrement = () => {
        if (this.state.amount <= 0) return;
        this.setState({
            amount: this.state.amount - 1,
        });
    };

    handleIncrement = () => {
        this.setState({
            amount: this.state.amount + 1,
        });
    };

    handlePlusFive = () => {
        this.setState({
            amount: this.state.amount + 5,
        });
    };
}


TobaccoItem.propTypes = {
    amount: PropTypes.number,
    icon: PropTypes.string,
    otherAmount: PropTypes.bool,
    unit: PropTypes.string,
};

TobaccoItem.defaultProps = {
    otherAmount: false,
    unit: "grams",
};

export default TobaccoItem;