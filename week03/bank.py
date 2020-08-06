import requests
from bs4 import BeautifulSoup

# # 1

# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20180317', headers=headers)
# soup = BeautifulSoup(data.text, 'html.parser')
#
# movies = soup.select('#old_content > table > tbody > tr')
#
# for movie in movies:
#     a = movie.select_one('.title a')
#     if a is not None:
#         rank = movie.select_one('.ac img')['alt']
#         title = movie.select_one('.title a').text
#         star = movie.select_one('.point').text
#         print(rank, title, star)

# 2

# headers = {
#     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# data = requests.get('https://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo', headers=headers)
# soup = BeautifulSoup(data.text, 'html.parser')
#
# teams = soup.select('#regularTeamRecordList_table > tr')
#
# for team in teams:
#     rank = team.select_one('th').text
#     team = team.select_one('.tm span').text
#     print(rank, team)

# 3

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://sports.news.naver.com/kbaseball/record/index.nhn?category=kbo', headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

teams = soup.select('#regularTeamRecordList_table > tr')

for team in teams:
    rate = float(team.select_one('td:nth-child(7) > strong').text)
    if rate > 0.5:
        rank = team.select_one('th').text
        team = team.select_one('.tm span').text
        print(rank, team, rate)