import React, {Component} from "react";

import Grid from "@material-ui/core/Grid/Grid";

import PageTitle from "../PageTitle";
import AlcoholItem from "./AlcoholItem";
import TollInfoBanner from "../TollInfoBanner";


class FortifiedWine extends Component {
    render = () => {
        return (
            <div>
                <PageTitle title={"Fortified Wine"}/>
                <Grid container
                      justify={"center"}
                      alignItems={"center"}
                      spacing={0}
                      direction={"row"}
                >
                    <TollInfoBanner text={"85 NOK per bottle (0.75l) / 115 NOK per litre"}/>
                    <AlcoholItem amount={0.375} icon={"wineBottleSmall"}/>
                    <AlcoholItem amount={0.5} icon={"fortifiedWine"}/>
                    <AlcoholItem amount={0.75} icon={"fortifiedWine"}/>
                    <AlcoholItem pitcher/>
                </Grid>
            </div>
        );
    };
}

export default FortifiedWine;