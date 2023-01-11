from urllib import urlopen
from bs4 import BeautifulSoup


# url = urlopen("https://en.wikipedia.org/wiki/List_of_The_Wire_characters")
# bsObj = BeautifulSoup(url.read())
# names = bsObj.find_all()

# wikipedia API?
# "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=James%20McNulty&format=json"

# gets all main character names unsorted, and grabs other crap too
def scraper():
    print("hello world")


url = urlopen("https://thewire.fandom.com/wiki/Characters")
bsObj = BeautifulSoup(url.read())
# need to go into the list of characters.
names = bsObj.find_all(attrs={"data-tracking": "custom-level-3"})
for name in names:
    print(name.text)

# gets names from wikipedia, but some headlines are seperators ex. officers:, detectives:, etc. 

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

