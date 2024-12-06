import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input"]

  sendMessage(event) {
    event.preventDefault()

    const content = this.inputTarget.value
    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]').content
      },
      body: JSON.stringify({ message: { content: content } })
    })
    this.inputTarget.value = ""
  }
}
