m =
    {
        "objectID": 436603,
        "isHighlight": true,
        "accessionNumber": "1984.459.2",
        "accessionYear": "1984",
        "isPublicDo main": true,
        "primaryImage": "https://images.metmuseum.org/CRDImages/ep/original/DT503.jpg",
        "primaryImageSmall": "https://images.metmuseum.org/CRDImages/ep/web-large/DT503.jpg",
        "additionalImages": [],
        "constituents": [
            {
                "constituentID": 161968,
                "role": "Artist",
                "name": "Guercino (Giovanni Francesco Barbieri)",
                "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500021925",
                "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q334262",
                "gender": ""
            }
        ],
        "department": "European Paintings",
        "objectName": "Painting",
        "title": "Samson Captured by the Philistines",
        "culture": "",
        "period": "",
        "dynasty": "",
        "reign": "",
        "portfolio": "",
        "artistRole": "Artist",
        "artistPrefix": "",
        "artistDisplayName": "Guercino (Giovanni Francesco Barbieri)",
        "artistDisplayBio": "Italian, Cento 1591–1666 Bologna",
        "artistSuffix": "",
        "artistAlphaSort": "Guercino (Giovanni Francesco Barbieri)",
        "artistNationality": "Italian",
        "artistBeginDate": "1591",
        "artistEndDate": "1666",
        "artistGender": "",
        "artistWikidata_URL": "https://www.wikidata.org/wiki/Q334262",
        "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500021925",
        "objectDate": "1619",
        "objectBeginDate": 1619,
        "objectEndDate": 1619,
        "medium": "Oil on canvas",
        "dimensions": "75 1/4 x 93 1/4 in. (191.1 x 236.9 cm)",
        "measurements": [
            {
                "elementName": "Overall",
                "elementDescription": null,
                "elementMeasurements": {
                    "Height": 191.1,
                    "Width": 236.9
                }
            },
            {
                "elementName": "Frame",
                "elementDescription": null,
                "elementMeasurements": {
                    "Height": 241.93549,
                    "Width": 287.65558
                }
            },
            {
                "elementName": "Other",
                "elementDescription": "Picture + Frame (F.1984.459.2)",
                "elementMeasurements": {
                    "Weight": 84.36905
                }
            }
        ],
        "creditLine": "Gift of Mr. and Mrs. Charles Wrightsman, 1984",
        "geographyType": "",
        "city": "",
        "state": "",
        "county": "",
        "country": "",
        "region": "",
        "subregion": "",
        "locale": "",
        "locus": "",
        "excavation": "",
        "river": "",
        "classification": "Paintings",
        "rightsAndReproduction": "",
        "linkResource": "",
        "metadataDate": "2022-10-20T04:55:06.267Z",
        "repository": "Metropolitan Museum of Art, New York, NY",
        "objectURL": "https://www.metmuseum.org/art/collection/search/436603",
        "tags": [
            {
                "term": "Women",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
            },
            {
                "term": "Samson",
                "AAT_URL": "http://vocab.getty.edu/page/ia/901000362",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q214648"
            }
        ],
        "objectWikidata_URL": "https://www.wikidata.org/wiki/Q19911545",
        "isTimelineWork": true,
        "GalleryNumber": "601"
    }


s = `consider a painting with a title if: ${m.title}`

s += `made by the artist: ${m.artistDisplayName}`
// console.log(m.artistDisplayBio)


s += `The artist worked from ${m.artistBeginDate}`
// console.log(m.artistEndDate)

console.log(s)

// "artistGender": "",
// "artistWikidata_URL": "https://www.wikidata.org/wiki/Q334262",
// "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500021925",
//
// console.log(m.objectDate)
// console.log(m.objectBeginDate)
// console.log(m.objectEndDate)
// console.log(m.medium)
//
//
// console.log(m.title)
//
// console.log(m.artistDisplayName)
// console.log(m.artistDisplayBio)
//
//
// console.log(m.artistBeginDate)
// console.log(m.artistEndDate)
//
// // "artistGender": "",
//     // "artistWikidata_URL": "https://www.wikidata.org/wiki/Q334262",
//     // "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500021925",
//
// console.log(m.objectDate)
// console.log(m.objectBeginDate)
// console.log(m.objectEndDate)
// console.log(m.medium)

