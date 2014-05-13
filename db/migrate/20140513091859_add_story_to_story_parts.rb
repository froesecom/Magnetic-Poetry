class AddStoryToStoryParts < ActiveRecord::Migration
  def change
    add_column :story_parts, :story_id, :integer
  end
end
