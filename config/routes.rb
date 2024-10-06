Rails.application.routes.draw do
  root 'homepage#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index]
    end
  end
 

  get "up" => "rails/health#show", as: :rails_health_check
  # Catch all unmatched routes and redirect them to the homepage so that it can use React baded routing
  match '*unmatched_route', to: 'homepage#index', via: :all
end
