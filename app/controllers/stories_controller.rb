class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :edit, :update, :destroy]

  # GET /stories
  # GET /stories.json
  def index
    @basic_categories = Category.where(:cat_type => "Basics")
    @theme_categories = Category.where(:cat_type => "Themes")
      
    # @theme_words = @theme_categories.find_words
    # @basic_words = @basic_categories.find_words
    # respond_to do |format|
    #   format.html
    #   format.json {render :json => @categories}
    # end
    @categories = {}
    Word.select(:id, :name, :category_id).each do |word|
      @categories[word.category_id] ||= []
      @categories[word.category_id].push word
    end
  end

  # GET /stories/1
  # GET /stories/1.json
  def show
    #id = Base64.decode64(params[:id])
    @story = Story.find(params[:id])
  end

  # GET /stories/new
  def new
    @story = Story.new
  end

  # GET /stories/1/edit
  def edit
  end

  # POST /stories
  # POST /stories.json
  def create
    @story = Story.create()
    url_string = Base64.encode64 @story.id.to_s
     
    story_id = @story.id
    render :json => story_id
      
  end

  # PATCH/PUT /stories/1
  # PATCH/PUT /stories/1.json
  def update
    respond_to do |format|
      if @story.update(story_params)
        format.html { redirect_to @story, notice: 'Story was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stories/1
  # DELETE /stories/1.json
  def destroy
    @story.destroy
    respond_to do |format|
      format.html { redirect_to stories_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def story_params
      params[:story]
    end
end
