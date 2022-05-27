const articles = [
    {
      id: 1,
      title: 'Hamlet',
      author:  'William Shakespeare',
      snippet: `Hamlet's combination of violence and introspection is unusual among Shakespeare's tragedies. It is also full of curious riddles and fascinating paradoxes, making it one of his most widely discussed plays.
      Professor Hibbard's illuminating and original introduction explains the process by which variant texts were fused in the eighteenth century to create the most commonly used text of today. Drawing on both critical and theatrical history, he shows how this gusion makes Hamlet seem a much more 'problematic' play than it was when it originally appeared in the First Folio of 1623. (less)`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1266452027l/18588.jpg',
    },
    {
      id: 2,
      title: 'The Great Gatsby',
      author:  'F. Scott Fitzgerald',
      snippet: `The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted "gin was the national drink and sex the national obsession," it is an exquisitely crafted tale of America in the 1920s.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg',
    },    
    {
      id: 3,
      title: 'The Picture of Dorian Grayby',
      author:  'Oscar Wilde',
      snippet: `Since its first publication in 1890, Oscar Wilde's only novel, The Picture of Dorian Gray, has remained the subject of critical controversy. Acclaimed by some as an instructive moral tale, it has been denounced by others for its implicit immorality. After having his portrait painted, Dorian Gray is captivated by his own beauty. Tempted by his world-weary, decadent friend Lord Henry Wotton, he wished to stay young forever and pledges his very soul to keep his good looks. As Dorian's slide into crime and cruelty progresses, he stays magically youthful, while his beautiful portrait changes, revealing the hideous corruption of moral decay. Set in fin-de-siécle London, the novel traces a path from the studio of painter Basil Howard to the opium dens of the East End. The text of this edition is derived from the Oxford English Texts, which prints a critically established version of the first book edition of 1891.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348435910l/2338386.jpg',
    },
    {
      id: 4,
      title: 'Nineteen Eighty-Four',
      author:  'George Orwell',
      snippet: `The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his "most solid, most brilliant" work. Though the story of Nineteen Eighty-Four takes place thirty-five years hence, it is in every sense timely. The scene is London, where there has been no new housing since 1950 and where the city-wide slums are called Victory Mansions. Science has abandoned Man for the State. As every citizen knows only too well, war is peace.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617559981l/5471.jpg',
    },
    {
      id: 5,
      title: 'Crime and Punishment',
      author:  'Fyodor Dostoevsky',
      snippet: `Crime and Punishment is the story of a murder committed on principle, of a killer who wishes by his action to set himself outside and above society. A novel of fearful tension, physical, and psychological, it is pervaded by Dostoevsky's sinister evocation of St Petersburg, yet in the life of its gloomy tenements and drink-shops provides moments of wild humour.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348523421l/3185003.jpg',
    },
    {
      id: 6,
      title: 'Pride and Prejudice',
      author:  'Jane Austen',
      snippet: `Set in England in the early 19th century, Pride and Prejudice tells the story of Mr. and Mrs. Bennet's five unmarried daughters after the rich and eligible Mr. Bingley and his status-conscious friend, Mr. Darcy, have moved into their neighborhood.
      When Elizabeth Bennet meets Mr. Darcy she is repelled by his overbearing pride, and prejudice towards her family. But the Bennet girls are in need of financial security in the shape of husbands, so when Darcy's friend, the affable Mr. Bingley, forms an attachment to Jane, Darcy becomes increasingly hard to avoid. Polite society will be turned upside down in this witty drama of friendship, rivalry, and love—Jane Austen's classic romance novel.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1250731798l/5777675.jpg',
    },
    {
      id: 7,
      title: 'Macbeth',
      author:  'William Shakespeare',
      snippet: `A play of darkness originally conceived for daylight performance at the Globe, Macbeth is a tour de force of theatrical illusion from the supernatural to mere delusion. In this fully annotated edition, Nicholas Brooke investigates the great appeal of the play's use of illusion, relating its changing theatrical fortunes to changes within society and in theatrical conditions. Offering a fresh reconsideration of textual problems, the book makes a major contribution to our understanding of the play within aesthetic history.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348413036l/5179002.jpg',
    },
    {
      id: 8,
      title: 'Middlemarch',
      author:  'George Eliot',
      snippet: `Writing at the very moment when the foundations of Western thought were being challenged and undermined, George Eliot fashions in Middlemarch (1871-2) the quintessential Victorian novel, a concept of life and society free from the dogma of the past yet able to confront the scepticism that was taking over the age.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348581818l/2874705.jpg',
    },
    {
      id: 9,
      title: 'Romeo and Juliet',
      author:  'William Shakespeare',
      snippet: `This innovative edition of one of Shakespeare's most beloved plays offers modernized texts not only of the 1599 quarto but also of the short, or bad quarto of 1597, regarding each as witness to a mobile text which changed in composition as Shakespeare wrote it and which has continued to evolve throughout its richly varied history, both in the theatre and in film, television, opera, and ballet. The more familiar 1599 text is accompanied by a detailed explanatory commentary. The Introduction traces the Romeo and Juliet narrative from its origins in myth through its adaptation in the novella, and shows how Shakespeare's transmutation of the story reflects contemporary concerns with love, death, adolescence, and patriarchism.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1176432173l/625963.jpg',
    },
    {
      id:10,
      title: 'Dracula',
      author: 'Bram Stoker',
      snippet: `The most famous of all vampire stories, Dracula remains a compelling read, rattling along at break-neck speed, a true page-turner. Here is a new edition of one of the great horror stories in English literature, the novel that spawned a myth and a proliferation of vampire tales in film, television, graphic novels, cartoons, and teen fiction, including the current craze revolving around the Twilight and True Blood series. The volume includes a lively and fascinating introduction by Roger Luckhurst that considers the Gothic genre and vampire legend, discusses the vampire tale as sexual allegory, and outlines the social and cultural contexts that feed into the novel, including the New Woman, new technology, race, immigration, and religion. In addition, Luckhurst provides comprehensive explanatory notes that flesh out vampire mythology and historical allusions, plus an appendix featuring Stoker's short story, "Dracula's Guest," an early draft or abandoned chapter that was not published as part of the novel. Also included are a chronology of Bram Stoker's life and a timeline of vampire literature before Dracula.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595747938l/9618313._SY475_.jpg',
    },
    {
      id: 11,
      title: 'Oliver Twist',
      author:  'Charles Dickens',
      snippet: `In the figure of the half-starved Oliver in the workhouse asking for 'more', Dickens created the nineteenth century's most famous image of protest against cruelty. Yet Oliver Twist develops from a topical satire on the inhumanity of the New Poor Law into something greater. What unfolds is a powerful and violent struggle between Good and Evil, as Oliver becomes ensnared in the labyrinth of London and the nightmare world of Fagin. With its macabre humour, its starkly rendered contrasts, and above all the unforgettable depiction of Fagin, Oliver Twist is the most compelling of Dickens's early novels.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1331902088l/2527110.jpg',
    },
    {
      id: 12,
      title: 'Gullivers Travels',
      author:  'Jonathan Swift',
      snippet: `In Gulliver's Travels, the narrator represents himself as a reliable reporter of the fantastic adventures he has just experienced. But how far can we rely on a narrator who has been impersonated by someone else? The work purports to be a travel book, and describes the shipwrecked Gulliver's encounters with the inhabitants of four extraordinary places: Lilliput, Brobdingnag, Laputa, and the country of the Houyhnhnms. An extraordinarily skillful blend of fantasy and realism makes Gulliver's Travels by turns hilarious, frightening, and profound. Swift's alter ego plays tricks on us, and our gullibility uncovers one of the world's most disturbing satires of the human condition.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348595564l/3079691.jpg',
    },
    {
      id: 13,
      title: 'The Adventures of Tom Sawyer',
      author:  'Mark Twain',
      snippet: `In this enduring and internationally popular novel, Mark Twain combines social satire and dime-novel sensation with a rhapsody on boyhood and on America's pre-industrial past. Tom Sawyer is resilient, enterprising, and vainglorious, and in a series of adventures along the banks of the
      Mississippi he usually manages to come out on top. From petty triumphs over his friends and over his long-suffering Aunt Polly, to his intervention in a murder trial, Tom engages readers of all ages. He has long been a defining figure in the American cultural imagination.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348554238l/3890602.jpg',
    },
    {
      id: 14,
      title: 'A Little Princess',
      author:  'Frances Hodgson Burnett',
      snippet: `Sara Crewe, an exceptionally intelligent and imaginative student at Miss Minchin's Select Seminary for Young Ladies, is devastated when her adored, indulgent father dies. Now penniless and banished to a room in the attic, Sara is demeaned, abused, and forced to work as a servant. How this resourceful girl's fortunes change again is at the center of A Little Princess, one of the best-loved stories in all of children's literature.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327868556l/3008.jpg',
    },
    {
      id: 15,
      title: 'Republic',
      author:  'Plato',
      snippet: `The central work of one of the West's greatest philosophers, The Republic of Plato is a masterpiece of insight and feeling, the finest of the Socratic dialogues, and one of the great books of Western culture. This new translation captures the dramatic realism, poetic beauty, intellectual vitality, and emotional power of Plato at the height of his powers. Deftly weaving three main strands of argument into an artistic whole--the ethical and political, the aesthetic and mystical, and the metaphysical--Plato explores in The Republic the elements of the ideal community, where morality can be achieved in a balance of wisdom, courage, and restraint.`,
      image1: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609194556l/3401521._SY475_.jpg',
    },
  ]
  
  export default articles