class Api::MoviesController < ApplicationController
  def index
    render json: Movie.all
  end

  def create
  end

  def destroy
    Movie.find(params[:id]).destroy
  end
end
