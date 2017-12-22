// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Beautiful Snow",
  author: "Unknown",
  layout: "poem",
  content: "\n  Oh! the snow, the beautiful snow,\n  Filling the sky and the earth below;\n  Over the house-tops, over the street,\n  Over the heads of the people you meet;\n  Dancing,\n  Flirting,\n  Skimming along.\n  Beautiful snow! it can do nothing wrong;\n  Flying to kiss a fair lady’s cheek:\n  Clinging to lips in a frolicsome freak,\n  Beautiful snow, from the heavens above,\n  \n    Pure as an angel and fickle as love!\n  \n  Oh! the snow, the beautiful snow!\n  How the flakes gather and laugh as they go!\n  Whirling about in its maddening fun,\n  It plays in its glee with every one,\n  Chasing,\n  Laughing,\n  Hurrying by.\n  It lights up the face and it sparkles the eye;\n  And even the dogs with a bark and a bound,\n  Snap at the crystals that eddy around.\n  The town is alive and its heart in a glow,\n  \n    To welcome the coming of beautiful snow.\n  \n  How the wild crowd goes swaying along,\n  Hailing each other with humor and song;\n  How the gay sledges like meteors flash by—\n  Bright for a moment, then lost to the eye,\n  Ringing,\n  Swinging,\n  Dashing they go.\n  Over the crest of the beautiful snow,\n  Snow so pure when it falls from the sky,\n  To be trampled in mud by the crowd rushing by;\n  To be trampled and tracked by the thousands of feet\n  \n    Till it blends with the filth in the horrible street.\n  \n  Once I was pure as the snow—but I fell;\n  Fell, like the snow-flakes, from heaven—to hell!\n  Fell, to be trampled as the filth of the street;\n  Fell, to be scoffed, to be spit on and beat,\n  Pleading,\n  Cursing,\n  Dreading to die\n  Selling my soul to whoever would buy,\n  Dealing in shame for a morsel of bread,\n  Hating the living and fearing the dead.\n  Merciful God! have I fallen so low?\n  \n    And yet I was once like this beautiful snow!\n  \n  Once I was fair as the beautiful snow,\n  With an eye like its crystals, a heart like its glow;\n  Once I was loved for my innocent grace—\n  Flattered and sought for the charms of my face,\n  Father,\n  Mother,\n  Sisters all,\n  God and myself, I have lost by my fall.\n  The veriest wretch that goes shivering by\n  Will take a wide sweep, lest I wander too nigh,\n  For of all that is on or about me, I know,\n  \n    There is nothing that’s pure but the beautiful snow.\n  \n  How strange it should be that this beautiful snow\n  Should fall on a sinner with nowhere to go!\n  How strange it would be, when the night comes again,\n  If the snow and the ice struck my desperate brain!\n  Fainting,\n  Freezing,\n  Dying alone!\n  Too wicked for prayer, too weak for my moan\n  To be heard in the crash of this crazy town.\n  Gone mad in their joy at the snow coming down,\n  To lie and to die in my terrible wo,\n  With a bed and a shroud of beautiful snow!\n\n\n",
  id: 0
});
index.addDoc({
  title: "Excelsior",
  author: "Henry W[adsworth] Longfellow",
  layout: "poem",
  content: "\n  The shades of night were falling fast,\n  As through an Alpine village passed\n  A youth who bore, ‘mid snow and ice,\n  A banner with the strange device.\n  \n    Excelsior!\n  \n  His brow was sad, his eye beneath,\n  Flashed like a falchion from its sheath;\n  And like a silver clarion rung\n  The accents of that unknown tongue,\n  \n    Excelsior!\n  \n  In happy homes he saw the light\n  Of household fires gleam warm and bright\n  Above, the spectral glaciers shone,\n  And from his lips escaped a groan,\n  \n    Excelsior!\n  \n  “Try not the Pass!” the old man said;\n  “Dark lowers the tempest overhead,\n  The roaring torrent is deep and wide!”\n  And loud that clarion voice replied\n  \n    Excelsior!\n  \n  “Oh stay,” the maiden said, “and rest\n  Thy weary head upon this breast!”\n  A tear stood in his bright blue eye,\n  But still he answered, with a sigh,\n  \n    Excelsior!\n  \n  “Beware the pine tree’s withered branch!\n  Beware the awful avalanche!”\n  This was the peasant’s last good night,\n  A voice replied, far up the hight,\n  \n    Excelsior!\n  \n  At break of day, as heavenward\n  The pious monks of Saint Bernard\n  Uttered the oft repeated prayer,\n  A voice cried through the startled air\n  \n    Excelsior!\n  \n  A traveler, by the faithful hound,\n  Half buried in the snow was found,\n  Still grasping in his hand of ice\n  That banner with the strange device\n  \n    Excelsior!\n  \n  There in the twilight cold and gray,\n  Lifeless but beautiful, he lay,\n  And from the sky, serene and far,\n  A voice fell, like a falling star!\n  Excelsior!\n\n\n",
  id: 1
});
index.addDoc({
  title: "The Children",
  author: "The Village Schoolmaster (Charles M. Dickinson)",
  layout: "poem",
  content: "\n  When the lessons and tasks are all ended,\n  And the school for the day is dismissed,\n  The little ones gather around me\n  To bid me good night and be kissed;\n  O! the little white arms that encircle\n  My neck, in their tender embrace,\n  O! the smiles that are halos of heaven,\n  \n    Shedding sunshine of love on my face.\n  \n  And when they are gone, I sit dreaming\n  Of my childhood, too lovely to last!\n  Of love that my heart will remember\n  While it wakes to the pulse of the past\n  Ere the world and its wickedness made me\n  A partner of sorrow and sin;\n  When the glory of God was about me,\n  \n    And the glory of gladness within.\n  \n  O! my heart grows as weak as a woman’s,\n  And the fount of my feelings will flow,\n  When I think of the paths deep and stony,\n  Where the feet of the dear ones must go;\n  Of the mountains of sin hanging o’er them—\n  Of the tempests of Fate blowing wild,\n  O! there’s nothing on earth half so holy,\n  \n    As the innocent heart of a child!\n  \n  They are idols of hearts and of households\n  They are angels of God in disguise;\n  His sunlight still sleeps in their tresses;\n  His glory still gleams in their eyes;\n  O! those truants from home and from heaven,\n  They have made me more manly and mild;\n  And I know, now, how Jesus could liken\n  \n    The kingdom of God to a child.\n  \n  I ask not a life for the dear one\n  All radiant, as others have done,\n  But that life may have just enough shadow\n  To temper the glare of the sun;\n  I would pray God to guard them from evil,\n  But my prayers would bound back to myself.\n  Ah! a seraph may pray for a sinner,\n  \n    But a sinner must pray for himself.\n  \n  The twig is so easily bended\n  I have banished the rule and the rod;\n  I have taught them the goodness of knowledge\n  They have taught e the goodness of God;\n  My heart is a dungeon of darkness\n  Where I shut the for breaking a rule,\n  My frown is sufficient correction,\n  \n    My love is the law of the school.\n  \n  I shall leave the old house in the autumn,\n  To traverse its threshhold no more;\n  Ah! how shall I sigh for the dear ones\n  That meet me each morn at the door!\n  I shall miss the “good-nights,” and the kisses,\n  And the gush of their innocent glee,\n  The group on the green, and the flowers\n  \n    That are brought every morning for me.\n  \n  I shall miss them at morn and at eve—\n  Their song in the school and the street;\n  I shall miss the low hum of their voices,\n  And the tramp of their delicate feet.\n  When the lessons of life are all ended,\n  And death says, “The school is dismissed!”\n  May the little ones gather around me,\n  To bid me good-night and be kissed.\n\n\n\n",
  id: 2
});
index.addDoc({
  title: "The Golden Side",
  author: "(Mrs. M[ary]. A[nn]. Kidder)",
  layout: "poem",
  content: "\n  There is many a rest in the road of life,\n  If only we would stop to take it;\n  And many a tone from the better land,\n  If the querulous heart would make it!\n  To the sunny soul, that is full of hope,\n  And whose beautiful trust ne’er faileth,\n  The grass is green and the flowers bright,\n  \n    Though the wintry storm prevaileth.\n  \n  Better to hope though the clouds hang low,\n  And to keep the eye still lifted;\n  For the sweet blue sky will soon peep through,\n  When the ominous clouds are rifted!\n  There was never a night without a day,\n  Or an evening without a morning;\n  And the darkest hour, as the proverb goes,\n  \n    Is the hour before the dawning.\n  \n  There is many a gem in the path of life,\n  Which we pass in our idle pleasure,\n  That is richer far than the jeweled crown,\n  Or the miser’s hoarded treasure;\n  It may be the love of a little child,\n  Or a mother’s prayers to Heaven,\n  Or a beggar’s grateful thanks\n  \n    For a cup of water given.\n  \n  Better to weave in the web of life\n  A bright and golden filling\n  And to do God’s will with a ready heart,\n  And hands that are swift and willing,\n  Than to snap the delicate minute, threads\n  Of our curious lives asunder;\n  And then blame Heaven for the tangled ends,\n  And sit and grieve and wonder.\n\n\n\n",
  id: 3
});
index.addDoc({
  title: "Tired Mothers",
  author: "Unknown",
  layout: "poem",
  content: "\n  A little elbow leans upon your knee,\n  Your tired knee, that has so much to bear;\n  A child’s dear eyes are looking lovingly\n  From underneath a thatch of tangled hair.\n  Perhaps you do not heed the velvet touch\n  Of warm, moist fingers, folding yours so tight;—\n  You do not prize this blessing over-much,\n  \n    You almost are too tired to pray tonight.\n  \n  But it is blessedness! A year ago\n  I did not see it as I do today,—\n  We are so dull and thankless; and too slow\n  To catch the sunshine till it slips away.\n  And now it seems surpassing strange to me,\n  That, while I wore the badge of mother-hood,\n  I did not kiss more oft, and tenderly,\n  \n    The little child that brought me only good.\n  \n  And if, some night when you sit down to rest,\n  You miss this elbow from your tired knee;\n  This restless, curling head from off your breast,\n  This lisping tongue that chatters constantly;\n  If from your own the dimpled hands had slipped,\n  And ne’er would nestle in your palm again;\n  If the white feet into their grave had tripped,\n  \n    I could not blame you for your heart-ache then!\n  \n  I wonder that mothers ever fret,\n  At little children clinging to their gown;\n  Or that the foot-prints, when the days are wet,\n  Are ever black enough to make them frown.\n  If I could find a little muddy boot,\n  Or cap, or jacket, on my chamber floor;\n  If I could kiss a rosy, restless foot,\n  \n    And hear its patter in my home once more;\n  \n  If I could mend a broken cart today,\n  Tomorrow make a kite, to reach the sky—\n  There is no woman in God’s world could say\n  She was more blissfully content than I.\n  But ah! the dainty pillow next my own\n  Is never rumpled by a shining head;—\n  My singing birdling from its nest has flown;\n  The little boy I used to kiss is dead!\n\n—From the Aldine for September.\n\n\n",
  id: 4
});
index.addDoc({
  title: "A Woman's Answer to a Man's Question",
  author: "Lena Lathrop",
  layout: "poem",
  content: "\n  Do you know you have asked for the costliest thing\n  Ever made by the hand above?\n  A woman’s heart and a woman’s life—\n  \n    And a woman’s wonderful love?\n  \n  Do you know you have asked for the priceless thing\n  As a child might ask for a toy?\n  Demanding what others have died to win,\n  \n    With the reckless dash of a boy?\n  \n  You have written my lesson of duty out—\n  Man-like you have questioned me;\n  Now stand at the bar of woman’s soul,\n  \n    Until I shall question thee.\n  \n  You require your mutton shall be always hot,\n  Your socks and shirts be whole;\n  I require your heart to be true as a God’s stars,\n  \n    And pure as Heaven your soul.\n  \n  You require a cook for your mutton and beef,\n  I require a far greater thing;\n  A seamstress you’re wanting for sock and for shirts,\n  \n    I look for a man and a king—\n  \n  A king for the beautiful realm called home,\n  And a man that the Maker, God\n  Shall look upon as He did on the first,\n  \n    And say, “It is very good.”\n  \n  I am fair and young, but the rose will fade,\n  From my soft, young cheek one day—\n  Will you love me then ‘mid the falling leaves\n  \n    As you did ‘mong the blooms of May?\n  \n  Is your heart an ocean so strong and deep\n  I may launch my all on its tide!\n  A loving woman finds heaven or hell\n  \n    On the day she is made a bride.\n  \n  I require all things that are good and true,\n  All things that a man should be;\n  If you give this all, I would stake my life\n  \n    To be all you demand of me.\n  \n  If you cannot be this—a laundress and cook\n  You can hire, with little to pay;\n  But a woman’s heart and a woman’s life\n  Are not to be won that way.\n\n\n",
  id: 5
});
index.addDoc({
  title: "The Inquiry",
  author: ["Charles Mackay"],
  layout: "poem",
  content: "\n  Tell me, ye winged winds,\n  That rounds my pathway roar,\n  Do ye know some spot\n  Where mortals weep no more?\n  Some lone and pleasant dell,\n  Some valley in the west,\n  Where, free from toil and pain,\n  The weary soul may rest?\n  The loud wind dwindled to a whisper low,\n  \n    And sighed for pity as it answered “No!”\n  \n  Tell me, thou mighty deep,\n  Whose billows round me play,\n  Know’st thou some favored spot,\n  Some island far away,\n  Where weary man may find\n  The bliss for which he sighs,\n  Where sorrow never lives,\n  And friendship never dies?\n  The loud waves rolled in perpetual flow,\n  \n    Stopped for a while, and sighed, to answer “No!”\n  \n  And thou, serenest moon,\n  That with such holy face,\n  Dost look upon the earth\n  Asleep in night’s embrace,\n  Tell me, in all thy round,\n  Has thou not seen some spot,\n  Where miserable man,\n  Might find a happier lot.\n  Behind a cloud the moon withdrew in wo,\n  \n    And a voice sweet, but sad, responded “No!”\n  \n  Tell me my secret soul,\n  Oh! tell me, Hope and Faith,\n  Is there no resting place\n  From sorrow sin and death;\n  Is there no happy spot\n  Where mortals may be bless’d,\n  Where grief may find a balm,\n  And weariness a rest?\n  Faith, Hope, and love, best boons to mortals given,\n  Wav’d their bright wings, and whispered, “Yes in Heaven.”\n\n\n\n\n“A Parody” by An Old Bachelor\nfrom The Grand River Times (Grand Haven, Michigan), 4 March 1857\n\n\n  Tell me, ye winged winds,\n  That rounds my pathway roar,\n  Do ye not know some spot\n  Where women fret no more?\n  Some lone and pleasant dell,\n  Some “holler in the ground,”\n  Where babies never yell,\n  And cradles are not found?\n  The loud wind blew the snow into my face,\n  \n    And snickered as it answered—”Nary place.”\n  \n  Tell me, thou misty deep,\n  Whose billows round me play,\n  Know’st thou some favored spot,\n  Some Island far away,\n  Where weary men may find\n  A place to smoke in peace,\n  Were crinoline is not,\n  And hoops are out of place!\n  The loud waves, sounding a perpetual shout,\n  \n    Stopt for a while, and spluttered, “Yeou git eout.”\n  \n  And thou serenest moon,\n  That, with such holy face,\n  Dost look upon the girls\n  With their beaux embrace,\n  Tell me, in all thy round,\n  Hast thou not seen some spot\n  Where muslin is not known,\n  And calico is not?\n  Behind a cloud the moon withdrew in woe,\n  \n    And a voice sweet but sad responded, “Pooh!”\n  \n  Tell me, my secret soul—\n  Oh! tell me, Hope and Faith,\n  Is there no resting place\n  From women, girls and death?\n  Is there no happy spot\n  Where bachelors are blessed,\n  Where females never go,\n  And may dwell in peace?\n  Faith, Hope and Truth—best boons to mortals given—\n  Waved their bright wings, and answered, “Yes, in Heaven!”\n\n\n\n\n“A Parody Parodied”\nfrom The Evening Star (Washington, D.C.), 23 June 1857\nSome fair writer thus retaliates on the parodist whose production we published some days since. Both sides must be heard, and we give the lady a chance:\n\n\n- {:.indent-3}Tell me, ye winged winds\n- {:.indent-3}The round my pathway roar,\n- {:.indent-3}Do ye not know some spot\n- {:.indent-3}Where bachelors come no more—\n- {:.indent-3}Some lone and pleasant dell\n- {:.indent-3}Where no moustache is seen—\n- {:.indent-3}Where long eared dandies never come\n- {:.indent-3}Ourselves and fun between?\n- There came a murmur from the distant lee—\n- A low, sad tone, which whispered 'No-sir-ee.'\n\n\n- {:.indent-3}Tell me, thou misty deep,\n- {:.indent-3}Whose billows round me play,\n- {:.indent-3}Know'st thou some favored spot,\n- {:.indent-3}Some island far away,\n- {:.indent-3}Where weary girls may find\n- {:.indent-3}A rest from soft dough faces,\n- {:.indent-3}And hear themselves called women,\n- {:.indent-3}Nor likened to the graces?\n- Soon did the misty deep its answer give,\n- By murmuring, \"Not while brandy smashes live.\"\n\n\n- {:.indent-3}And thou, serenest moon,\n- {:.indent-3}What language dost thou utter\n- {:.indent-3}While gazing on the GENTLEMAN,\n- {:.indent-3}Whose head is in the gutter?\n- {:.indent-3}Say, hast thou in thy round\n- {:.indent-3}Gazed on some favored spot,\n- {:.indent-3}Where hats know not the weight of bricks,\n- {:.indent-3}And where cigars are not?\n- Behind a cloud the moon withdrew in woe,\n- But in italics answered, \"No, no, no!\"\n\n\n- {:.indent-3}Tell me, my secret soul—\n- {:.indent-3}Oh! tell me, Hope and Faith,\n- {:.indent-3}Is there no resting place\n- {:.indent-3}From fops and beaux and death?\n- {:.indent-3}Is there no happy spot,\n- {:.indent-3}Where womankind are blest—\n- {:.indent-3}Where man may never come,\n- {:.indent-3}And where the girls may rest?\n- Faith, Truth, and Hope—best boons to mortals iven,\n- Waved their bright wings and answered \"Yes, in Heaven.\"\n\n\n\n",
  id: 6
});
index.addDoc({
  title: "Grammar",
  author: "Unknown",
  layout: "poem",
  content: "The following article we copy from an old manuscript for the benefit of our juvenile readers.\n\n  \n    \n      Three little words we often see\n    \n  \n  \n    Are ARTICLES, a, an, and the.\n  \n  \n    \n      A NOUN’S the name of any thing,\n    \n  \n  \n    As school or garden, hoop, or swing.\n  \n  \n    \n      ADJECTIVES tell the kind of noun,\n    \n  \n  \n    As great, small, pretty, white, or brown.\n  \n  \n    \n      Instead of Nouns the PRONOUNS stand;\n    \n  \n  \n    John’s head, his face, my arm, your hand.\n  \n  \n    \n      VERBS tell of something being done;\n    \n  \n  \n    To read, write, count, sing, jump, or run.\n  \n  \n    \n      How things are done, the ADVERBS tell:\n    \n  \n  \n    As slowly, quickly, ill, or well.\n  \n  \n    \n      CONJUNCTIONS join the words together;\n    \n  \n  \n    As men and children, wind or weather.\n  \n  \n    \n      A PREPOSITION stands before\n    \n  \n  \n    A noun; as in or through a door.\n  \n  \n    \n      The INTERJECTION shows surprise;\n    \n  \n  \n    As oh! how pretty, ah! how wise.\n  \n  The whole are called nine PARTS of Speech,\n  Which Reading, Writing, Speaking teach.\n\n\n\n",
  id: 7
});
index.addDoc({
  title: "A Fragment Found in a Skeleton Case",
  author: "Unknown",
  layout: "poem",
  content: "From the N.Y. Statesman, of 1821.\nThe following beautiful stanzas were handed to us by a friend a few days since. He did not know the author; nor do we recollect ever to have read them before. The note of the transcriber remarked that these lines are the production of no ordinary mind, to which every one will assent. The picture was undoubtedly suggested by one of the finest passages in Hamlet; but the thoughts are happily conceived and elegantly expressed.\n\n\n  BEHOLD this ruin!—’twas a scull,\n  Once of athereal spirit full!\n  That narrow cell was life’s retreat!\n  This space was thought’s mysterious seat!\n  What beauteous pictures fill’d this spot?\n  What dreams of pleasure long forgot?\n  Not love, nor joy, nor hope, nor fear,\n  \n    Has left one trace or record here!\n\n  \n  Beneath this mouldering canopy\n  Once shone the bright and busy eye—\n  But start not at the dismal void!\n  If social love that eye employ’d,\n  If with no lawless fire it gleam’d,\n  But through the dew of kindness beam’d,\n  That eye shall be forever bright,\n  \n    When stars and suns have lost their light!\n  \n  Here, in this silent cavern, hung\n  That ready, swift, and tuneful tongue,\n  If falsehood’s honey it disdain’d,\n  And where it could not praise, was chain’d\n  If bold in virtue’s cause it spoke,\n  Yet gentle concord never broke,\n  That tuneful tongue shall plead for thee,\n  \n    When death unveils eternity!\n  \n  Say, did these fingers delve the mine,\n  Or with its envied rubies shine?\n  To hew the rock or wear the gem,\n  Can nothing now avail to them:\n  But if the page of truth they sought,\n  Or comfort to the mourner brought,\n  These hands a richer meed shall claim\n  \n    Than all that waits on wealth or fame.\n  \n  Avails it whether, bare or shod,\n  These feet the path of duty trod?\n  If from the bowers of joy they fled,\n  To soothe affliction’s humble bed.\n  If grandeur’s guilty bribe they spurn’d,\n  And home to virtue’s lap return’d,\n  These feet with angel’s wings shall vie,\n  And tread the palace of the sky!\n\n\n\n",
  id: 8
});
index.addDoc({
  title: "Mortality",
  author: "William Knox",
  layout: "poem",
  content: "\n  Oh! why should the spirit of mortal be proud!\n  Like a light-fleeting meteor, a fast-flitting cloud,\n  A flash of the lightning, a break of the wave,\n  \n    He passeth from life to his rest in the grave.\n  \n  The leaves of the oak and the willow shall fade,\n  Be scattered around and together be laid;\n  And the young and the old, and the low and the high,\n  \n    Shall moulder to dust, and together shall lie.\n  \n  The child whom a mother attended and loved;\n  The mother that infant’s affection who proved;\n  The husband that mother and infant who blest,\n  \n    Each, all are away to their dwelling of rest.\n  \n  The maid on whose brow, on whose cheek, in whose eye\n  Shone beauty and pleasure, her triumphs are by;\n  And alike from the minds of the living erased,\n  \n    Are the mem’ries of mortals who loved her and praised.\n  \n  The hand of the King that the sceptre hath borne;\n  The brow of the Priest that the mitre hath worn;\n  The eye of the sage and the heart of the brave,\n  \n    Are hidden and lost in the depths of the grave.\n  \n  The saint who enjoy’d the communion of Heaven;\n  The sinner who dared to remain unforgiven;\n  The wise and the foolish, the guilty and just,\n  \n    Have quietly mingled their bones in the dust.\n  \n  The peasant whose lot was to sow and to reap;\n  The herdsman that climb’d with his goats up the steep;\n  The beggar who wander’d in search of his bread,\n  \n    Have faded away like the grass that we tread.\n  \n  So the multitude goes, like the flower or the weed\n  That wither away to let others succeed;\n  So the multitude comes, even those we behold,\n  \n    To reap every tale that has often been told.\n  \n  For we are the same that our fathers have been,\n  We’ve seen the same sights that our fathers have seen;\n  We drink the same stream, and we see the same sun,\n  \n    And we run the course that our fathers have run.\n  \n  The thoughts we are thinking our fathers would think,\n  From the death we are shrinking our fathers would shrink,\n  To the life we are clinging they also would cling;\n  \n    But it speeds from the earth like a bird on the wing.\n  \n  They loved, but their story we cannot unfold,\n  They scorned, but the heart of the haughty is cold;\n  They grieved, but no wail from their slumbers will come;\n  \n    They joyed, but the tongues of their gladness is dumb.\n  \n  They died!—ah! they died! We things that are now,\n  Who walk on the turf that lies over each brow,\n  That make in their dwellings a transient abode,\n  \n    Meet the things that they met on their pilgrimage road.\n  \n  Yea, hope and despondency, pleasure and pain,\n  Are mingled together in sunshine and rain;\n  And the smile and the tear, and the song and the dirge,\n  \n    Still follow each other like surge upon surge.\n  \n  ‘Tis the wink of an eye, ‘tis the draught of a breath,\n  From the blossom of health to the paleness of death,\n  From the gilded saloon to the bier and the shroud—\n  Oh! why should the spirit of mortal be proud?\n\n\n\n",
  id: 9
});
index.addDoc({
  title: "A Literary Curiosity",
  author: "H. A. Deming",
  layout: "poem",
  content: "The following remarkable little poem is a contribution to the San Francisco Times, from the pen of Mrs. H. A. Deming. The reader will notice that each line is a quotation from some one of the standard authors of England and America. This is the result of a year's laborious search among the voluminous writings of thirty-eight leading poets of the past and present. The number of each line refers to the author below:\n\nLIFE.\n\n  1—Why all this toil for triumphs of an hour?\n  \n    2—Life’s a short summer, man a flower;\n  \n  3—By turns we catch the vital breath and die—\n  \n    4—The cradle and the tomb, alas, so nigh.\n  \n  5—To be is better far than not to be,\n  \n    6—Though all man’s life may seem a tragedy;\n  \n  7—But light cares speak when mighty griefs are dumb,\n  \n    8—The bottom is but shallow when they come.\n  \n  9—Your fate is but the common fate of all;\n  \n    10—Unmingled joys, here, to no man befall,\n  \n  11—Nature to each allots his proper sphere,\n  \n    12—Fortune makes folly her peculiar care;\n  \n  13—Custom does not often reason overrule,\n  \n    14—And throw a cruel sunshine on a fool.\n  \n  15—Live well, how long or short permit to heaven.\n  \n    16—They who forgive most, shall be most forgiven.\n  \n  17—Sin may be clasped so close we cannot see its face—\n  \n    18—Vile intercourse where virtue has no place;\n  \n  19—Then keep each passion down, however dear,\n  \n    20—Thou pendulum, betwixt a smile and tear;\n  \n  21—Her sensual snares, let faithless pleasures lay,\n  \n    22—With craft and skill, to ruin and betray;\n  \n  23—Soar not too high to fall, but stoop to rise,\n  \n    24—We masters grow of all that we despise.\n  \n  25—O, then, renounce that impious self-esteem;\n  \n    26—Riches have, wings, and grandeur is a dream.\n  \n  27—Think not ambition wise because ‘tis brave,\n  \n    28—The paths of glory lead but to the grave.\n  \n  29—What is ambition?—’tis a glorious cheat!—\n  \n    30—Only destructive to the brave and great.\n  \n  31—What’s all the gaudy glitter of a crown?\n  \n    32—The way to bliss lies not on beds of down.\n  \n  33—How long we live, not years, but actions, tell;\n  \n    34—That man lives twice who lives the first life well.\n  \n  35—Make, then, while yet we may, your God your friend.\n  \n    36—Whom Christians worship, yet not comprehend.\n  \n  37—The trust that’s given guard; and to yourself be just;\n  38—For, live we how we can, yet die we must.\n\n\n\n1, Young; 2, Dr. Johnson; 3, Pope; 4, Prior; 5, Sewel; 6, Spenser; 7, Daniel; 8, Sir Walter Raleigh; 9, Longfellow; 10, Southwell; 11, Congreve; 12, Churchill; 13, Rochester; 14, Armstrong; 15, Milton; 16, Baily; 17, Trench; 18, Somerville; 19, Thompson; 20, Byron; 21, Smollett; 22, Crabbe; 23, Massinger; 24, Cowley; 25, Beattie; 26, Cowper; 27, Sir Walter Davenant; 28, Grey; 29, Willis; 30, Addison; 31, Dryden; 32, Francis/Quarles; 33, Watkins; 34, Herrick; 35, William Mason; 36, Hill; 37, Dana; 38, Shakspeare.\n\n\n",
  id: 10
});
index.addDoc({
  title: "Over the River",
  author: ["Nancy Priest Wakefield"],
  layout: "poem",
  content: "\n  Over the river they beckon to me—\n  Loved one’s who’ve crossed to the further side;\n  The gleam of their snowy robes I see,\n  But their voices are drowned by the rushing tide.\n  There’s one with ringlets of sunny gold,\n  And eyes the reflection of Heaven’s own blue;\n  He crossed in the twilight, gray and cold,\n  And the pale mist hid him from mortal view.\n  We saw not the angels that met him there;\n  The gate of the city we could not see;—\n  Over the river, over the river,\n  \n    My brother stands waiting to welcome me!\n  \n  Over the river the boatman pale,\n  Carried another—the household pet;\n  Her brown curls waved in the gentle gale—\n  Darling Minnie! I see her yet!\n  She crossed on her bosom her dimpled hands,\n  And fearlessly entered the phantom bark;\n  We watched it glide from the silver sands,\n  And all our sunshine grew strangely dark.\n  We know she is safe on the further side,\n  Where all the ransomed and angels be;\n  Over the river, the mystic river,\n  \n    My childhood’s idol is waiting for me.\n  \n  For none return from those quiet shores\n  Who cross with the boatman cold and pale;\n  We hear the dip of the golden oars,\n  And catch a gleam of the snowy sail,—\n  And lo! they have passed from our yearning hearts;\n  They cross the stream and are gone for aye:\n  We may not sunder the vail apart\n  That hides from our visions the gates of day.\n  We only know that their barks no more\n  May sail with us o’er life’s stormy sea;\n  Yet somewhere, I know, on the unseen shore,\n  \n    They watch, and beckon, and wait for me!\n  \n  And I sit and think, when the sunset’s gold\n  Is flushing river and hill and shore,\n  I shall one day stand by the water cold,\n  And list for the sound of the boatman’s oar:\n  I shall watch for a gleam of the flapping sail;\n  I shall hear the boat as it gains the strand;\n  I shall pass from sight with the boatman pale,\n  To the better shore of the spirit land;\n  I shall know the loved who have gone before,\n  And joyfully sweet will the meeting be,\n  When over the river, the peaceful river,\n  The angel of Death shall carry me!\n\nSpringfield Republican\n\n\n",
  id: 11
});
index.addDoc({
  title: "The Union",
  author: "Henry Wadsworth Longfellow",
  layout: "poem",
  content: "\n  Thou, too, sail on, O ship of State!\n  Sail on, O Union, strong and great!\n  Humanity, with all its fears,\n  With all the hopes of future years,\n  Is hanging breathless on thy fate!\n  We know what master laid thy keel,\n  What workmen wrought thy ribs of steel,\n  Who made each mast, each sail, each rope,\n  What anvils sang, what hammers beat,\n  In what a forge and what a heat,\n  Were shaped the anchors of thy hope!\n  Fear not each sudden sound and shock,\n  ‘Tis of the wave and not the rock;\n  ‘Tis but the flapping of the sail,\n  And not a rent made by the gale!\n  In spite of rock and tempest’s roar,\n  In spite of false lights on the shore,\n  Sail on, nor fear to breast the sea!\n  Our hearts, our hopes, are all with thee:\n  Our hearts, our hopes, our prayers, tears,\n  Are all with thee—are all with thee!\n\n\n",
  id: 12
});
index.addDoc({
  title: "Be Careful What You Say",
  author: "Charles Carroll Sanger",
  layout: "poem",
  content: "\n  In speaking of a person’s faults\n  Pray don’t forget your own;\n  Remember, those with homes of glass\n  Should seldom throw a stone;\n  If we have nothing else to do\n  But talk of those who sin,\n  ‘Tis better we commence at hoe,\n  \n    And from that point begin.\n  \n  We have no right to judge a man,\n  Until he’s fairly tried;\n  Should we not like his company,\n  We know the world is wide;\n  Some may have faults—and who have not—\n  The old as well as young;\n  Perhaps we may, for aught we know,\n  \n    Have fifty to their one.\n  \n  I’ll tell you of a better plan,\n  And find it works full well;\n  I try my own defects to cure\n  Before of others tell;\n  And though I sometimes hope to be\n  No worse than some I know,\n  My own shortcomings bid me let\n  \n    The faults of others go.\n  \n  Then let us all, when we commence\n  To slander friend or foe,\n  Think of the harm one word may do\n  To those who little know;\n  Remember, curses, sometimes like\n  Our chickens, “roost at home;”\n  Don’t speak of others’ faults until\n  We have none of our own.\n\n\n",
  id: 13
});
index.addDoc({
  title: "If I Should Die To-night",
  author: "B. S. [Arabella Eugenia Smith]",
  layout: "poem",
  content: "\n  If I should die to-night,\n  My friends would look upon my quiet face,\n  Before they laid it in its resting place,\n  And deem that death had left it almost fair;\n  And, laying snow white flowers against my hair,\n  Would smooth it down with tearful tenderness,\n  And fold my hands with lingering caress,\n  \n    Poor hands, so empty and so cold to-night!\n  \n  If I should die to-night,\n  My friends would call to mind, with loving thought.\n  Some kindly deed the icy hand had wrought;\n  Some gentle word the frozen lips had said;\n  Errands on which the willing feet had sped,\n  The memory of my selfishness and pride,\n  My hasty words, would all be put aside,\n  \n    And so I should be loved and mourned to-night.\n  \n  If I should die to-night,\n  Even hearts enstranged would turn once more to me,\n  Recalling other days remorsefully;\n  The eyes that chill me with averted glance\n  Would look upon me as of yore, perchance,\n  And soften in the old, familiar way,\n  For who could war with dumb, unconscious clay?\n  \n    So I might rest, forgiven of all, to-night.\n  \n  Oh, friends, I pray to-night,\n  Keep not your kisses for my dead, cold brow,\n  The way is lonely, let me feel them now,\n  Think gently of me; I am travel worn;\n  My faltering feet are pierced with many a thorn,\n  Forgive, oh, hearts estranged, I plead!\n  When dreamless rest is mine I shall not need\n  The tenderness for which I long to-night.\n\n&mdash;B.S., in Christian Union.\n\n",
  id: 14
});
index.addDoc({
  title: "What I Live For",
  author: "G[eorge]. Lin&aelig;us Banks [possibly also Isabella Banks, who published under Mrs. George Linnaeus Banks]",
  layout: "poem",
  content: "\n  I live for those that love me,\n  For those I know are true,\n  For the heaven that smiles above me,\n  And awaits my spirit too;\n  For all the human ties that bind me,\n  For the task by God assign’d me,\n  For the bright hopes left behind me,\n  \n    And the Good that I can do.\n  \n  I live to learn their story,\n  Who’ve suffered for my sake,\n  To emulate their glory,\n  And follow in their wake;\n  Bards martyrs, patriots, sages,\n  The noble of all ages,\n  Whose deeds crowd history’s pages,\n  \n    And time’s great volume make.\n  \n  I live to hail that season,\n  By gifted minds foretold,\n  When men shall live by reason,\n  And not alone by gold—\n  When man to man united,\n  And every wrong thing righted,\n  The whole world shall be lighted,\n  \n    As Eden of old.\n  \n  I live to hold communion\n  With all that is divine,\n  To feel there is a union\n  ‘Twixt Nature’s heart and mine;\n  To profit by affliction,\n  Reap truths from fields of fiction,\n  Grow wiser from conviction,\n  \n    And fulfill each great design.\n  \n  I live for those that love me,\n  For those who know me true,\n  For heaven that smiles above me,\n  And awaits my spirit too;\n  For the wrong that needs resistance,\n  For the cause that lacks assistance,\n  For the FUTURE in the distance,\n  And the good that I can do.\n\n\n",
  id: 15
});
index.addDoc({
  title: "Advantage of Taking a Newspaper",
  author: "unknown",
  layout: "poem",
  content: "The following exhibits the genius and talent of a true poet, of one who is destined to render himself immortal by his inspirations. There is a moral to it, an inspiration, which should stir up the soul of very liberal minded and intelligent beings:—Boston Transcript.\n\n\n\n\n  I knew two friends, as much alike\n  As e’er you saw two stumps;\n  And no phrenologist could find\n  \n    A difference in their bumps.\n  \n  One took the papers, and his life\n  Was happier than a king’s;\n  His children all can read and write,\n  \n    And talk of men and things.\n  \n  The other took no papers, and\n  While strolling through the wood,\n  A tree fell down upon his crown,\n  \n    And hurt him, as it should!\n  \n  Had he been reading of the news\n  At home, like neighbor Jim,\n  I’ll bet a cent this accident\n  Would not befallen him!\n\n\n",
  id: 16
});
index.addDoc({
  title: "Beautiful Things",
  author: "Ellen P[almer]. Allerton",
  layout: "poem",
  content: "\n  Beautiful faces are those that wear,\n  It matters little if dark or fair—\n  \n    Whole-souled honestly printed there.\n  \n  Beautiful eyes are those that show,\n  Like crystal panes where hearth fires glow,\n  \n    Beautiful thoughts that burn below.\n  \n  Beautiful lips are those whose words\n  Leap from the heart like songs of birds,\n  \n    Yet whose utterance prudence girds.\n  \n  Beautiful hands are those that do\n  Work that is earnest and brave and true,\n  \n    Moment by moment the long day through.\n  \n  Beautiful feet are those that go\n  On kindly ministries to and fro—\n  \n    Down lowest ways, if God wills it so.\n  \n  Beautiful shoulders are those that bear\n  Ceaseless burdens of homely care\n  \n    With patient grace and daily prayer.\n  \n  Beautiful lives are those that bless—\n  Silent rivers of happiness.\n  \n    Whose hidden fountains few may guess\n  \n  Beautiful twilight, at set of sun\n  Beautiful goal, with race well won,\n  \n    Beautiful rest, with work well done.\n  \n  Beautiful graves, where grasses creep,\n  Where brown leaves fall, where drifts lie deep\n  Over worn-out hands—Oh, beautiful sleep!\n\n\n",
  id: 17
});
index.addDoc({
  title: "The Footsteps of Decay",
  author: "unknown",
  layout: "poem",
  content: "The following is a translation from an ancient Spanish poem, which, says the Edinburg Review, is surpassed by nothing with which we are acquainted in the Spanish language, except the \"Ode of Luis de Leon.\"\n\n\n\n\n  Oh! let the soul its slumbers break—\n  Arounds its senses and awake\n  To see how soon\n  Life, in its glories, glides away,\n  And the stern footsteps of decay\n  \n    Come stealing on.\n  \n  And while we view the rolling tide,\n  Down which our flowing minutes glide\n  Away so fast,\n  Let us the present hour employ,\n  And deem each future dream a joy\n  \n    Already past.\n  \n  Let no vain hope deceive the mind—\n  No happier let us hope to find\n  Tomorrow, than to-day.\n  Our golden dreams of yore were bright,\n  Like them the present shall delight—\n  \n    Like them decay.\n  \n  Our lives like hasting streams must be,\n  That into one engulphing sea\n  Are doomed to fall—\n  The sea of Death, whose waves roll on\n  O’er king and kingdom, crown and throne,\n  \n    And swallow all.\n  \n  Alike the river’s lordly tide,\n  Alike the humble rivulet’s glide\n  To that sad wave;\n  Death levels poverty and pride—\n  The rich and poor sleep side by side\n  \n    Within the grave.\n  \n  Our birth is but a starting place;\n  Life is the running of the race,\n  And death the goal:\n  There all our glittering toys are brought—\n  That path alone, of all unsought,\n  \n    Is found of all.\n  \n  See, then, how poor and little worth\n  Are all those glittering toys of earth\n  That lure us here!\n  Dreams of a sleep that death must break,\n  Alas! before it bids us wake,\n  \n    We disappear.\n  \n  Long ere the damp of earth can blight,\n  The cheek’s pure glow of red and white\n  Has passed away:\n  Youth smiled, and all was heavenly fair—\n  Age came and laid his finger there,\n  \n    And where are they?\n  \n  Where is the strength that spurned decay,\n  The steps that roved so light and gay,\n  The heart’s blithe tone?\n  The strength is gone, the step is slow,\n  And joy grows wearisome, and wo!\n  When age comes on!\n\n\n",
  id: 18
});
index.addDoc({
  title: "God",
  author: "Gavrila Romanovich Derzhavin",
  layout: "poem",
  content: "The following poem, translated from the Russian of Derzhavin, is scarcely equalled in grandeur and sublimity by any poem in any language. We take it from a work entitled 'Specimens of the Russian Poets,' translated by John Bowring.—Conn. Ob.\n\n\n\n\n  O thou eternal One! whose presence bright\n  All space doth occupy, all motion guide;\n  Unchanged thro’ time’s all devastating flight.\n  Thou only God! There is no God beside!\n  Being above all beings! Mighty One!\n  Who none can comprehend and none explore;\n  Who fill’st existence with Thyself alone:\n  Embracing all,—supporting—ruling o’er—\n  \n    Being whom we call God—and know no more.\n  \n  In its sublime research, philosophy\n  May measure out the ocean—deep—may count\n  The sands of the sun’s ray—but, God! for Thee\n  There is no weight nor measure:—none can mount\n  Up to Thy mysteries; Reason’s brightest spark,\n  Though kindled by Thy light, in vain would try\n  To trace Thy counsels, infinite and dark:\n  And thought is lost ere thought can soar so high;\n  \n    Even like past moments in eternity.\n  \n  Thou from primeval nothingness didst call\n  First chaos, their existence;—Lord! on Thee\n  Eternity had its foundation:—all\n  Sprung forth from Thee:—of light, and joy, harmony,\n  Sole origin:—all life, all beauty Thine.\n  Thy word created all, and doth create;\n  Thy splendor fills all space with rays divine.\n  Thou art, and wert, and shalt be! Glorious! Great\n  \n    Light-giving, life-sustaining Potentate!\n  \n  Thy chains the unmeasured universe surround:\n  Upheld by Thee, by Thee inspired with breath!\n  Thou the beginning with the end hast bound,\n  And beautifully mingled life and death!\n  As sparks mount upward from the fiery blaze,\n  So suns are born, so worlds spring forth from Thee;\n  And as the spangles in the sunny rays\n  Shine round the silver snow, the pageantry\n  \n    Of heaven’s bright army glitters in Thy praise.\n  \n  A million torches lighted by Thy hand\n  Wander unwearied through the blue abyss:\n  They own Thy power, accomplish thy command;\n  All gay with life, all eloquent with bliss.\n  What shall we call them! Piles of crystal light—\n  A glorious company of golden streams—\n  Lamps of celestial ether burning bright—\n  Suns lighting systems with their joyous beams?\n  \n    But Thou to these art as the noon to night.\n  \n  Yes! As a drop of water in the sea,\n  All this magnificence in Thee is lost:\n  What are ten thousand worlds compared to Thee?\n  And what am I then? Heavens unnumbered host,\n  Though multiplied by myriads, and arrayed\n  In all the glory of sublimest thought,\n  Is but an atom in the balance weighed\n  Against thy greatness, is a cypher brought\n  \n    Against infinity! What am I then? Nought!\n  \n  Nought! But the effluence of thy light divine,\n  Pervading worlds, hath reach’d my bosom too;\n  Yes! in my spirit doth Thy spirit shine\n  As shines the sun-beam in a drop of dew.\n  Now but I live, and one hope’s pinions fly\n  Eager towards thy presence; for in Thee\n  I live, and breathe, and dwell; aspiring high.\n  Even to the throne of Thy divinity\n  \n    I am, O God! and surely Thou must be!\n  \n  Thou art! directing, guiding all, Thou art!\n  Direct my understanding then to Thee;\n  Control my spirit, guide my wandering heart:\n  Though but an atom ‘midst immensity,\n  Still I am something, fashioned by Thy hand!\n  I hold a middle rank ‘twixt heaven and earth,\n  On the last verge of mortal being stand,\n  Close to the realms where angels have their birth,\n  \n    Just on the boundaries of the spirit land!\n  \n  The chain of the being is complete in me;\n  In me is matter’s last gradation lost,\n  And the next step is spirit—Deity!\n  I can command the lightening, and I am dust!\n  A monarch, and a slave; a worm, a God!\n  Whence came I here and how? so marvellously\n  Constructed and conceived? unknown! this clod\n  Lives surely through some energy;\n  \n    For from itself alone it could not be!\n  \n  Creator, yes! Thy wisdom and Thy word\n  Created me! Thou source of life and good!\n  Thou spirit of my spirit, and my Lord!\n  Thy light, Thy love, in their bright plenitude,\n  Filled me with an immortal soul to spring\n  Over the abyss of death, and bade it wear\n  The garments of eternal day, and wing\n  Its heavenly flight beyond this little sphere,\n  \n    Even to its source—to—Thee—it’s Author there.\n  \n  O thoughts ineffable! O visions blest!\n  Though worthless our conceptions all of Thee,\n  Yet shall Thy shadowed image fill our breast,\n  And waft its homage to Thy Deity.\n  God! thus alone my lowly thoughts can soar;\n  Thus seek Thy presence—Being wise and good!\n  Midst Thy vast works admire, obey, adore;\n  And when the tongue is eloquent no more,\n  The soul shall speak in tears of gratitude. \n\n\n",
  id: 19
});
index.addDoc({
  title: "In School Days",
  author: ["John Greenleaf Whittier"],
  layout: "poem",
  content: "\n  Still sits the school house by the road,\n  A ragged beggar sunning;\n  Around it still the sumachs grow,\n  \n    And blackberry vines are running.\n  \n  Within, the master’s desk is seen,\n  Deep scarred by raps official;\n  The warping floor, the battered seats,\n  \n    The jack-knife’s cared initial;\n  \n  The charcoal frescoes on its wall;\n  Its door’s worn sill, betraying\n  The feet that, creeping slow to school\n  \n    Went storming out to playing!\n  \n  Long years ago a setting sun\n  Shone over it at setting;\n  Lit up its western window-panes,\n  \n    And low caves’ icy fretting.\n  \n  It touched the tangled golden curls,\n  And brown eyes full of grieving,\n  Of one who still her steps delayed\n  \n    When all the school were leaving.\n  \n  For near her stood the little boy\n  Her childish favor singled,\n  His cap pulled low upon a face\n  \n    Where pride and shame were mingled.\n  \n  Pushing with restless feet the snow\n  To right and left he lingered:—\n  As restlessly her tiny hands\n  \n    The blue-checked apron fingered.\n  \n  He saw her lift her eyes; he felt\n  The soft hand’s light caressing,\n  And heard the tremble of her voice,\n  \n    As if a fault confessing.\n  \n  “I’m sorry that I spelt the word;\n  I hate to go above you,\n  Because,”—the brown eyes lower fell,—\n  \n    “Because, you see, I love you.”\n  \n  Still memory to a gray haired man\n  That sweet child-face is showing,\n  Dear girl! the grasses on her grave\n  \n    Have forty years been growing!\n  \n  He lives to learn, in life’s hard school,\n  How few who pass above him\n  Lament their triumph and his loss,\n  Like her,—because they love him.\n\n\n",
  id: 20
});
index.addDoc({
  title: "Night",
  author: "Henry W[adsworth]. Longfellow",
  layout: "poem",
  content: "\n  The day is done, and the darkness\n  Falls from the wings of night,\n  As a feather is wafted downward\n  \n    From an eagle in his flight.\n  \n  I see the lights of the village\n  Gleam through the rain and the mist,\n  And a feeling of sadness comes o’er me,\n  \n    That my soul cannot resist—\n  \n  A feeling of sadness and longing,\n  That is not akin to pain,\n  And resembles sorrow only\n  \n    As the mist resembles the rain.\n  \n  Come, read to me some poem,\n  Some noble and heartfelt lay,\n  That shall soothe this restless feeling,\n  \n    And banish the thoughts of day.\n  \n  Not from the bards sublime,\n  Not from the bards sublime,\n  Whose distant footsteps echo\n  \n    Through the corridors of time.\n  \n  For, like strains of material music,\n  Their mighty thoughts suggest\n  Life’s endless toil and endeavor;\n  \n    And to night I long for rest.\n  \n  Read from some humble poet,\n  Whose songs gush from his heart\n  As showers from the clouds of summer,\n  \n    Or tears from the eye-lids start.\n  \n  Who through longs days of labor,\n  And nights devoid of ease,\n  Still heard in his soul the music\n  \n    Of wonderful melodies.\n  \n  Such songs have power to quiet\n  The restless pulse of care,\n  And come like the benediction\n  \n    That follow after prayer.\n  \n  Then read from the treasured volume\n  This poem of thy choice,\n  And lend to the rhyme of the poet\n  \n    The beauty of thy voice.\n  \n  And the night shall be filled with music\n  And the cares that infest the day\n  Shall fold up their tents like the Arabs,\n  And silently pass away.\n\n\n",
  id: 21
});
index.addDoc({
  title: "Building on the Sand",
  author: "Eliza Cook",
  layout: "poem",
  content: "\n  ‘Tis well to woo, ‘tis well to wed,\n  For so the world has done\n  Since myrtles grew, and roses blew,\n  \n    And morning brought the sun.\n  \n  But have a care, ye young and fair—\n  Be sure ye pledge with truth,\n  Be certain that your love will wear\n  \n    Beyond the days of youth.\n  \n  For, if ye give not heart for heart,\n  As well as hand for hand,\n  You’ll find you’ve played the unwise part\n  \n    And “built upon the sand.”\n  \n  ‘Tis well to save, ‘tis well to have\n  A goodly store of gold,\n  And hold enough of the shining stuff,\n  \n    For charity is cold.\n  \n  But place not all your hopes and trust\n  In what the deep mine brings;\n  We cannot live on yellow dust\n  \n    Unmixed with purer things.\n  \n  And he who piles up wealth alone,\n  Will often have to stand\n  Beside his coffer chest, and own\n  \n    ‘Tis “built upon the sand.”\n  \n  ‘Tis good to speak in kindly guise,\n  And soothe where’er we can;\n  Fair speech should bind the human mind\n  \n    And love link man to man.\n  \n  But stay not at the gentle words,\n  Let deeds with language dwell,\n  The one who pities starving birds,\n  \n    Should scatter crumbs as well.\n  \n  The mercy that is warm and true\n  Must lend a helping hand,\n  For those who talk, yet fail to do,\n  But “build upon the sand.”\n\n\n",
  id: 22
});
index.addDoc({
  title: "One by One",
  author: ["Adelaide A. Procter"],
  layout: "poem",
  content: "\n  One by one the sands are flowing,\n  One by one the moments fall;\n  Some are coming, some are going,\n  \n    Do not strive to grasp them all.\n  \n  One by one thy duties wait thee,\n  Let the whole strength go to each,\n  Let not future dreams elate thee,\n  \n    Learn thou first what these can teach.\n  \n  One by one (bright gifts from Heaven,)\n  Joys are sent thee here below;\n  Take them readily when given,\n  \n    Ready, too, to let them go.\n  \n  One by one thy griefs shall meet thee,\n  Do not fear an armed band;\n  One will fade as others greet thee,\n  \n    Shadows passing through the land.\n  \n  Do not look at life’s long sorrow;\n  See how small each movement’s pain;\n  God will help thee for to-morrow:\n  \n    Every day begin again.\n  \n  Every hour that fleets so slowly,\n  Has its task to do or bear;\n  Luminous the crown, and holy,\n  \n    If thou set each gem with care.\n  \n  Do not linger with regretting,\n  Or for passion hours despond;\n  Nor, the daily toil forgetting,\n  \n    Look too eagerly beyond.\n  \n  Hours are golden links, God’s token,\n  Reaching Heaven; but one by one,\n  Take them lest the chain be broken\n  Ere the pilgrimage be done.\n\n\n\n",
  id: 23
});
index.addDoc({
  title: "Rest",
  author: "Father [Abram J.] Ryan",
  layout: "poem",
  content: "\n  My feet are wearied, and my hands are tired—\n  My soul oppressed—\n  And with desire have I long desired\n  \n    Rest—only Rest.\n  \n  ‘Tis hard to toil—when toil is almost vain\n  In barren ways;\n  ‘Tis hard to sow, and never garner grain\n  \n    In harvest days.\n  \n  The burden of my days is hard to bear—\n  But God knows best.\n  And I have prayed—but vain has been my prayer,\n  \n    For Rest—sweet Rest.\n  \n  ‘Tis hard to plant in spring, and never reap\n  The autumn yield;\n  ‘Tis hard to till—and when ‘tis tilled to weep\n  \n    O’er fruitless field.\n  \n  And so I cry a weak and human cry,\n  So heart oppressed;\n  And so I sigh a weak and human sigh\n  \n    For Rest—for Rest.\n  \n  My way has wound across the desert years,\n  And cares infest\n  My path, and thro’ the flowing of hot tears\n  \n    I pine for Rest.\n  \n  ‘Twas always so; when still a child, I laid\n  On mother’s breast\n  My wearied little head; e’en then I prayed,\n  \n    As now, for Rest\n  \n  And I am restless still; ‘twill soon be o’er;\n  For, down the West,\n  Life’s sun is setting, and I see the shore\n  Where I shall Rest.\n\n\n",
  id: 24
});
index.addDoc({
  title: "Rock Me to Sleep",
  author: "Florence Percy [Elizabeth Akers Allen]",
  layout: "poem",
  content: "\n  Backward, turn backward, oh Time, in your flight,\n  Make me a child again, just for to-night!\n  Mother, come back from the echoless shore,\n  Take me again to your heart as of yore;\n  Kiss from my forehead the furrows of care,\n  Smooth the few silver threads out of my hair;\n  Over my slumbers your loving watch keep—\n  \n    Rock me to sleep, mother—rock me to sleep!\n  \n  Backward, flow backward, oh tide of the years!\n  I am so weary of toil and of tears—\n  Toil without recompense—tears all in vain—\n  Take them, and give me my childhood again!\n  I have grown weary of dust and decay,\n  Weary of flinging my soul-wealth away—\n  Weary of sowing for others to reap,—\n  \n    Rock me to sleep, mother—rock me to sleep!\n  \n  Tired of the hollow, the base, the untrue,\n  Mother, oh mother, my heart calls for you!\n  Many a summer the grass has grown green,\n  Blossomed and faded, our faces between;\n  Yet with strong yearning and passionate pain\n  Long I to-night for your presence again;\n  Come from the silence so long and so deep—\n  \n    Rock me to sleep, mother—rock me to sleep!\n  \n  Over my heart, in the days that are flown,\n  No love like mother-love ever has shown;\n  No other worship abides and endures\n  Faithful, unselfish, and patient like yours;\n  None like a mother can charm away pain\n  From the sick soul and the world-weary brain;\n  Slumber’s soft calms o’er my heavy lids creep—\n  \n    Rock me to sleep; mother—rock me to sleep!\n  \n  Come, let your brown hair, just lighted with gold,\n  Fall on your shoulders again as of old;\n  Let it drop over my forehead to-night,\n  Shading my faint eyes away from the light,\n  For with its sunny-edged shadows once more\n  Haply will throng the sweet visions of yore\n  Lovingly, softly, its bright billows sweep—\n  \n    Rock me to sleep, mother—rock me to sleep!\n  \n  Mother, dear mother! the years have been long\n  Since I last listened to your lullaby song;\n  Since then, and unto my soul it shall seem\n  Womanhood’s years have been only a dream;\n  Clasped to your heart in a loving embrace,\n  With your light lashes just sweeping my face\n  Never hereafter to wake or to weep,\n  Rock me to sleep, mother—rock me to sleep!\n\n\nROME, Italy, May, 1860\n\n",
  id: 25
});
index.addDoc({
  title: "The Young Widow",
  author: "Robert Josselyn",
  layout: "poem",
  content: "\n  She is modest, but not bashful,\n  Free and easy, but not bold,\n  Like an apple, ripe and mellow,\n  Not too young and not too old;\n  Half inviting half repulsive,\n  Now advancing, and now shy;\n  There is mischief in her dimple,\n  \n    There is danger in her eye.\n  \n  She has studied human nature;\n  She is schooled in all its arts;\n  She has taken her diploma,\n  As the mistress of all hearts.\n  She can tell the very moment\n  When to sigh and when to smile;\n  O, a maid is sometimes charming,\n  \n    But a window, all the while!\n  \n  Are you sad? how very serious\n  Will her handsome face become;\n  Are you angry? she is wretched,\n  Lonely, friendless, tearful, dumb;\n  Are you mirthful? how her laughter,\n  Silver-sounding, will ring out,\n  She can lure, and catch, and play you\n  \n    As the angler does the trout.\n  \n  Ye old bachelors of forty,\n  Who have grown so bold and wise;\n  Young Americans of twenty,\n  With the love-locks in your eyes;\n  You may practise all the lessons\n  Taught by Cupid since the fall,\n  But I know a little widow,\n  Who could win and fool you all!\n\n\nJACKSON, Miss., May 1st, 1857.\n\n",
  id: 26
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Beautiful Snow",
  "author": "Unknown",
  "layout": "poem",
  "link": "/texts/2016-01-27-beautiful-snow/",
}
,{
  "title": "Excelsior",
  "author": "Henry W[adsworth] Longfellow",
  "layout": "poem",
  "link": "/texts/2016-01-27-excelsior/",
}
,{
  "title": "The Children",
  "author": "The Village Schoolmaster (Charles M. Dickinson)",
  "layout": "poem",
  "link": "/texts/2016-01-27-the-children/",
}
,{
  "title": "The Golden Side",
  "author": "(Mrs. M[ary]. A[nn]. Kidder)",
  "layout": "poem",
  "link": "/texts/2016-01-27-the-golden-side/",
}
,{
  "title": "Tired Mothers",
  "author": "Unknown",
  "layout": "poem",
  "link": "/texts/2016-01-27-tired-mothers/",
}
,{
  "title": "A Woman's Answer to a Man's Question",
  "author": "Lena Lathrop",
  "layout": "poem",
  "link": "/texts/2016-01-28-a-womans-answer/",
}
,{
  "title": "The Inquiry",
  "author": ["Charles Mackay"],
  "layout": "poem",
  "link": "/texts/2016-01-28-the-inquiry/",
}
,{
  "title": "Grammar",
  "author": "Unknown",
  "layout": "poem",
  "link": "/texts/2016-01-29-grammar/",
}
,{
  "title": "A Fragment Found in a Skeleton Case",
  "author": "Unknown",
  "layout": "poem",
  "link": "/texts/2016-02-06-a-fragment/",
}
,{
  "title": "Mortality",
  "author": "William Knox",
  "layout": "poem",
  "link": "/texts/2016-02-06-mortality/",
}
,{
  "title": "A Literary Curiosity",
  "author": "H. A. Deming",
  "layout": "poem",
  "link": "/texts/2016-02-07-a-literary-curiosity/",
}
,{
  "title": "Over the River",
  "author": ["Nancy Priest Wakefield"],
  "layout": "poem",
  "link": "/texts/2016-02-07-over-the-river/",
}
,{
  "title": "The Union",
  "author": "Henry Wadsworth Longfellow",
  "layout": "poem",
  "link": "/texts/2016-02-07-the-union/",
}
,{
  "title": "Be Careful What You Say",
  "author": "Charles Carroll Sanger",
  "layout": "poem",
  "link": "/texts/2016-02-25-be-careful-what-you-say/",
}
,{
  "title": "If I Should Die To-night",
  "author": "B. S. [Arabella Eugenia Smith]",
  "layout": "poem",
  "link": "/texts/2016-02-25-if-i-should-die-tonight/",
}
,{
  "title": "What I Live For",
  "author": "G[eorge]. Lin&aelig;us Banks [possibly also Isabella Banks, who published under Mrs. George Linnaeus Banks]",
  "layout": "poem",
  "link": "/texts/2016-02-25-what-i-live-for/",
}
,{
  "title": "Advantage of Taking a Newspaper",
  "author": "unknown",
  "layout": "poem",
  "link": "/texts/2016-03-01-advantage-of-taking-a-newspaper/",
}
,{
  "title": "Beautiful Things",
  "author": "Ellen P[almer]. Allerton",
  "layout": "poem",
  "link": "/texts/2016-03-01-beautiful-things/",
}
,{
  "title": "The Footsteps of Decay",
  "author": "unknown",
  "layout": "poem",
  "link": "/texts/2016-03-01-footsteps-of-decay/",
}
,{
  "title": "God",
  "author": "Gavrila Romanovich Derzhavin",
  "layout": "poem",
  "link": "/texts/2016-03-01-god/",
}
,{
  "title": "In School Days",
  "author": ["John Greenleaf Whittier"],
  "layout": "poem",
  "link": "/texts/2016-03-01-in-school-days/",
}
,{
  "title": "Night",
  "author": "Henry W[adsworth]. Longfellow",
  "layout": "poem",
  "link": "/texts/2016-03-01-night/",
}
,{
  "title": "Building on the Sand",
  "author": "Eliza Cook",
  "layout": "poem",
  "link": "/texts/2016-03-13-building-on-the-sand/",
}
,{
  "title": "One by One",
  "author": ["Adelaide A. Procter"],
  "layout": "poem",
  "link": "/texts/2016-03-13-one-by-one/",
}
,{
  "title": "Rest",
  "author": "Father [Abram J.] Ryan",
  "layout": "poem",
  "link": "/texts/2016-03-13-rest/",
}
,{
  "title": "Rock Me to Sleep",
  "author": "Florence Percy [Elizabeth Akers Allen]",
  "layout": "poem",
  "link": "/texts/2016-03-13-rock-me-to-sleep/",
}
,{
  "title": "The Young Widow",
  "author": "Robert Josselyn",
  "layout": "poem",
  "link": "/texts/2016-03-13-young-widow/",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/FugitiveVerses'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
