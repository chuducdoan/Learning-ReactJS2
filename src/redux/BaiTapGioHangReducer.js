const stateGioHang = {
    gioHang: []
}

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
    switch(action.type) {
        case 'THEM_GIO_HANG':
            let spGioHang = {
                maSP: action.payload.maSP,
                tenSP: action.payload.tenSP,
                donGia: action.payload.giaBan,
                soLuong: 1,
                hinhAnh: action.payload.hinhAnh
            };
            let index = state.gioHang.findIndex(spGH => spGH.maSP === action.payload.maSP);
            if (index !== -1) {
               state.gioHang[index].soLuong += 1;
            } else {
                state.gioHang.push(spGioHang);
            }
            let gioHangCapNhat = [...state.gioHang];
            return {
                ...state,
                gioHang: gioHangCapNhat
            }
        case 'XOA_GIO_HANG': 
            let gioHangCapNhatXoa = state.gioHang.filter(spGH => spGH.maSP !== action.payload);
            return {
                ...state,
                gioHang: gioHangCapNhatXoa
            }

        default:
            return {...state};
    }
}

export default BaiTapGioHangReducer;