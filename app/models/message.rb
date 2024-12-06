class Message < ApplicationRecord
	after_create :sent_message

	def sent_message
     ActionCable.server.broadcast('chat_channel', { content: self.content })
	end
end
