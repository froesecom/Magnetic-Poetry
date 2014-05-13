# == Schema Information
#
# Table name: words
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#  category_id :integer
#

class Word < ActiveRecord::Base
belongs_to :story_part
has_one :category
end
