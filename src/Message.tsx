function Message() {
    const Name = "Raj";
    if (Name)
      return <h1>Hello {Name}</h1>;
    return <h1>Hello World!</h1>;
}

export default Message;