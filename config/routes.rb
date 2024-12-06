Rails.application.routes.draw do
  root 'messages#index'
  resources :messages, only: :create
  resources :blogs
  get "up" => "rails/health#show", as: :rails_health_check
end
