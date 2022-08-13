import Beer from "./Interfaces/Beer.interface"

export  const BEERS: Beer[] = [
    {
        id:1,
        name:'Buzz',
        first_brewed:'09/2007',
        desc:'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
        img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEXR-VlLKNGVmnbByG0Q_djmuammSczRlQzg&usqp=CAU',
        tips:'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
        abv:4.5
    },
    {
        id:2,
        name:'Trashy Blonde',
        first_brewed:'04/2008',
        desc:'A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.',
        img_url:'https://beergazetteer.com/assets/2014-08-12-trashy-blonde-by-brewdog-1.jpg',
        tips:'Be careful not to collect too much wort from the mash. Once the sugars are all washed out there are some very unpleasant grainy tasting compounds that can be extracted into the wort.',
        abv:4.1
    },
    {
        id:3,
        name:'Berliner Weisse With Yuzu - B-Sides',
        first_brewed:'11/2015',
        desc:'Japanese citrus fruit intensifies the sour nature of this German classic.',
        img_url:'http://cdn.shopify.com/s/files/1/0073/8689/0340/products/4A9A40633_1200x1200.png?v=1639030259',
        tips:'',
        abv:4.2
    }
]