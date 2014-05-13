# == Schema Information
#
# Table name: words
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Word < ActiveRecord::Base
end
