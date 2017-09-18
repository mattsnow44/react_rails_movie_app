class Api::MoviesController < ApplicationController
  def index
    render json: Movie.order(created_at: :DESC)
  end

  def create
    movie = Movie.new(movie_params)
    if movie.save
      render json: movie
    else
      binding.pry
    end
  end

  def destroy
    Movie.find(params[:id]).destroy
  end

  private

  def movie_params
    params.permit(:title, :summary, :year)
  end
end
