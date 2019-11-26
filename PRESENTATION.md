![debug](https://i.imgur.com/JWtGJAu.png)

---

## Agenda

- Walkthrough (15 min)
- Hackalong demo (20 min)
- Questions / Discussion (10 min)

---

## Walkthrough

--

### Vocabulary

- Breakpoints 🔴
- Tasks (tasks.json)
- Launch config (launch.json)
- Transpiling
- Source maps

--

### Usage (pros)

- The debug panel
- Call stack
- Watch
- Debug console
- Conditional breakpoints
- Break on exceptions
- Deactivate breakpoint(s)
- Debugging without exiting the editor 👍

--

### Quirks (cons)

- One (two..) more config file(s)..
- Windows / Unix settings
- Source maps
- Hot-reload might lose track of breakpoints
- "Reapply all breakpoints"
- Can't save Logpoints

---

## Demo

<small>https://github.com/jayway/kday-vscode-debugger</small>

note:

**Goal:**

```a
- Debug simple node process
- Debug simple website
- Debug tests (mocha)
```

**Extra credit:**

```a
- Debug with source maps (babel)
- Debug TypeScript
- Debug another language (eg. Python)
```

--

### Debug a simple node process

- launch.json
- Stepping in/out
- Inline breakpoints
- Conditional breakpoint
- Hit count & Log message
- Exception

--

### Debug a simple website

- Chrome Debugger
- tasks.json
  - ProblemMatcher

note:
Tasks can be replaced with `npm run x` or bash

--

### Debug tests

- Mocha Built-in config
- "Cheating" TDD 😇
- Reduce impediments for beginners
- Always useful (if you break a test ~)

note:
"Add Configuration..."
Attaching to debugger

--

### Debug with source maps

- Developing in node, using in web
- Any modern web-dev
- Builder (webpack) + Transpiler (babel)

note: 
other builders: rollup, gulp, grunt, browserify
other transpilers: coffee, typescript

---

## Discussions

note:
Does anyone currently use the vscode debugger?
Will anyone actually use this?

## Q&A

---

##### <span style="color: grey">\* Shameless plug \*</span>

## vscode container session at 14.00 right here

And _"vscode free play"_ at 15.00 - 15.50

#### Thanks 😘
