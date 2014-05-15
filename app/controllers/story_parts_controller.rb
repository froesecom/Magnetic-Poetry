class StoryPartsController < ApplicationController
  before_action :set_story_part, only: [:show, :edit, :update, :destroy]

  # GET /story_parts
  # GET /story_parts.json
  def index
    @story_parts = StoryPart.all
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
    binding.pry
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
    @story_part.destroy
    respond_to do |format|
      format.html { redirect_to story_parts_url }
      format.json { head :no_content }
    end
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
