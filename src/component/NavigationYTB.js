import React, { useState, useEffect } from "react";
import { BellOutlined, PlusSquareOutlined, AppstoreOutlined, MenuOutlined, YoutubeFilled, SearchOutlined, AudioFilled } from '@ant-design/icons';
import { Input, Button } from "antd";
import SliderYTB from "./sliderYTB";
import "../style/navigation.scss";
import { connect } from "react-redux";
const NavigationYTB = (props) => {
    const [isclass, setIclass] = useState(false);
    const [isShow, setIsShow] = useState(true)
    const HandelIsClass = () => {
        setIsShow(!isShow)
        setIclass(true);
        props.HandelIsShow(isShow)
    }
    return (
        <>
            <nav className="navigationYTB">
                <div className="navi_Left">
                    <div className={`tab_menu ${isclass && "add_tabMenu"}`}>
                        <MenuOutlined style={{ fontSize: "20px" }} onMouseDown={() => HandelIsClass()} onMouseUp={() => setIclass(false)} />
                    </div>
                    <div className="logo_ytb">
                        <YoutubeFilled style={{ fontSize: "30px", color: "red" }} /><b>YouTUBE</b>
                    </div>
                </div>
                <div className="searchYTB">
                    <Input size="large" style={{ width: "75%" }} placeholder="Tìm kiếm" />
                    <Button type="default" size="large"><SearchOutlined /></Button>
                    <AudioFilled style={{ backgroundColor: "rgb(233 233 233)", padding: "12px 13px", borderRadius: "30px", marginLeft: "5px" }} />
                </div>
                <div className="rightYTB">
                    <PlusSquareOutlined style={{ fontSize: "25px" }} />
                    <AppstoreOutlined style={{ fontSize: "25px" }} />
                    <BellOutlined style={{ fontSize: "25px" }} />
                    <div className="avatar_user">G</div>
                </div>
            </nav>
            <SliderYTB />
        </>
    )
}
const mapState = (state) => {
    return state
}
const Ishow = (dispatch) => {
    return {
        HandelIsShow: (user) => dispatch({ type: "ISSHOW", user: user })
    }
}
export default connect(mapState, Ishow)(NavigationYTB)