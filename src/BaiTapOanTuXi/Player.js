import React, { Component } from 'react'
import { connect } from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{ width: 100, height: 100, transform: 'rotate(180deg)' }} src={this.props.mangDatCuoc.find(item=>item.datCuoc === true).hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src="./img/imgOanTuXi/player.png" alt="..." />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {
                        let border = {};
                        if (item.datCuoc) {
                            border = {border: '3px solid orange'};
                        }
                        return <div className="col-4" key={index}>
                            <button style={border} className="itembtn" onClick={() => {
                                this.props.datCuoc(item.ma);
                            }}>
                                <img style={{ width: 35, height: 35 }} src={item.hinhAnh} alt="..." />
                            </button>
                        </div>
                    })}

                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',   
                maCuoc
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player)