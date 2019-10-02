Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :animals
      resources :users

      post 'addAnimal', to: 'users#add_animal'
      # post "login", to: "authentication#login"
    end
  end

end

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
