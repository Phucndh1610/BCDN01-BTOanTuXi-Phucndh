const stateDefault = {
    mangDatCuoc: [
        { ma: 'keo', hinhAnh: './img/imgOanTuXi/keo.png', datCuoc: false },
        { ma: 'bua', hinhAnh: './img/imgOanTuXi/bua.png', datCuoc: true },
        { ma: 'bao', hinhAnh: './img/imgOanTuXi/bao.png', datCuoc: false },
    ],
    ketQua: "Bạn thắng",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: 'keo', hinhAnh: './img/imgOanTuXi/keo.png', datCuoc: false },
}

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO': {
            // reset mảng cược 
            let mangCuocUpDate = [...state.mangDatCuoc];
            // tạo ra mảng cược mới từ mảng củ và action maCuoc do người dùng truyền lên
            mangCuocUpDate = mangCuocUpDate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: true }
                }
                return { ...item, datCuoc: false }
            })
            state.mangDatCuoc = mangCuocUpDate;
            return { ...state }
        }
        case 'RAN_DOM': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
            state.computer = quanCuocNgauNhien;
            return { ...state }
        }
        case 'END_GAME': {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa nhau !!!';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua !!!';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'Bạn thắng';
                    } break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'Bạn thắng';

                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa nhau !!!';

                    } else {
                        state.ketQua = 'Thua !!!';
                    }break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua !!!';

                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = 'Bạn thắng';

                    } else {
                        state.ketQua = 'Hòa nhau !!!';
                    }break;
                default: state.ketQua = 'Bạn thắng';
            
            }
        }
            state.soBanChoi +=1;
            return { ...state }


        default: return { ...state }
    }
}
export default BaiTapOanTuXiReducer;