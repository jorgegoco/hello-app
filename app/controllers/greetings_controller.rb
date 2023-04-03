class GreetingsController < ApplicationController
  def random_greeting
    @greeting = Greeting.order("RANDOM()").first
    render json: { greeting: @greeting }
  end
end