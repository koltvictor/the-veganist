Rails.application.routes.draw do

  namespace :api do

    resources :recipes, only: [:index, :show, :create, :update, :destroy]

  end

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
