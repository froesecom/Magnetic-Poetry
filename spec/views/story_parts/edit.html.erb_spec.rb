require 'spec_helper'

describe "story_parts/edit" do
  before(:each) do
    @story_part = assign(:story_part, stub_model(StoryPart,
      :x => 1,
      :y => 1
    ))
  end

  it "renders the edit story_part form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", story_part_path(@story_part), "post" do
      assert_select "input#story_part_x[name=?]", "story_part[x]"
      assert_select "input#story_part_y[name=?]", "story_part[y]"
    end
  end
end
