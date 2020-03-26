import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Identify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            identifyCode: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
            fontSizeMin: {
                type: Number,
                default: 24
            },
            fontSizeMax: {
                type: Number,
                default: 30
            },
            backgroundColorMin: {
                type: Number,
                default: 180
            },
            backgroundColorMax: {
                type: Number,
                default: 240
            },
            colorMin: {
                type: Number,
                default: 50
            },
            colorMax: {
                type: Number,
                default: 170
            },
            lineColorMin: {
                type: Number,
                default: 30
            },
            lineColorMax: {
                type: Number,
                default: 180
            },
            contentWidth: {
                type: Number,
                default: 90
            },
            contentHeight: {
                type: Number,
                default: 40
            }
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.props.onRef) {
            this.props.onRef(this);
        }
        this.drawPic();
    }

    // 生成一个随机数
    randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // 生成一个随机的颜色
    randomColor(min, max) {
        const r = this.randomNum(min, max);
        const g = this.randomNum(min, max);
        const b = this.randomNum(min, max);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    drawPic() {
        const canvas = document.getElementById('s-canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'bottom';
        // 绘制背景
        ctx.fillStyle = this.randomColor(this.state.backgroundColorMin.default, this.state.backgroundColorMax.default);
        ctx.fillRect(0, 0, this.state.contentWidth.default, this.state.contentHeight.default);
        // 绘制文字
        for (let i = 0; i < 4; i++) {
            let c = this.state.identifyCode[Math.floor(this.randomNum(0, this.state.identifyCode.length))];
            this.drawText(ctx, c, i);
            console.log(c);
        }
        this.drawLine(ctx);
    }

    drawText(ctx, txt, i) {
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.font = '26px SimHei';
        const x = (i + 1) * (85 / (4 + 1));
        const y = this.randomNum(this.state.fontSizeMax.default, this.state.contentHeight.default - 5);
        let deg = this.randomNum(-20, 20);
        // 修改坐标原点和旋转角度
        ctx.translate(x, y);
        ctx.rotate(deg * Math.PI / 180);
        ctx.fillText(txt, 0, 0);
        // 恢复坐标原点和旋转角度
        ctx.rotate(-deg * Math.PI / 180);
        ctx.translate(-x, -y);
    }

    drawLine(ctx) {
        // 绘制干扰线
        for (let i = 0; i < 8; i++) {
            ctx.strokeStyle = this.randomColor(this.state.lineColorMin.default, this.state.lineColorMax.default);
            ctx.beginPath();
            ctx.moveTo(this.randomNum(0, this.state.contentWidth.default), this.randomNum(0, this.state.contentHeight.default));
            ctx.lineTo(this.randomNum(0, this.state.contentWidth.default), this.randomNum(0, this.state.contentHeight.default));
            ctx.stroke();
        }
    }

    handleClick(e) {
        this.drawPic();
    }

    render() {
        return <div id="codePic" onClick={this.handleClick}>
            <canvas width="90px" height="40px" id="s-canvas" />
        </div>
    }

}

Identify.propTypes = {
    onRef: PropTypes.func
};

export default Identify;

