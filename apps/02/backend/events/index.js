class ServiceEvent {
  constructor({ type, data }) {
    this.type = type;
    this.data = data;
  }
}

module.exports = {
  getCommentCreateEvent(comment) {
    const type = "Comment:Created";
    const event = new ServiceEvent({ type, data: comment });
    return event;
  },
  getPostCreateEvent(post) {
    const type = "Post:Created";
    const event = new ServiceEvent({ type, data: post });
    return event;
  },
};
