class AddWordToStoryParts < ActiveRecord::Migration
  def change
    add_column :story_parts, :word_id, :integer
  end
end
