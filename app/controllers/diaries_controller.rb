class DiariesController < ApplicationController
  def index
   @diary = Diary.new
   @diaries = Diary.all
  end

  def create
    diary = Diary.create(diary_params)
    render json:{ diary: diary }
  end

  private

  def diary_params
    params.require(:diary).permit(:text)
  end
end
