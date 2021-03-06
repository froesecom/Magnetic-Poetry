class StoryPartsController < ApplicationController
  before_action :set_story_part, only: [:show, :edit, :update, :destroy]

  # GET /story_parts
  # GET /story_parts.json
  def index
    story_parts_words = {}
    story_parts = StoryPart.where(params[:story_id])
    # iterate through story parts to find word. Create story_part/word association to be passed into json data
    story_parts.each do |story_part|
      story_word_array = []
      story_word_array.push(story_part)
      story_word_array.push(story_part.word)
      story_parts_words[story_part.id] = story_word_array
    end
    
    render :json => story_parts_words
  end

  # GET /story_parts/1
  # GET /story_parts/1.json
  def show
    
  end

  # GET /story_parts/new
  def new
    @story_part = StoryPart.new
  end

  # GET /story_parts/1/edit
  def edit
  end

  # POST /story_parts
  # POST /story_parts.json
  def create
    story_part = StoryPart.create(story_part_params)
    

    story_part_id = story_part.id
    render :json => story_part_id
    
    # @story = Story.create()    
    # story_id = @story.id
    # render :json => story_id

    # respond_to do |format|
    #   if @story_part.save
    #     format.html { redirect_to @story_part, notice: 'Story part was successfully created.' }
    #     format.json { render action: 'show', status: :created, location: @story_part }
    #   else
    #     format.html { render action: 'new' }
    #     format.json { render json: @story_part.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /story_parts/1
  # PATCH/PUT /story_parts/1.json
  # DO NOT DELETE!
  def update
    respond_to do |format|
      if @story_part.update(story_part_params)
        format.html { redirect_to @story_part, notice: 'Story part was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @story_part.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /story_parts/1
  # DELETE /story_parts/1.json
  def destroy
    story_part_id = @story_part.id
    @story_part.destroy
    render :json => story_part_id
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story_part
      @story_part = StoryPart.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def story_part_params
      params.require(:story_part).permit(:x, :y, :word_id, :story_id)
    end
end
