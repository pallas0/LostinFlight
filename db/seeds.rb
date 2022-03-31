# QuizUser.destroy_all
Legend.destroy_all
# User.destroy_all
# Quiz.destroy_all
User.destroy_all
BirdObservation.destroy_all

<<<<<<< HEAD
# puts "...seeding Legends..."
=======
puts "...seeding Legends..."
>>>>>>> main
L1 = Legend.create(name: "Phoenix", bio: "Amazing", trait: "ambition")
L2 = Legend.create(name: "Caladrius", bio: "So cool", trait: "empathy")
L3 = Legend.create(name: "Roch", bio: "Jeez", trait: "assertiveness")
L4 = Legend.create(name: "Alkonost", bio: "Whoa", trait: "creativity")
L5 = Legend.create(name: "Sirin", bio: "Eh", trait: "ambition")
<<<<<<< HEAD
# puts "Seeding users"
=======
puts "Seeding users"
>>>>>>> main
U1 = User.create(username: "Jojo", legend_id: L1.id, birthday: "1999-12-31", admin: true)
U2 = User.create(username: "Georgie", legend_id: L2.id, birthday: "1999-12-31", admin: true)
U3 = User.create(username: "Fluff", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U4 = User.create(username: "Arthur", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U5 = User.create(username: "Jane", legend_id: L4.id, birthday: "1999-12-31", admin: true)
<<<<<<< HEAD
# puts "Seeding Quizzes"
# Q1 = Quiz.create(question: "You and your friends are lost in the woods. You", empathy: "Assure everyone that everything is ok and that you’ll find a way out together", assertiveness: "Take the lead and devise a plan that you urge everyone to follow ", creativity: "Trust your senses and walk confidently in the direction from which you came ")
=======
>>>>>>> main

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

<<<<<<< HEAD
BirdObservation.create(user_id:2, region: "nebraska", species: "raven", date: "1999-12-31")
BirdObservation.create(user_id:2, region: "colorado", species: "bluebird", date: "1999-12-31")
BirdObservation.create(user_id:1, region: "colorado", species: "bluebird", date: "1999-12-31")
BirdObservation.create(user_id:1, region: "alaska", species: "grackle", date: "1999-12-31")
=======
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
>>>>>>> main

