from urllib.request import urlopen
from bs4 import BeautifulSoup

# getting all main character names, not alphabetical, not grouped, and grabbing other crap too

# url = urlopen("https://thewire.fandom.com/wiki/Characters")
# bsObj = BeautifulSoup(url.read())
# # need to go into the list of characters.
# names = bsObj.find_all(attrs={"data-tracking": "custom-level-3"})
# for name in names:
#     print(name.text)


# getting names  from wikipedia, but some of the headlines are actually seperators with no distintion ex. officers, detectives, etc. 

# url = urlopen("https://en.wikipedia.org/wiki/Police_of_The_Wire")
# bsObj = BeautifulSoup(url.read())
# names = bsObj.find_all("span", "mw-headline")
# for name in names: 
#     print(name.text)

# url = urlopen("https://www.hbo.com/the-wire/cast-and-crew")
# bsObj = BeautifulSoup(url.read())
# pictures = bsObj.find_all("div", "components/ThumbnailWithText--container")

# Can get pictures and use alt text to get pictures and names for all main characters on HBO, the side characters will be the issue though

# for picture in pictures:
#     image = picture.img.get('src')
#     name = picture.span.text
#     print(name,"\n","https://www.hbo.com" + image,"\n\n")


# 1. get the paragraph with all the names in it.
# 2. get the program to open another page, using the href redirect on the link. dynamically build the url from that data
# 3. find and download the mainline picture of the character.

