# QuizUser.destroy_all
# Legend.destroy_all
# User.destroy_all
# Quiz.destroy_all

puts "...seeding Legends..."
L1 = Legend.create(name: "Phoenix", bio: "Amazing", trait: "ambition")
L2 = Legend.create(name: "Caladrius", bio: "So cool", trait: "empathy")
L3 = Legend.create(name: "Roch", bio: "Jeez", trait: "assertiveness")
L4 = Legend.create(name: "Alkonost", bio: "Whoa", trait: "creativity")
L5 = Legend.create(name: "Sirin", bio: "Eh", trait: "ambition")
puts "Seeding users"
U1 = User.create(username: "Jojo", legend_id: L1.id, birthday: "1999-12-31", admin: true)
U2 = User.create(username: "Georgie", legend_id: L2.id, birthday: "1999-12-31", admin: true)
U3 = User.create(username: "Fluff", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U4 = User.create(username: "Arthur", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U5 = User.create(username: "Jane", legend_id: L4.id, birthday: "1999-12-31", admin: true)
puts "Seeding Quizzes"
Q1 = Quiz.create(question: "You and your friends are lost in the woods. You", empathy: "Assure everyone that everything is ok and that you’ll find a way out together", assertiveness: "Take the lead and devise a plan that you urge everyone to follow ", creativity: "Trust your senses and walk confidently in the direction from which you came ")

Q2 = Quiz.create(question: "You’re presented with three goblets of potions. Goblet 1 promises an ambiguous but positive life-changing experience, Goblet 2 promises all your wishes will come true, but there’s an unnamed price you’ll have to pay, and Goblet 3 will grant you a single wish. Which do you drink? ", assertiveness: "Goblet 3", creativity: "Goblet 1", ambition: "Goblet 2" )

Q3 = Quiz.create(question: "You have just lost an impressive battle in the sky, your opponent relishes in their victory & is beaming with pride. You…", creativity: "Congratulate the opponent & dismiss yourself to search for more prey.", ambition: "Plan a rematch, training starts now.", optimism: "You’re happy with the battle and congratulate the opponent on their win, there will be more soon.")

Q4 = Quiz.create(question: "Walking through the forest you encounter a troll; this troll does not allow crossing, you…", empathy: "Try to connect & reason with the troll ", assertiveness: "Try to quell Troll until access is given", optimism: "Patiently wait until the troll leaves")

Q5 = Quiz.create(question: "Your final words to your trusted apprentice before they venture off on their own:", empathy: "For things to reveal themselves to us, we need to be ready to abandon our views about them.", ambition: "No one saves us but ourselves.", optimism: "Because you are alive, everything is possible.")

Q6 = Quiz.create(question: "What question drives you?" , empathy: "Who" , assertiveness: "When" , creativity: "What" , ambition: "Why", optimism: "Where") 

puts "Seeding quiz users"
QuizUser.create(user_id: U1.id, quiz_id: Q1.id, response: "")
QuizUser.create(user_id: U1.id, quiz_id: Q2.id, response: "")
QuizUser.create(user_id: U1.id, quiz_id: Q3.id, response: "")

QuizUser.create(user_id: U2.id, quiz_id: Q1.id, response: "")
QuizUser.create(user_id: U2.id, quiz_id: Q2.id, response: "")
QuizUser.create(user_id: U2.id, quiz_id: Q3.id, response: "")

QuizUser.create(user_id: U3.id, quiz_id: Q1.id, response: "")
QuizUser.create(user_id: U3.id, quiz_id: Q2.id, response: "")
QuizUser.create(user_id: U3.id, quiz_id: Q3.id, response: "")

puts "...happy seeding..."