require "spec_helper"

describe StoryPartsController do
  describe "routing" do

    it "routes to #index" do
      get("/story_parts").should route_to("story_parts#index")
    end

    it "routes to #new" do
      get("/story_parts/new").should route_to("story_parts#new")
    end

    it "routes to #show" do
      get("/story_parts/1").should route_to("story_parts#show", :id => "1")
    end

    it "routes to #edit" do
      get("/story_parts/1/edit").should route_to("story_parts#edit", :id => "1")
    end

    it "routes to #create" do
      post("/story_parts").should route_to("story_parts#create")
    end

    it "routes to #update" do
      put("/story_parts/1").should route_to("story_parts#update", :id => "1")
    end

    it "routes to #destroy" do
      delete("/story_parts/1").should route_to("story_parts#destroy", :id => "1")
    end

  end
end
