# == Schema Information
#
# Table name: story_parts
#
#  id         :integer          not null, primary key
#  x          :integer
#  y          :integer
#  created_at :datetime
#  updated_at :datetime
#  story_id   :integer
#  word_id    :integer
#

class StoryPart < ActiveRecord::Base
belongs_to :story
belongs_to :word
end
