- [x] Why would you use class component over function components (removing hooks from the question)?
    There are three rules that I use to decide when to use components over functions:
        1) Does the componenet need to make use of a lifecycle method?
        2) Does it need access to the _this_ keyword?
        3) Will it make the code easier to read or manipulate?
- [x] Name three lifecycle methods and their purposes.
        _render()_
            The most used lifecycle method. It is used in all React classes. It handles the component rendering for the UI.
        _componentDidMount()_
            This method is called as soon as the component is mounted as ready. It is one of the most preferred places to make API calls, especially if the goal is to load data from a remote endpoint. It also allows the use of _setStat()_, which _render()_ doesn't allow.
        _componentDidUpdate()_
            This happens as soon as something is updated and is mainly used to update the _DOM_ in response to prop or state changes.
- [x] What is the purpose of a custom hook?
    A custom hook lets you utilize component logic in reusable functions. In other words, they are the embodiment of the _DRY_ principle.
- [x] Why is it important to test our apps?
    There is no such thing as a perfect app. As such, testing enables you to spot errors made throughout the development process. This ultimately results in more stable code that can be confidently leveraged in a wide range of usage cases.