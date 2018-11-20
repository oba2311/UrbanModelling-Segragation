import sys
sys.path.insert(0, "../wikiScraping/wikiScrap")

from wikiScrap import wikitablescrape.py

wikitablescrape.scrape(
    url="https://www.wikiwand.com/he/%D7%99%D7%A8%D7%95%D7%A9%D7%9C%D7%99%D7%9D",
    output_name="Jerusalem")
