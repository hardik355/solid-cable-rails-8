import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data, 'data is receiving')
    const messagesContainer = document.getElementById("messages")
    messagesContainer.insertAdjacentHTML("beforeend", `<div>${data.content}</div>`)
  }
});
