import React, { useState } from "react";
import center from "../style/center.scss";
import { data } from "../data/data";
import { MoreOutlined, StopOutlined } from "@ant-design/icons"
const CenterYTB = () => {
    const [datas, setDatas] = useState(data.data_video);
    const [id, setId] = useState("");
    const [isShow, setIsShow] = useState(false);
    const HandelShow = (id) => {
        setId(id);
        setIsShow(!isShow)
    }
    const Handeldelete = (event, id) => {
        setDatas(datas.filter(data => data.id !== id))
    }
    return (
        <div className="center">
            {datas.map((data) => {
                return (
                    <div className="items_center">
                        <iframe width="295" height="166" src={`https://www.youtube.com/embed/${data.src}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="details" >
                            <div className="avatar">{data.name_scri.slice(0, 1)}</div>
                            <div className="meta">
                                <h3 className="title">{data.title}</h3>
                                <div className="meta_data">
                                    <div className="name_subcri">{data.name_scri} <span> &#9829;</span></div>
                                    <div className="meta_line">
                                        <span className="view">{data.view}</span>
                                        <span className="date">&#128149;{data.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dont_care">
                                <MoreOutlined onClick={() => HandelShow(data.id)} />
                                {isShow && id == data.id && <div div className="delete" onClick={(event) => Handeldelete(event, data.id)}><StopOutlined />Không quan tâm</div>}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
export default CenterYTB