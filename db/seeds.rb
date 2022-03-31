<<<<<<< HEAD
# QuizUser.destroy_all
Legend.destroy_all
User.destroy_all
# Quiz.destroy_all
User.destroy_all
BirdObservation.destroy_all

=======
>>>>>>> main
puts "...seeding Legends..."
L1 = Legend.create(name: "Phoenix", bio: "The Phoenix is an immortal bird with a cyclical life span; it ages, dies, then is reborn from its ashes.  Associated with the sun and new beginnings, the phoenix is associated with resilience, ambition, and bravery.  The word ‘phoenix’ was used in 12th century English to describe an ‘excellent person’. Younger variations of this personality may display the negative qualities of these traits, with ambition translating to brash impulsiveness, and bravery as arrogance, but the phoenix’s innate sense of curiosity and desire for improvement allows these to be quickly refined.  Natural leaders and pioneers of change, the phoenix may often be found questioning systems, in quickly rising industries, or inspiring those around them.
", trait: "Ambition")
L2 = Legend.create(name: "Caladrius", bio: "You are a Caladrius! These pure-white mythical birds, found in medieval lore, care deeply for others, just like you. They’re known for their magical ability to heal the sick with just one look, absorbing the illness and then flying with it towards the sun, where it’s burned away. ", trait: "Empathy")
L3 = Legend.create(name: "Rokh" , bio: "You are a Rokh! This enormous bird of prey is known for its strength and assertiveness in action. This bird appears in Asian mythology and Indian Sanskrit epics, derived from the Spanish word “rocho”. Strong enough to carry small elephants, this bird is praised for saving sailors stranded at sea. However, if crossed, there will be vengeance to follow.", trait: "Assertiveness")
L4 = Legend.create(name: "Alkonost", bio: "You truly are great, half human - half bird, your song is so enchanting it causes those around you to forget earthly desires and want nothing more as long as they live. Your powers are not only known to the realm of humans, nature too acknowledges your strength, hurling waves across the seas to protect your nascent young as they emerge from their shell on the beaches of the paradise you call home.  Be aware, your counterpart the Sirin may need your help - are you prepared to show your greatness?", trait: "Creativity")
L5 = Legend.create(name: "Sirin", bio: "Half human and half bird, your song draws around you the desires and hopes of humanity, causing those who hear it to follow your wishes at any peril.  Your home on the Vyraj river allows you to sing your melodies to the saints in heaven, your voice is so powerful only the departed can safely listen.  Your friend the Alkonost watches over the day, while you watch over the night, can you keep the skies safe?", trait: "Optimism")
<<<<<<< HEAD

=======
>>>>>>> main
puts "Seeding users"
# U1 = User.create(username: "Jojo", legend_id: L1.id, birthday: "1999-12-31", admin: true)
U2 = User.create(username: "Georgie", legend_id: L2.id, birthday: "1999-12-31", admin: true)
U3 = User.create(username: "Fluff", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U4 = User.create(username: "Arthur", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U5 = User.create(username: "Jane", legend_id: L4.id, birthday: "1999-12-31", admin: true)
puts "seeding observed birds..."
BirdObservation.create(user_id:2, region: "nebraska", species: "raven", date: "1999-12-31")
BirdObservation.create(user_id:2, region: "colorado", species: "bluebird", date: "1999-12-31")
BirdObservation.create(user_id:1, region: "colorado", species: "bluebird", date: "1999-12-31")
BirdObservation.create(user_id:1, region: "alaska", species: "grackle", date: "1999-12-31")
puts "...happy seeding..."
puts "seeding quiz_questions"
Q1 = QuizQuestion.create(questionText: "You and your friends are lost in the woods. You " )
Q2 = QuizQuestion.create(questionText: "You’re presented with three goblets of potions. Goblet 1 promises an ambiguous but positive life-changing experience, Goblet 2 promises all your wishes will come true, but there’s an unnamed price you’ll have to pay, and Goblet 3 will grant you a single wish. Which do you drink?" )
Q3 = QuizQuestion.create(questionText: "You have just lost an impressive battle in the sky, your opponent relishes in their victory & is beaming with pride. You…" )
Q4 = QuizQuestion.create(questionText: "Walking through the forest you encounter a troll; this troll does not allow crossing, you…" )
Q5 = QuizQuestion.create(questionText: "Your final words to your trusted apprentice before they venture off on their own:" )
Q6 = QuizQuestion.create(questionText: "What question drives you?" )
puts "quiz_questions seeded"
puts "seeding quiz_answers"
QuizAnswer.create([
  {
    answerText: "Assure everyone that everything is ok and you’ll find a way out together",
    trait: "Empathy",
    quiz_question_id: Q1.id
  },
   {
    answerText: "Take the lead and devise a plan that you urge everyone to follow ",
    trait: "Assertiveness",
    quiz_question_id: Q1.id
  },
   {
    answerText: "Trust your senses and walk confidently in the direction from which you came ",
    trait: "Creativity",
    quiz_question_id: Q1.id
  },
   {
    answerText: "Goblet 1",
    trait: "Creativity",
    quiz_question_id: Q2.id
  },
   {
    answerText: "Goblet 2",
    trait: "Ambition",
    quiz_question_id: Q2.id
  },
   {
    answerText: "Goblet 3",
    trait: "Assertiveness",
    quiz_question_id: Q2.id
  },
   {
    answerText: "Congratulate the opponent & dismiss yourself to search for more prey.",
    trait: "Creativity",
    quiz_question_id: Q3.id
  },
   {
    answerText: "Plan a rematch, training starts now.",
    trait: "Ambition",
    quiz_question_id: Q3.id
  },
   {
    answerText: "You’re happy with the battle and congratulate the opponent on their win, there will be more soon. ",
    trait: "Optimism",
    quiz_question_id: Q3.id
  },
   {
    answerText: "Try to connect & reason with the troll",
    trait: "Empathy",
    quiz_question_id: Q4.id
  },
   {
    answerText: "Try to quell the troll until access is given ",
    trait: "Assertiveness",
    quiz_question_id: Q4.id
  },
   {
    answerText: "Patiently wait until the troll leaves ",
    trait: "Optimism",
    quiz_question_id: Q4.id
  },
   {
    answerText: "No one saves us but ourselves. ",
    trait: "Ambition",
    quiz_question_id: Q5.id
  },
   {
    answerText: "Because you are alive, everything is possible.",
    trait: "Optimism",
    quiz_question_id: Q5.id
  },
   {
    answerText: "For things to reveal themselves to us, we need to be ready to abandon our views about them.",
    trait: "Empathy",
    quiz_question_id: Q5.id
  },
   {
    answerText: "Who",
    trait: "Empathy",
    quiz_question_id: Q6.id
  },
   {
    answerText: "When",
    trait: "Assertiveness",
    quiz_question_id: Q6.id
  },
   {
    answerText: "What",
    trait: "Creativity",
    quiz_question_id: Q6.id
  },
   {
    answerText: "Why ",
    trait: "Ambition",
    quiz_question_id: Q6.id
  },
   {
    answerText: "Where ",
    trait: "Optimism",
    quiz_question_id: Q6.id
  }
])
puts "quiz_answers seeded"