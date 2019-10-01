Rails.application.routes.draw do
  resources :user_animals
  resources :animals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  
  post "login", to: "authentication#login"

end
