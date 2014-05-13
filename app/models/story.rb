# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  created_at :datetime
#  updated_at :datetime
#

class Story < ActiveRecord::Base
has_many :story_parts
end
