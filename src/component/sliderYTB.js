import React, { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
const SliderYTB = (props) => {
    const [classname, setClassname] = useState(0);
    const [istranform, setIstranform] = useState(false)
    const data = {
        items: ["Tất cả", "Danh sách kết hợp", "Âm nhạc", "Bóng đá", "Phim hoạt hình", "Đọc rap", "Đọc rap", "Đọc rap", "Đọc rap", "Đọc rap", "Bóng đá", "Phim hoạt hình", "Đọc rap", , "Đọc rap", "Bóng đá", "Phim hoạt hình", "Đọc rap"]
    }
    const { action } = props
    const HandelAddClass = (index) => {
        setClassname(index)
    }
    return (
        <div className="sum_slider">
            <div className={`slider_YTB ${!action && "add_padding"}`}>
                {data.items.map((item, index) => {
                    return (
                        <button className={`${classname == index && "add_backgroundBlack"} ${istranform ? "addtranform_Right" : "addtranform_Left"}`} key={index} onClick={() => HandelAddClass(index)}>{item}</button>
                    )
                })}
            </div>
            {istranform ?
                <div className="icon_left">
                    <LeftOutlined onClick={() => setIstranform(false)} />
                </div>
                :
                <div className="icon_right">
                    <RightOutlined onClick={() => setIstranform(true)} />
                </div>
            }

        </div>
    )
}
const mapState = (state) => {
    return state
}
const mapEvent = (action) => {
    return action.user
}
export default connect(mapState, mapEvent)(SliderYTB)