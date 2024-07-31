CREATE DATABASE movies default CHARACTER SET UTF8MB4;
use movies;
drop database movies;

-- 영화관
CREATE TABLE `cinema` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 상영관 key값 -- 
    `name` VARCHAR(64) NOT NULL, -- 상영관 이름 -- 
    `area` VARCHAR(32) NOT NULL, -- 상영관 위치 -- 
    `region` VARCHAR(32) NOT NULL, -- 상영관 세부위치 -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 상영관 세로열
CREATE TABLE `theaterLine` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 세로열 Key값 -- 
    `theaterNo` INT NOT NULL, -- 상영관 번호(cinema TABLE 외래키) -- 
    `line` TINYINT NOT NULL, -- 세로열 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 상영관 가로행
CREATE TABLE `theaterRow` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 가로행 Key값 -- 
    `theaterNo` INT NOT NULL, -- 상영관 번호(cinema TABLE 외래키) -- 
    `rowLabel` VARCHAR(16) NOT NULL, -- 가로행 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 상영관 스케줄
CREATE TABLE `schedule` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 스케쥴 Key값 -- 
    `movieNo` INT NOT NULL, -- 영화 번호 (movie TABLE 외래키) -- 
    `theaterNo` INT NOT NULL, -- 상영관 번호 ( theater TABLE 외래키 ) -- 
    `date` TIMESTAMP NOT NULL, -- 상영 날짜 -- 
    `start` TIMESTAMP NOT NULL, -- 상영 시간 -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 상영관
CREATE TABLE `theater` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 상영관 KEY값 -- 
    `cinemaNo` INT NOT NULL, -- 영화관 번호(cinema TABLE 외래키)  -- 
    `name` varchar(32) NOT NULL, -- 영화관 이름 -- 
    `dimension` varchar(16) NOT NULL, -- 영화관 종류 (2D,3D,IMAX) -- 
    `max` INT NOT NULL, -- 최대정원수 -- 
    `price` INT NOT NULL, -- 가격 -- 
    `state` INT NOT NULL, -- 상태 -- 
    `content` INT NOT NULL, -- 상영관 정보(1관,2관,3관 등등) -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 티켓
CREATE TABLE `ticket` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 티켓 KEY값 -- 
    `cinemaNo` INT NOT NULL, -- 영화관 번호( cinema TABLE 외래키 )  -- 
    `theaterNo` INT NOT NULL, -- 상영관 번호( theater TABLE 외래키 ) -- 
    `scheduleNo` INT NOT NULL, -- 스케줄 번호( schedule TABLE 외래키 ) -- 
    `theaterLineNo` INT NOT NULL, -- 상영관 가로열 변호 ( theaterLine TABLE 외래키 ) -- 
    `theaterRowNo` INT NOT NULL, -- 상영관 세로행 번호 ( theaterRow TABLE 외래키 ) -- 
    `memberNo` INT NOT NULL, -- 유저 번호 ( member TALBE 외래키 ) -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 할인코드
CREATE TABLE `saleCoupon` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 쿠폰 KEY값 -- 
    `name` VARCHAR(64) NOT NULL, -- 쿠폰명 -- 
    `startDate` DATETIME NOT NULL, -- 유효기간 시작일 -- 
    `endDate` DATETIME NOT NULL, -- 유효기간 끝나는날 -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP -- 생성 날짜 -- 
) ENGINE=InnoDB;

-- 할인쿠폰
CREATE TABLE `giftTicket` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 할인쿠폰 KEY값 -- 
    `giftTicketNo` VARCHAR(64) NOT NULL, -- 티켓코드(useTicket에서 코드값 가져옴) -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 관람권 사용
CREATE TABLE `useTicket` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 사용한 관람권 KEY값 -- 
    `content` VARCHAR(64) NOT NULL, -- 티켓코드 -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 상영관에 상영할 영화정보
