function localChange(e) {
	var local_1 = ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];
	var local_2 = ["가평군", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "양평군", "여주시", "연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "하남시", "화성시", "양주시", "포천시" ];
	var local_3 = ["강화군", "계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "웅진군", "중구"];
	var local_4 = ["강서구", "금정구", "기장군", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"];
	var local_5 = ["남구", "동구", "북구", "울주군", "중구"];
	var local_6 = ["거제시", "거창군", "고성군", "김해시", "남해군", "밀양시", "사천시", "산청군", "양산시", "의령군", "진주시", "창녕군", "창원시", "통영시", "하동군", "함안군", "함양군", "합청군"];
	var local_7 = ["남구", "달서구", "달성군", "동구", "북구", "서구", "수성구", "중구"];
	var local_8 = ["경산시", "경주시", "고령군", "구미시", "군위군", "김천시", "문경시", "봉화군", "상주시", "성주군", "안동시", "영덕군", "영양군", "영주시", "영천시", "예천군", "울릉군", "울진군", "의성군", "청도군", "청송군", "칠곡군", "포항시"];
	var local_9 = ["광산구", "남구", "동구", "북구", "서구"];
	var local_10 = ["강진군", "고흥군", "곡성군", "광양시", "구례군", "나주시", "담양군", "목포시", "무안군", "보성군", "순천시", "신안군", "여수시", "영광군", "영암군", "완도군", "장성군", "장흥군", "진도군", "함평군", "해남군", "화순군"];
	var local_11 = ["고창군", "군산시", "김제시", "남원시", "무주군", "부안군", "순창군", "완주군", "익산시", "임실군", "장수군", "전주시", "정읍시", "진안군"];
	var local_12 = ["대덕구", "동구", "서구", "유성구", "중구"];
	var local_13 = ["공주시", "금산군", "논산시", "당진시", "보령시", "부여군", "서산시", "서천군", "아산시", "계룡시", "예산군", "천안시", "청양군", "태안군", "홍성군"];
	var local_14 = ["괴산군", "단양군", "보은군", "영동군", "옥천군", "음성군", "제천시", "진천군", "증평군", "청주시", "충주시"];
	var local_15 = ["강릉시", "고성군", "동해시", "삼척시", "속초시", "양구근", "양양군", "영월군", "원주시", "인제군", "정선군", "철원군", "춘천시", "태백시", "평창군", "홍청군", "화천군", "횡성군"];
	var local_16 = ["서귀포시", "제주시"];
	var local_17 = ["세종시"];
	
	var target = document.getElementById("local2");
	
	if(e.value == "서울"){
		var local = local_1;
	} else if(e.value == "경기") {
		var local = local_2;
	} else if(e.value == "인천") {
		var local = local_3;
	} else if(e.value == "부산") {
		var local = local_4;
	} else if(e.value == "울산") {
		var local = local_5;
	} else if(e.value == "경남") {
		var local = local_6;
	} else if(e.value == "대구") {
		var local = local_7;
	} else if(e.value == "경북") {
		var local = local_8;
	} else if(e.value == "광주") {
		var local = local_9;
	} else if(e.value == "전남") {
		var local = local_10;
	} else if(e.value == "전북") {
		var local = local_11;
	} else if(e.value == "대전") {
		var local = local_12;
	} else if(e.value == "충남") {
		var local = local_13;
	} else if(e.value == "충북") {
		var local = local_14;
	} else if(e.value == "강원") {
		var local = local_15;
	} else if(e.value == "제주") {
		var local = local_16;
	} else if(e.value == "세종") {
		var local = local_17;
	}
	
	target.options.length = 0;
	
	for ( x in local ) {
		var opt = document.createElement("option");
		opt.value = local[x];
		opt.innerHTML = local[x];
		target.appendChild(opt);
	}
}