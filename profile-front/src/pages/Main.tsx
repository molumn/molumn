import React from "react";
import {BrowserView, MobileView} from "react-device-detect"

import "../utils/css/class_name";
import HeaderLine from "../container/HeaderLine";
import MobileMenu from "../component/MobileMenu";


export default class Main extends React.Component<{}, {}> {

    render() {
        return (
            <>
                {/* header */}
                <BrowserView>
                    <HeaderLine header="Molumn">
                    </HeaderLine>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                </BrowserView>
                <MobileView>
                    <HeaderLine header="Molumn">
                        <MobileMenu>
                        </MobileMenu>
                    </HeaderLine>
                </MobileView>
            </>
        )
    }

}
