require 'spec_helper'

describe "story_parts/index" do
  before(:each) do
    assign(:story_parts, [
      stub_model(StoryPart,
        :x => 1,
        :y => 2
      ),
      stub_model(StoryPart,
        :x => 1,
        :y => 2
      )
    ])
  end

  it "renders a list of story_parts" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
