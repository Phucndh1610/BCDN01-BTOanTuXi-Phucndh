import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux'
class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player />
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi />
                        <button className="btn btn-success mt-3" onClick={() => {
                            this.props.playGame();
                        }}>Play Game</button>
                    </div>
                    <div className="col-4">
                        <Computer />
                    </div>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            // khai báo hàm lặp đi lặp lại 
            let ramdomComputerItem = setInterval(() => {
                let soNgauNhien = Math.floor(Math.random() * 3);
                dispatch({  
                    type:"RAN_DOM",
                    soNgauNhien
                })
                count ++;
                if (count > 10) {
                    // dùng hàm setintervol lại
                    clearInterval(ramdomComputerItem)
                    dispatch({
                        type:'END_GAME',
                    })
                }
            },100)
            
        }
    }
}
export default connect(null,mapDispatchToProps)(BaiTapOanTuXi)