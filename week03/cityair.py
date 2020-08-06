import requests  # requests 라이브러리 설치 필요

# requests 를 사용해 요청(Request)하기
response_data = requests.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
print(response_data)
print(response_data.text)  # 그냥 텍스트 스트링임.
# 응답(response) 데이터인 json을 쉽게 접근할 수 있게 만들어 city_air 에 담고
city_air = response_data.json()  # json parsing
print(city_air)
# 값을 출력
print(city_air['RealtimeCityAir']['row'][0]['NO2'])

gu_infos = city_air['RealtimeCityAir']['row']

for gu_info in gu_infos:
    print(gu_info['MSRSTE_NM'], gu_info['PM10'])


import requests

response_data = requests.get('http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99')
city_air = response_data.json()

rows = city_air['RealtimeCityAir']['row']

for row in rows:
    if row['PM10'] < 20:
        print(row['MSRSTE_NM'], row['PM10'])


