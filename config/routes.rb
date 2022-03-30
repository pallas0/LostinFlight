Rails.application.routes.draw do
  
  resources :bird_observations
  resources :quiz_users
  resources :quizzes, only: [:index, :show, :update, :create, :destroy]
  resources :legends
  resources :users, only: [:index, :show]
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"

  # custom collection route
  get "/users/:id/collection", to: "bird_observations#collection_index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
