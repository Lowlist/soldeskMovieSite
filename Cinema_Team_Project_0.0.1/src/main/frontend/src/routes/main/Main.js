import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom'
import './style/Main.css';

function Main() {
    let navigate = useNavigate();

    return (
        <div class="wrapper">
            <div className="wrapper-header-top">
	            <div className="header-top-left">
	                {/* <img className="header-top-logo" src={movie}></img> */}
	                <div className="header-top-title">
                        <p onClick={ ()=>{ navigate('/') } }>
                            씨네 망가
                        </p>
                    </div>
	            </div>
	            <div className="header-top-right">
	                <div className="top-user" onClick={ ()=>{ navigate('/login') } } style={ {cursor : 'pointer'} }>
	                    {/* <img className="top-user-img" src={ login }></img> */}
	                    <div className="top-user-btn">로그인</div>
	                </div>
	                <div className="top-user" onClick={ ()=>{ navigate('/join') } } style={ {cursor : 'pointer'} }>
	                    {/* <img className="top-user-img" src={ join }></img> */}
	                    <div className="top-user-btn">회원가입</div>
	                </div>
	                <div className="top-user" onClick={ ()=>{ navigate('/mypage') } } style={ {cursor : 'pointer'} }>
	                    {/* <img className="top-user-img" src={ mypage }></img> */}
	                    <div className="top-user-btn">마이페이지</div>
	                </div>
	            </div>
	        </div>
            <Navbar className="wrapper-header-category" data-bs-theme="light">
                <Container className="category-left">
                    <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/shop') } }>shop</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/ticketing') } }>ticketing</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/map') } }>카카오맵</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/map') } }>고객센터</Nav.Link>
                </Container>
                <div className="category-right">
	                <div className="search-box">
	                    <input id="searchBox" type="text" placeholder="영화 검색"></input>
	                </div>
	                <div className="search-btn">
	                    {/* <img id="searchBtn" src={search}></img> */}
	                </div>
	            </div>
            </Navbar>
            <div className="wrapper-body">
	            <div className="body-video">무튼 비디오임</div>
	            <div className="body-chart">
	                <div className="chart-header">
	                    <div className="chart-title"><strong>무비 차트</strong></div>
	                    <div className="chart-subtitle1">현재 상영작</div>
	                    <div className="chart-subtitle2">상영 예정작</div>
	                </div>
	                <div className="chart-body">div 추가해야댐</div>
	            </div>
	            <div className="body-store">
	                <div className="store-header">
	                    <div className="store-title"><strong>스토어</strong></div>
	                    <div className="store-subtitle1">푸드</div>
	                    <div className="store-subtitle2">굿즈</div>
	                </div>
	                <div className="store-body">div 추가해야댐</div>
	            </div>
	            <div className="body-temporary">
	                <div className="temporary-header">
	                    <div className="temporary-title"><strong>임시</strong></div>
	                    <div className="temporary-subtitle1">하부1</div>
	                    <div className="temporary-subtitle2">하부2</div>
	                </div>
	                <div className="temporary-body">div 추가해야댐</div>
	            </div>
	        </div>
	        <div className="wrapper-footer">@팀명 Corp.</div>
	    </div>   
    )
}

export default Main;