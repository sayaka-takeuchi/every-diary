class Diary < ApplicationRecord
  validates :text, presence: true
end
