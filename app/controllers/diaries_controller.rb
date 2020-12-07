class DiariesController < ApplicationController
  def index
   @diary = Diary.new
   @diaries = Diary.all
  end

  def create
    diary = Diary.create(diary_params)
    render json:{ diary: diary }
  end

  def destroy
    diary = Diary.find(params[:id])
    if diary.destroy
      redirect_to root_path, notice: '削除しました'
    else
      redirect_to root_path, alert: "削除に失敗しました"
    end
  end

  private

  def diary_params
    params.require(:diary).permit(:text)
  end
end
