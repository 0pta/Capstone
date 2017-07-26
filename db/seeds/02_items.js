exports.seed = function(knex) {
  return knex('items').del()
  .then(() => {
    return knex('items').insert(
      [
        {
          id: 1,
          category_id: '5',
          name: 'Shiny Sword',
          description: 'Kills: 13. All you need to know.',
          condition: 'Normal Wear',
          cost: 0,
          listed_price: 200,
          sold_price: 150,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          category_id: '6',
          name: 'Bag of Chips',
          description: 'These are the Lord\'s chips',
          condition: 'Unopened',
          cost: 10,
          listed_price: 30,
          sold_price: 12,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          category_id: '7',
          name: 'Licks',
          description: 'This is a service. Not sure I can sell services on here.',
          condition: 'Perfect',
          cost: 0,
          listed_price: 100,
          sold_price: 99,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          category_id: '7',
          name: 'More Licks',
          description: 'This is a service. Not sure I can sell services on here.',
          condition: 'Perfect',
          cost: 0,
          listed_price: 100,
          sold_price: 99,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          category_id: '1',
          name: 'Dining chairs',
          description_caption: 'Set of six cushion seat back dining chairs with covers',
          description: 'Set of six firm cushions for both seating and cushion back dining chairs. 4 with red removable and washable covers, and 2 with  sand beige removable washable covers. $150 or best offer. Lots of life left. No holds. See last picture for dimensions. All six chairs are identical in design with wooden legs just the covers are different.',
          condition: 'Normal Wear',
          cost: 20,
          listed_price: 150,
          sold_price: 120,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          category_id: '1',
          name: 'Patriotic cabinet',
          description_caption: 'Easy to move!!! Solid wood Captain America flag 🇺🇸 patriotic cabinet',
          description: 'Like new and easy to move SOLID WOOD and in excellent condition. This 4th of July patriotic red, white, and blue cabinet can be used as a side sofa table / accent table perfect for patriotic themed rooms, coastal nautical themed bedrooms as bedside cabinet high table, kids rooms for storing toys, decorative  piece to a patio/ porch or a countryside cottage for storing wine and beer.',
          condition: 'Like New',
          cost: 20,
          listed_price: 249,
          sold_price: 20,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          category_id: '1',
          name: 'Jewelry armoire',
          description_caption: 'Stunning vintage classic antique design cherry jewelry armoire',
          description: `If you are looking for a way to organize your large jewelry collection in style, this rich cherry jewelry armoire is the solution. Extremely rare and hard to find in Perfect condition (originally cost near $500). This large floor standing vanity jewelry armoire box has a distinct antique 1920's Victorian Jewelry Box design and fits a TON of precious jewels or silverware in your formal dining room. With its classy cherry finish this jewelry chest is perfect for storing and organizing rings, bracelets, barrettes, and necklaces. Lift the top to reveal a large mirror, perfect for accessorizing. The top section swings open 2 front doors (rare space saving design which is hard to find in newer models that open side ways) to reveal 6 hooks for holding multiple necklaces or bracelets. Behind the cabinet doors is 4 storage felt lined drawers with assorted dividers for all of your miscellaneous jewelry. Along the bottom, two drawers provide ample storage room for larger items.` ,
          condition: 'Perfect',
          cost: 50,
          value: 500,
          listed_price: 250,
          sold_price: 120,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          category_id: '1',
          name: 'Decorative mirror',
          description_caption: 'Decorative extra large ornate gold gilded mirror',
          description: `DRESSER ALREADY SOLD ...Selling ONLY mirror; Easy to move as this fits into a compact car back seat. Even more stunning than these pics that don't do it justice!!! This grand wood framed ornately decorative beveled extra large dresser top vanity gold mirror is a statement piece to any room. Measures 46x36x2.5 inches. Comes with hardware in back for wall hanging both horizontally and vertically. This would make a beautiful addition to any interior finishes gallery, bridal boutique, French bakery cafes, consignment shops, shabby chic interior Decour themes with its antique beaded pearly frame feel. Use it in a studio to open up the room and create the illusion of larger space!!! Mirror is in flawless condition. $500 or best offer.`,
          condition: 'Flawless',
          cost: 40,
          value: 0,
          listed_price: 400,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          category_id: '1',
          name: 'Silverware chest',
          description_caption: 'Antique solid mahogany wood Mackey silverware chest',
          description: `Mackay Silver Chest is ideal for storing dining keepsakes. Hunter, anti-tarnish fabric keeps your flatware in perfect condition. Wood and veneer furnishing has an estate mahogany finish, cabriole legs, and antique brass hardware. Lid with locking hinges opens to a slotted section.

          • Stores silverware & table linens
          • Anti-tarnish fabric lining
          • Wooden with an estate mahogany finish

          Can also be used for storing jewelry like necklaces, earrings, bracelets and other valuables. Works as a jewelry armoire to make a beautiful addition to your dressing room.

          Or use it as a statement piece in your living room to hold keys and other knickknacks.`,
          condition: 'Perfect',
          cost: 14,
          value: 0,
          listed_price: 149,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          category_id: '1',
          name: 'IKEA sofa cover',
          description_caption: 'Brand-new in sealed box IKEA white sofa cover',
          description: `Brand-new in sealed box IKEA  ektorp sofa couch seat slip cover. Sells new at the store for $149 plus tax but you can have ours for $100 firm on price. Sofa not included and not for sale.`,
          condition: 'Brand-new',
          cost: 14,
          value: 149,
          listed_price: 100,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          category_id: '13',
          name: `"Dancing" framed art`,
          description_caption: `"Dancing" framed wall art Jack Viterianno`,
          description: `2 Flawless condition Large wall mount wall art Jack Vitoriano Dancing Butler In The Rain Picture Painting Professionally custom Black Framed By Aaron Brothers. A classic painting perfect for staging homes or entryway Decour. A romantic take on a lady in a red dress with her dancing partner. Realtors this is a fantastic piece to create a classic ambience in a show home. The second is also from same artist and shows lady in red. Both are same size. Asking $100 for both or $69 each`,
          condition: 'Flawless',
          cost: 10,
          value: 0,
          listed_price: 69,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          category_id: '8',
          name: `Anthropologie necklace`,
          description_caption: `Anthropologie vintage Swarovski crystal necklace`,
          description: `Traditional necklaces such as a this unwavering take on a deco classic, this crystal necklace is aglow with vintage charm ...a lovely way to add a bit of old-fashioned elegance. Collar necklaces are a huge trend and can be transformed from everyday wear to wedding day glamorous. This ornate vintage necklaces can completely transform your whole look with its 18"L with 3" extender chain, 0.75"W Silver-plated pewter, brass, Swarovski crystals that sparkle more than my camera can capture.`,
          condition: 'Excellent',
          cost: 10,
          value: 0,
          listed_price: 70,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          category_id: '1',
          name: `Sofa table`,
          description_caption: `Black console accent entry way sofa table`,
          description: `Traditional necklaces such as a this unwavering take on a deco classic, this crystal necklace is aglow with vintage charm ...a lovely way to add a bit of old-fashioned elegance. Collar necklaces are a huge trend and can be transformed from everyday wear to wedding day glamorous. This ornate vintage necklaces can completely transform your whole look with its 18"L with 3" extender chain, 0.75"W Silver-plated pewter, brass, Swarovski crystals that sparkle more than my camera can capture.`,
          condition: 'Excellent',
          cost: 12,
          value: 0,
          listed_price: 100,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 14,
          category_id: '1',
          name: `Drexel desk`,
          description_caption: `Gorgeous Drexel solid wood desk `,
          description: `Easy to move solid wood desk that can be taken in an SUV or minivan as it's only 48" wide x 20" deep x 30" tall . Stunning quality made by Drexel circa 1960 Plus leather wrapped chair on coaster wheel rollers. This is a beautiful antique vanity twin pedestal desk that boasts endless charm, dovetailed drawers with complete original hardware. Drexel has been making furniture since 1903 and their craftsmanship still shows in each piece they make.

          Versatile piece for any room in the home as a desk in your bedroom; a desk in your office, a bathroom vanity, or just as an accent piece anywhere in your house. Gorgeous style with great functionality. This is truly a furniture lover's dream!

          Creator: Drexel Heritage (Manufacturer)
          In The Style of: Shabby Chic
          Place of Origin: United States
          Date of Manufacture: 1960s
          Period: 20th Century
          Materials and Techniques: Wood, Brass
          Condition: Good vintage condition
          Measurements: 48" wide x 20" deep x 30" tall
          Can be refinished to look like the first picture shown if you're into do it yourself projects and used as a bathroom vanity with the perfect counter top  for drop in sink.`,
          condition: 'Good vintage',
          cost: 25,
          value: 0,
          listed_price: 250,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 15,
          category_id: '10',
          name: `Checkered jacket`,
          description_caption: `Warm gray and white pea coat`,
          description: `Stay warm in this gorgeous winter coat with belt tie and double breasted button down. This is stunning  and comes with high collar closure and split fan back with button detail on cuffs and back slit. One of the buttons on the chest fell off (exactly as pictured) but it doesn't affect functionality and it's barely noticeable since the coat looks like it's designed as a single breasted asymmetrical button up. Otherwise in perfect condition. Price is firm. No reductions. Perfect for Valentines`,
          condition: 'Excellent',
          cost: 50,
          value: 0,
          listed_price: 100,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 16,
          category_id: '12',
          name: `Hunter boots`,
          description_caption: `Tiffany blue hunter tall boots`,
          description: `LIKE NEW (worn for pics then put away) Hunter original MINT color tall Wellie boots for ladies (not kids size). These are the HIGHLY SOUGHT OUT, SOLD OUT and coveted TIFFANY BLUE. Some mistakenly sell PALE MINT which is a much lighter version of the original MINT and NOT even near "Tiffany Blue". These are authentic MINT purchased directly from Hunter (I have the receipt) and will ship with the original box. Price is firm as these recently sold in kids size 7 for $250 on this site.`,
          condition: 'Excellent',
          cost: 100,
          value: 0,
          listed_price: 300,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 17,
          category_id: '10',
          name: `Trench jacket`,
          description_caption: `✨NEW✨Red classic trench jacket & Belt`,
          description: `Red classic trench jacket & Belt. Fits as a small to medium with the adjustable belt. Comes with pockets on each side and double breasted pea coat with belted button details at cuffs. Beautiful ruffles by the notch lapel collar and flirty cape tie back detail. NOT a Kate Spade but tagged for the Romantic interior lining of roses gives it that feel. Got this South jacket from local boutique.`,
          condition: 'New',
          cost: 30,
          value: 0,
          listed_price: 150,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 18,
          category_id: '10',
          name: `Long gray dress coat`,
          description_caption: `Gray anthropologie long hood dress coat`,
          description: `Beautiful size 2 hooded toggle pea coat by Elevenses.  Originally $268 from Anthropologie. Look fashion forward in this trench coat style hooded pea coat with toggle closures and faux fur trim on hood. A nice lightweight but warm gray (no itch) wool coat for the winter with satin lining. Fur wrist cuffs not included but you will get a pair of faux fur gloves for free with this... it's a perfect compliment. Price is firm as this was originally $268 ...no reductions. Perfect for Valentines`,
          condition: 'Excellent',
          cost: 30,
          value: 0,
          listed_price: 150,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 19,
          category_id: '10',
          name: `Anthropology dress coat`,
          description_caption: `Anthropology black size small dress coat`,
          description: `✨NEW✨ Anthropologie classic black  dress Pea Coats by Tulle for classy ladies. In pristine condition. This tailored winter coat features tilt pockets, buttons down the front and on cuffs and belted in back for fitted look in small that fits True to Size with a bust size of 36 inches, waist 30 inches and length 33 inches. Nice sliming fit for a light weight wool (no itch) blend fully lined walking coat. Great year-round spring summer fall winter jacket. Perfect for layering with just enough wiggle room.`,
          condition: 'New',
          cost: 15,
          value: 0,
          listed_price: 150,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 20,
          category_id: '10',
          name: `H&M white skirt`,
          description_caption: `H&M SOLD OUT white box pleats lace midi skirt`,
          description: `✨NEW✨ Anthropologie classic black  dress Pea Coats by Tulle for classy ladies. In pristine condition. This tailored winter coat features tilt pockets, buttons down the front and on cuffs and belted in back for fitted look in small that fits True to Size with a bust size of 36 inches, waist 30 inches and length 33 inches. Nice sliming fit for a light weight wool (no itch) blend fully lined walking coat. Great year-round spring summer fall winter jacket. Perfect for layering with just enough wiggle room.`,
          condition: 'New',
          cost: 7,
          value: 0,
          listed_price: 50,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 21,
          category_id: '8',
          name: `Engagement ring`,
          description_caption: `Rose gold morganite engagement ring with band set`,
          description: `This is a beautiful four prong 14 karat gold and Rosegold cushion cut morganite pink stone with lifetime diamond warrantee from Fred Meyer jewelers.`,
          condition: 'Excellent',
          cost: 0,
          value: 0,
          listed_price: 700,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 22,
          category_id: '10',
          name: `Prana parka jacket`,
          description_caption: `✨NEW✨ Prana quilted hooded Parka jacket`,
          description: `Prana lightweight quilted off white hood coat. Let your inner diva take the stage in a long winter white Ivory diamond quilted puffer and sherpa lined jacket with an oversized hood. Water and wrinkle resistance equip this prAna Hooded jacket. A nice light weight jacket with sherpa lining and dual closure with zip front and snap button placket and cuffs. Ribbed side panels and Vertical pockets. Open to reasonable offers`,
          condition: 'New',
          cost: 20,
          value: 0,
          listed_price: 150,
          sold_price: 0,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
    )
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
    )
  })
}
