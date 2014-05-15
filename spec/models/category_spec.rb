# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :text
#  created_at :datetime
#  updated_at :datetime
#  type       :string(255)
#

require 'spec_helper'

describe Category do
  
  describe '.new' do
    before do
      @category = Category.new
    end
  
    it 'should return a new Category' do
      @category.should_not be_nil
      @category.class.should eq(Category)
    end

    it 'should have a name attribute' do
      @category.should respond_to(:name)
    end

  end

end
