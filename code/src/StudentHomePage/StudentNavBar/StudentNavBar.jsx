import React from 'react';
import { Link } from 'react-router-dom';


function StudentNavBar(){
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link to="/StudentHomePage" className="navbar-brand d-flex align-items-center">
          <img
            src="https://hcmut.edu.vn/img/nhanDienThuongHieu/01_logobachkhoasang.png"
            alt="Logo"
            width={60}
            height={50}
            className="Logo d-inline-block"
          />
          <span className="function fs-5 fw-bold me-3">Trang chủ</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-1">
                        <Link to='/StudentHomePage' class="nav-link text-white"><i class="bi bi-house-door me-2"></i>Trang chủ</Link>
                    </li>
                    <li class="nav-item mx-1">
                        
                        <Link to='/StudentHomePage/StudentInformation' class="nav-link text-white"><i class="bi bi-gear me-2"></i>Thông tin tài khoản</Link>  
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/StudentHomePage/StudentUploadDocuments' class="nav-link text-white"><i class="bi bi-upload me-2"></i>Nhập file</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/StudentHomePage/StudentViewPrinter' class="nav-link text-white" ><i class="bi bi-printer me-2"></i>Xem máy in</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/StudentHomePage/StudentPrintDocuments' class="nav-link text-white" ><i class="bi bi-file-earmark-text me-2"></i>In</Link>
                    </li>
                    <li class="nav-item mx-1">
                        <Link to='/StudentHomePage/StudentBuyPaper' class="nav-link text-white" ><i class="bi bi-box-seam me-2"></i>Mua giấy</Link>
                    </li>
                </ul>
    
                <div class="ms-auto d-flex align-items-center">
                    <span class="text-white me-3">
                       Chào mừng quay trở lại, <strong>Sinh Viên!</strong>
                    </span>
                    <Link to='/HomePage' class="btn btn-outline-light" href="#">
                    <i class="bi bi-box-arrow-right me-1">
                    </i>Đăng xuất
                    </Link>
                </div>
        </div>
      </div>
    </nav>
    </>
    )
}

export default StudentNavBar