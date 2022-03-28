# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
puts "...seeding..."
L1 = Legend.create(name: "Phoenix", bio: "Amazing", trait: "ambition")
L2 = Legend.create(name: "Caladrius", bio: "So cool", trait: "empathy")
L3 = Legend.create(name: "Roch", bio: "Jeez", trait: "assertiveness")
L4 = Legend.create(name: "Alkonost", bio: "Whoa", trait: "creativity")
L5 = Legend.create(name: "Sirin", bio: "Eh", trait: "ambition")

U1 = User.create(username: "Jojo", legend_id: L1.id, birthday: "1999-12-31", admin: true)
U2 = User.create(username: "Georgie", legend_id: L2.id, birthday: "1999-12-31", admin: true)
U3 = User.create(username: "Fluff", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U4 = User.create(username: "Arthur", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U5 = User.create(username: "Jane", legend_id: L4.id, birthday: "1999-12-31", admin: true)

Q1 = Quiz.create(question: "Question 1 Text", empathy: "Empathy Answer Option", assertiveness: "Assertiveness Anwer Option", creativity: "Creativity Answer Option", ambition: "ambition answer option", optimism: "optimism answer option")
Q2 = Quiz.create(question: "Question 2 Text", empathy: "Empathy Answer Option", assertiveness: "Assertiveness Anwer Option", creativity: "Creativity Answer Option", ambition: "ambition answer option", optimism: "optimism answer option")
Q3 = Quiz.create(question: "Question 3 Text", empathy: "Empathy Answer Option", assertiveness: "Assertiveness Anwer Option", creativity: "Creativity Answer Option", ambition: "ambition answer option", optimism: "optimism answer option")

QuizUser.create(user_id: U1.id, quiz_id: Q1.id, response: "")
QuizUser.create(user_id: U1.id, quiz_id: Q2.id, response: "")
QuizUser.create(user_id: U1.id, quiz_id: Q3.id, response: "")

QuizUser.create(user_id: U2.id, quiz_id: Q1.id, response: "")
QuizUser.create(user_id: U2.id, quiz_id: Q2.id, response: "")
QuizUser.create(user_id: U2.id, quiz_id: Q3.id, response: "")

QuizUser.create(user_id: U3.id, quiz_id: Q1.id, response: "")
QuizUser.create(user_id: U3.id, quiz_id: Q2.id, response: "")
QuizUser.create(user_id: U3.id, quiz_id: Q3.id, response: "")

puts "...happy weeding..."


# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "...seeding..."
L1 = Legend.create(name: "Phoenix", bio: "Amazing", trait: "ambition")
L2 = Legend.create(name: "Caladrius", bio: "So cool", trait: "empathy")
L3 = Legend.create(name: "Roch", bio: "Jeez", trait: "assertiveness")
L4 = Legend.create(name: "Alkonost", bio: "Whoa", trait: "creativity")
L5 = Legend.create(name: "Sirin", bio: "Eh", trait: "ambition")

U1 = User.create(username: "Jojo", legend_id: L1.id, birthday: "1999-12-31", admin: true)
U2 = User.create(username: "Georgie", legend_id: L2.id, birthday: "1999-12-31", admin: true)
U3 = User.create(username: "Fluff", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U4 = User.create(username: "Arthur", legend_id: L3.id, birthday: "1999-12-31", admin: true)
U5 = User.create(username: "Jane", legend_id: L4.id, birthday: "1999-12-31", admin: true)

Q1 = Quiz.create(question: "Question 1 Text", empathy: "Empathy Answer Option", assertiveness: "Assertiveness Anwer Option", creativity: "Creativity Answer Option", ambition: "ambition answer option", optimism: "optimism answer option")
Q2 = Quiz.create(question: "Question 2 Text", empathy: "Empathy Answer Option", assertiveness: "Assertiveness Anwer Option", creativity: "Creativity Answer Option", ambition: "ambition answer option", optimism: "optimism answer option")
Q3 = Quiz.create(question: "Question 3 Text", empathy: "Empathy Answer Option", assertiveness: "Assertiveness Anwer Option", creativity: "Creativity Answer Option", ambition: "ambition answer option", optimism: "optimism answer option")

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