CREATE TABLE `movie` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 영화 KEY값 -- 
    `title` VARCHAR(128) NOT NULL, -- 영화 제목 -- 
    `releaseDate` TIMESTAMP NOT NULL, -- 상영 시작일 -- 
    `deadLine` TIMESTAMP NOT NULL, -- 상영 종료일 -- 
    `runtime` INT NOT NULL, -- 상영 시간 -- 
    `poster` VARCHAR(256) NOT NULL, -- 포스터 URL -- 
    `category` VARCHAR(50) NOT NULL, -- 영화 장르 -- 
    `nation` VARCHAR(50) NOT NULL, -- 제작 국가 -- 
    `rating` VARCHAR(50) NOT NULL, -- 영화 심의등급 -- 
    `reviewNo` INT NOT NULL, -- 영화 리뷰(reveiw Table 외래키) -- 
    `content` TEXT NOT NULL, -- 영화 줄거리 -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 영화 리뷰
CREATE TABLE `review` (
    `no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 리뷰 KEY값 -- 
	`content` VARCHAR(50) NOT NULL, -- 리뷰 내용 -- 
    `grade` DOUBLE NOT NULL, -- 평점 -- 
    `like` INT NOT NULL, -- 추천여부 -- 
    `movieNo` INT NOT NULL, -- 영화 번호(movie Table 외래키) -- 
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 회원가입
CREATE TABLE `member` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 회원가입 KEY값 -- 
	`id` VARCHAR(16), -- id -- 
	`pw` VARCHAR(128), -- pw -- 
	`name` VARCHAR(30), -- 이름 -- 
	`nickname` VARCHAR(16), -- 닉네임 -- 
	`email` VARCHAR(64), -- 이메일 -- 
	`phone` VARCHAR(64), -- 핸드폰번호 -- 
	`birth` DATE, -- 생일 -- 
	`gender` VARCHAR(16), -- 성별 -- 
	`profile` BLOB, -- 마이페이지 정보 -- 
	`address` VARCHAR(64), -- 주소 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 결제정보
CREATE TABLE `payment` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 결제정보 KEY값 -- 
	`memberNo` INT NOT NULL, -- 유저 KEY값( member TABLE 외래키 ) -- 
	`foodNo` TINYINT, -- 음식 KEY값( food TABLE 외래키 ) -- 
	`setNo` TINYINT, -- 세트번호 KEY값( goodsSet TABLE 외래키 ) -- 
	`goodsNo` TINYINT, -- 굿즈 KEY값( goods TABLE 외래키 ) --
	`ticketNo` INT, -- 티켓 KEY값( ticket TALBE 외래키 ) -- 
    `price` INT, -- 전체가격 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

use movies;
-- 음식
CREATE TABLE `food` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 음식 KEY값 -- 
	`title` VARCHAR(255), -- 음식명 -- 
	`content` VARCHAR(255), -- 내용 -- 
	`price` INT NOT NULL, -- 가격 -- 
	`salePrice` INT, -- 할인가격 -- 
    `count` INT NOT NULL , -- 재고 -- 
    `img` TEXT, -- 음식 이미지 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;
drop table food;
drop table goods;
drop table goodsSet;
drop table storeBasket;

insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "고소 팝콘", "팝콘(M)1", '6000', '5500','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16932099670660.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "고소 팝콘", "팝콘(L)1", '8000', '7500','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/17169684033160.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "달콤 팝콘", "팝콘(M)1", '6500', '6000','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16932100345730.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "달콤 팝콘", "팝콘(L)1", '8500', '8000','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/17169691831430.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "탄산 음료", "음료(M)1", '2500', '2300','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16988126323700.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "탄산 음료", "음료(L)1", '3000', '2800','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16988138774790.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "아메리카노", "아메리카노(ICE)1", '4000', '3500','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16989243001120.jpg', NOW(), NOW() );
insert into food (title,content,price,salePrice,count,img,createdAt,updatedAt) VALUES ( "아메리카노", "아메리카노(HOT)1", '4000', '3500','999','https://img.cgv.co.kr/GiftStore/Product/Pc/Detail/16988142885670.jpg', NOW(), NOW() );



-- 굿즈(관람권 등)
CREATE TABLE `goods` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 굿즈 KEY값 -- 
	`title` VARCHAR(255), -- 굿즈명 -- 
	`content` VARCHAR(255), -- 내용 -- 
	`price` INT NOT NULL, -- 가격 -- 
	`salePrice` INT, -- 할인가격 -- 
    `count` INT NOT NULL , -- 재고 --
    `img` TEXT, -- 음식 이미지 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 음식,굿즈 세트 or 음식세트
CREATE TABLE `goodsSet` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 음식,굿즈 세트 KEY값 -- 
	`setNoOne` TINYINT NOT NULL, -- 세트번호 1 (food or goods TABLE 외래키) --
	`setNoTwo` TINYINT NOT NULL, -- 세트번호 2 (food or goods TABLE 외래키) --
    `setNoThree` TINYINT, -- 세트번호 3 (food or goods TABLE 외래키) --
    `setNoFour` TINYINT, -- 세트번호 4 (food or goods TABLE 외래키) --
	`price` INT NOT NULL,  -- 가격 -- 
	`salePrice` INT, -- 할인가격 -- 
    `count` INT NOT NULL , -- 재고 --  
    `img` TEXT, -- 음식 이미지 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 장바구니
CREATE TABLE `storeBasket` (
	`no` INT NOT NULL AUTO_INCREMENT PRIMARY KEY, -- 장바구니 KEY값 -- 
	`title` VARCHAR(255) NOT NULL, -- 장바구니 상품정보 ( 외래키로 가져올 예정 ) -- 
	`content` VARCHAR(255) NOT NULL, -- 장바구니 상품내용 -- 
	`price` INT NOT NULL, -- 장바구니 가격정보 -- 
    `salePrice` INT NOT NULL, -- 장바구니 할인가격정보 -- 
    `count` INT NOT NULL, -- 갯수 --  
	`memberNo` INT NOT NULL, -- 유저번호 ( member TABLE 외래키 ) -- 
	`foodNo` INT, -- 음식번호 ( food TABLE 외래키 ) -- 
	`setNo` INT, -- 세트번호 ( goodsSet TABLE 외래키 ) -- 
	`goodsNo` INT, -- 굿즈번호 ( goods TABLE 외래키 ) -- 
	`giftTicketNo` INT, -- 관람권번호 ( giftTicket TALBE 외래키 ) -- 
    `checkBox` BOOLEAN DEFAULT FALSE NOT NULL, -- 상품 선택 -- 
    `checkBoxAll` BOOLEAN DEFAULT FALSE, -- 상품 전체선택 -- 
    `img` TEXT, -- 음식 이미지 -- 
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 이 기능은 관리자 페이지에서 생성or삭제시 로그 남기기용 테이블				
CREATE TABLE `productLog` (				
	`no` INT AUTO_INCREMENT PRIMARY KEY, -- 상품 ID -- 			
	`productTitle` VARCHAR(100) NOT NULL, -- 상품 이름 -- 			
	`productContent` TEXT, -- 상품 설명 --
	`productState` TINYINT NOT NULL, -- 상품 상태 0이면 삭제 1이면 생성 --	
	`adminNo` VARCHAR(30), -- 상품을 추가한 관리자 ID --		
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 					
) ENGINE=InnoDB; 
				
-- 운영자				
CREATE TABLE `admin` (				
	`no` VARCHAR(30) PRIMARY KEY NOT NULL, -- 어드민 아이디 --	
	`adminPw`  VARCHAR(255) NOT NULL, -- 어드민 비밀번호 --				
	`adminState` INT NOT NULL, -- 어드민 아이디 상태 --				
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 		
) ENGINE=InnoDB;		
				
-- 운영자 접속 기록				
CREATE TABLE `adminLoginLog` (				
	`no` INT PRIMARY KEY AUTO_INCREMENT NOT NULL, -- 로그인 기록 키	 --
	`adminNo` VARCHAR(30) NOT NULL, -- 어드민 아이디 --
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 
) ENGINE=InnoDB;

-- 유저 문의 테이블	--				
CREATE TABLE `inquiry` (					
	`no` INT PRIMARY KEY AUTO_INCREMENT NOT NULL, -- 문의하기 키 --		
	`userNo` int , -- 문의한 유저 번호 --
	`userEmail` VARCHAR(30) NOT NULL, -- 유저 이메일 --	
	`inquiryCategory` VARCHAR(30) NOT NULL, -- 문의 카태고리 --		
	`inquiryDetails` text NOT NULL, -- 문의 내용 --
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 	
) ENGINE=InnoDB;				
					
-- 관리자 문의답변 테이블 --
CREATE TABLE `inquiryResponse` (					
	`no` INT PRIMARY KEY AUTO_INCREMENT NOT NULL, -- 문의 답변 키 --			
	`adminId` VARCHAR(30) NOT NULL, -- 답변한 어드민 아이디 --		
	`inquiryNo` INT NOT NULL, -- 문의 키값 (어떤 문의에 대답했는지) --	
	`inquiryResponseText` text NOT NULL, -- 답변 내용 --
	`createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 생성 날짜 -- 
    `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- 수정 날짜 -- 			
) ENGINE=InnoDB;				


INSERT INTO cinema (name, area, region, createdAt, updatedAt) VALUES ('씨네-망가', '서울', '강남', NOW(), NOW());

-- 아직 구현 안된 데이터
INSERT INTO schedule (movieNo, theaterNo, date, start, createdAt, updatedAt) 
VALUES (1, 1, '2024-07-20 10:00:00', '2024-07-20 10:00:00', NOW(), NOW());

-- 쿠폰
INSERT INTO salecoupon 
   (name, startDate, endDate, createdAt, updatedAt)
VALUES
   ('DreamTicketOffice', '2024-01-01 00:00:00', '9999-12-31 23:59:59', now(), now());

INSERT INTO theater (cinemaNo, name, dimension, max, price, state, content, createdAt, updatedAt) VALUES 
(1, '1관(일반)', '2D', 160, 15000, 1, 1, NOW(), NOW()),  -- 2D 1관(일반)
(1, '2관(리클라이너)', '2D', 64, 16000, 1, 2, NOW(), NOW()),   -- 2D 2관(리클라이너)
(1, 'IMAX관', 'IMAX LASER 2D', 720, 21000, 1, 3, NOW(), NOW()),  -- IMAX LASER 2D IMAX관
(1, '4DX관', 'ULTRA', 144, 19000, 1, 4, NOW(), NOW());  -- 4DX관

-- 2D 1관(일반)
INSERT INTO theaterRow (theaterNo, rowLabel, createdAt, updatedAt) VALUES 
(1, 'A', NOW(), NOW()), (1, 'B', NOW(), NOW()), (1, 'C', NOW(), NOW()), (1, 'D', NOW(), NOW()), 
(1, 'E', NOW(), NOW()), (1, 'F', NOW(), NOW()), (1, 'G', NOW(), NOW()), (1, 'H', NOW(), NOW()), 
(1, 'I', NOW(), NOW()), (1, 'J', NOW(), NOW());

-- 2D 2관(리클라이너)
INSERT INTO theaterRow (theaterNo, rowLabel, createdAt, updatedAt) VALUES 
(2, 'A', NOW(), NOW()), (2, 'B', NOW(), NOW()), (2, 'C', NOW(), NOW()), (2, 'D', NOW(), NOW()), 
(2, 'E', NOW(), NOW()), (2, 'F', NOW(), NOW()), (2, 'G', NOW(), NOW()), (2, 'H', NOW(), NOW());

-- IMAX LASER 2D IMAX관
INSERT INTO theaterRow (theaterNo, rowLabel, createdAt, updatedAt) VALUES 
(3, 'A', NOW(), NOW()), (3, 'B', NOW(), NOW()), (3, 'C', NOW(), NOW()), (3, 'D', NOW(), NOW()), 
(3, 'E', NOW(), NOW()), (3, 'F', NOW(), NOW()), (3, 'G', NOW(), NOW()), (3, 'H', NOW(), NOW()), 
(3, 'I', NOW(), NOW()), (3, 'J', NOW(), NOW()), (3, 'K', NOW(), NOW()), (3, 'L', NOW(), NOW()), 
(3, 'M', NOW(), NOW()), (3, 'N', NOW(), NOW()), (3, 'O', NOW(), NOW()), (3, 'P', NOW(), NOW());

-- 4DX관
INSERT INTO theaterRow (theaterNo, rowLabel, createdAt, updatedAt) VALUES 
(4, 'A', NOW(), NOW()), (4, 'B', NOW(), NOW()), (4, 'C', NOW(), NOW()), (4, 'D', NOW(), NOW()), 
(4, 'E', NOW(), NOW()), (4, 'F', NOW(), NOW()), (4, 'G', NOW(), NOW()), (4, 'H', NOW(), NOW()), 
(4, 'I', NOW(), NOW());

-- 2D 1관(일반)
INSERT INTO theaterLine (theaterNo, line, createdAt, updatedAt) VALUES 
(1, '1', NOW(), NOW()), (1, '2', NOW(), NOW()), (1, '3', NOW(), NOW()), (1, '4', NOW(), NOW()), 
(1, '5', NOW(), NOW()), (1, '6', NOW(), NOW()), (1, '7', NOW(), NOW()), (1, '8', NOW(), NOW()), 
(1, '9', NOW(), NOW()), (1, '10', NOW(), NOW()), (1, '11', NOW(), NOW()), (1, '12', NOW(), NOW()), 
(1, '13', NOW(), NOW()), (1, '14', NOW(), NOW()), (1, '15', NOW(), NOW()), (1, '16', NOW(), NOW());

-- 2D 2관(리클라이너)
INSERT INTO theaterLine (theaterNo, line, createdAt, updatedAt) VALUES 
(2, '1', NOW(), NOW()), (2, '2', NOW(), NOW()), (2, '3', NOW(), NOW()), (2, '4', NOW(), NOW()), 
(2, '5', NOW(), NOW()), (2, '6', NOW(), NOW()), (2, '7', NOW(), NOW()), (2, '8', NOW(), NOW());

-- IMAX LASER 2D IMAX관
INSERT INTO theaterLine (theaterNo, line, createdAt, updatedAt) VALUES 
(3, '1', NOW(), NOW()), (3, '2', NOW(), NOW()), (3, '3', NOW(), NOW()), (3, '4', NOW(), NOW()), 
(3, '5', NOW(), NOW()), (3, '6', NOW(), NOW()), (3, '7', NOW(), NOW()), (3, '8', NOW(), NOW()), 
(3, '9', NOW(), NOW()), (3, '10', NOW(), NOW()), (3, '11', NOW(), NOW()), (3, '12', NOW(), NOW()), 
(3, '13', NOW(), NOW()), (3, '14', NOW(), NOW()), (3, '15', NOW(), NOW()), (3, '16', NOW(), NOW()), 
(3, '17', NOW(), NOW()), (3, '18', NOW(), NOW()), (3, '19', NOW(), NOW()), (3, '20', NOW(), NOW()), 
(3, '21', NOW(), NOW()), (3, '22', NOW(), NOW()), (3, '23', NOW(), NOW()), (3, '24', NOW(), NOW()), 
(3, '25', NOW(), NOW()), (3, '26', NOW(), NOW()), (3, '27', NOW(), NOW()), (3, '28', NOW(), NOW()), 
(3, '29', NOW(), NOW()), (3, '30', NOW(), NOW()), (3, '31', NOW(), NOW()), (3, '32', NOW(), NOW()), 
(3, '33', NOW(), NOW()), (3, '34', NOW(), NOW()), (3, '35', NOW(), NOW()), (3, '36', NOW(), NOW()), 
(3, '37', NOW(), NOW()), (3, '38', NOW(), NOW()), (3, '39', NOW(), NOW()), (3, '40', NOW(), NOW()), 
(3, '41', NOW(), NOW()), (3, '42', NOW(), NOW()), (3, '43', NOW(), NOW()), (3, '44', NOW(), NOW()), 
(3, '45', NOW(), NOW());

-- 4DX관
INSERT INTO theaterLine (theaterNo, line, createdAt, updatedAt) VALUES 
(4, '1', NOW(), NOW()), (4, '2', NOW(), NOW()), (4, '3', NOW(), NOW()), (4, '4', NOW(), NOW()), 
(4, '5', NOW(), NOW()), (4, '6', NOW(), NOW()), (4, '7', NOW(), NOW()), (4, '8', NOW(), NOW()),
(4, '9', NOW(), NOW()), (4, '10', NOW(), NOW()), (4, '11', NOW(), NOW()), (4, '12', NOW(), NOW()), 
(4, '13', NOW(), NOW()), (4, '14', NOW(), NOW()), (4, '15', NOW(), NOW()), (4, '16', NOW(), NOW());