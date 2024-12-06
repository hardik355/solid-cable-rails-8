class MessagesController < ApplicationController

  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(message_params)
    if @message.save
      head :ok
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
  
end
