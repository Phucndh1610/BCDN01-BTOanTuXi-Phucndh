import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        let keyFrame = `@keyframes randomItem${Date.now()} {
            0% {top:-50px;}
            25% {top: 100px}
            50% {top: -500px}
            75% {top: 100px}
            100% {top: 0px}
        }`
        return (
            <div className="text-center playerGame">
                <style>
                    {keyFrame}
                </style>
                <div className="theThink" style={{position:'relative',zIndex:'10'}}>
                <img style={{position:'absolute',left:'15%',zIndex:'1', animation:`randomItem${Date.now()} 0.5s`,width:100,height:100,transform:'rotate(180deg)'}} src={this.props.computer.hinhAnh} alt="..." />
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150}} src="./img/imgOanTuXi/playerComputer.png" alt="..." />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
    
}
export default connect(mapStateToProps)(Computer)