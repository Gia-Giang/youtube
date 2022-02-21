import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import { MenuOutlined, YoutubeFilled } from "@ant-design/icons";
import { connect } from "react-redux";
const NaviLeft = (props) => {
    const { items, subscribeChannel, service } = data;
    const [addclass, setAddclass] = useState("");
    const { action } = props
    console.log(props)
    const handel = (users) => {
        let a = users.map((user) => {
            return (
                <>
                    <div key={user.id} className={`item ${user.id == 3 && "add_border"} ${user.id == addclass && "add_background"}`} onClick={() => setAddclass(user.id)}>
                        <div className="icon">{user.icon}</div>
                        <div className="name">{user.name}</div>
                    </div>
                </>
            )
        })
        return a
    }
    return (
        <div className={`naviLeft ${!action && "change_width"}`}>
            {action ?
                <>
                    <div className="items">
                        {handel(items)}
                    </div>
                    <div className="subscribeChannel">
                        <strong className="subcri">KENH DANG KY</strong>
                        {subscribeChannel.map((item) => {
                            return (
                                <div key={item.id} className="item">
                                    <div className="icon">{item.avatar}</div>
                                    <div className="name">{item.name}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="service">
                        <b className="subcri">DỊCH VỤ KHÁC CỦA YOUTUBE</b>
                        {handel(service)}
                    </div>
                </>
                :
                <div className="items_z">
                    {items.filter(item => item.id < 5).map((item) => {
                        return (
                            <div className="item change_height">
                                <div className="icon">{item.icon}</div>
                            </div>
                        )
                    })}
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
export default connect(mapState, mapEvent)(NaviLeft)