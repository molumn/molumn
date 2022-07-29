import React, {useEffect, useState} from "react";

import "./HeaderLine.css";

import "../utils/css/text.css"
import class_names from "../utils/css/class_name";


type HeaderLineProps = {
    header?: string,
    children?: JSX.Element | JSX.Element[]
}

const HeaderLine = ({ header, children }: HeaderLineProps) => {

    const [position, setPosition] = useState(window.scrollY)
    const [show, setShow] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let next = window.scrollY
            setPosition(next)
            setShow(next <= position)
        }

        window.addEventListener('scroll', handleScroll)
        return(() => {
            window.removeEventListener('scroll', handleScroll)
        })
    })

    const additional_style = {
        top: show ? "0%" : "-100%",
    }

    return (
        <>
            <div className="MN_HEADER_LINE_AREA" style={additional_style}>
                <div className="MN_HEADER_NAME_AREA">
                    <h1 className={class_names.text.main_header}>{header || "Default Header"}</h1>
                    {show}
                </div>
                <div className="MN_HEADER_CHILDREN_AREA">
                    {children || []}
                </div>
            </div>
            <div className="MN_HEADER_LINE_AREA_BACK">
                <div className="MN_HEADER_NAME_AREA">
                    <h1 className={class_names.text.main_header}>{header || "Default Header"}</h1>
                    {show}
                </div>
                <div className="MN_HEADER_CHILDREN_AREA">
                    {children || []}
                </div>
            </div>
        </>
    )
}

export default HeaderLine;
