// 이름 목록
const names = ["지은", "건우", "기호", "형주", "재원", "현철", "영민", "재형", "민성", "혁영"];

// 팀 할당을 위한 빈 객체 배열 생성
let charas = names.map(name => ({ name: name, team: "" }));

// 팀 할당 함수
function assignTeams(charas) {
    let teamCount = { 1: 0, 2: 0 };
    const maxPerTeam = Math.ceil(charas.length / 2);

    charas.forEach(chara => {
        let team;
        do {
            team = Math.floor(Math.random() * 2) + 1;
        } while (teamCount[team] >= maxPerTeam);
        
        chara.team = team;
        teamCount[team]++;
    });
}

// 팀 할당 수행
assignTeams(charas);

// 결과 출력
console.log(charas);
