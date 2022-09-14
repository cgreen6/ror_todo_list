class Api::NotesController < ApplicationController
  before_action :set_list
  before_action :set_todo, only: [:show, :update, :destroy]
   # parent model Todo

  # model name notes
  def index
    render json: @list.todos
  end

  def show
    @notes = Notes.find(params[:id])
    render json: @notes
  end

  def create
    @notes = @list.todos.new(notes_params)
    if @notes.save
      render json: @notes
    else
      render json: { errors: @notes.errors },
      status: :unprocessable_entity
    end
  end

  def update
    if @notes.update(notes_params)
      render json: @notes
    else
      render json: { erroros: @notes.errors },
      status: :unprocessable_entity
    end
  end

  def destroy
    @notes = Notes.find(params[:id])
    @notes.destroy
    render json: { message: 'Notes deleted' }
  end

  private
    def notes_params
      params.require(:notes).permit(:title, :complete, :price, :rating)
    end

    def set_list
      @list = List.find
      (params[:list_id])
    end

    def set_todo
      @todo = @list.todos.find(params[:id])
    end
  end

